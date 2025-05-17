import * as THREE from 'three';
import { FollowCamera } from './lib/cameras/followcam';
import { OrbitalCamera } from './lib/cameras/orbitalcam';
import { DynamicNode, SceneGraphNode } from './lib/physics/scenegraph';
import { Sphere } from './lib/physics/sphere';
import $ from 'jquery';
import { buildSerpentineDominoCourse } from './buildCourse';
import { LightingManager } from './lib/lighting';

export class App {
    canvas: HTMLCanvasElement;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;

    activeCamera: OrbitalCamera;

    topCamera: OrbitalCamera;
    followCamera: FollowCamera;

    clock: THREE.Clock;
    sceneGraph: SceneGraphNode;

    lightingManager: LightingManager;
    activeDomino: DynamicNode | null = null;
    sphere: Sphere | null = null;

    constructor() {
        this.canvas = $("#main-canvas")[0] as HTMLCanvasElement;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;

        this.topCamera = new OrbitalCamera(75, this.aspect, 0.1, 50000, this.canvas);
        this.followCamera = new FollowCamera(75, this.aspect, 0.1, 50000, this.canvas);

        this.activeCamera = this.topCamera;

        $(this.canvas).on('resize', () => {
            this.activeCamera.aspect = this.aspect;
            this.activeCamera.updateProjectionMatrix();
            this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        });

        this.clock = new THREE.Clock();
        this.sceneGraph = new SceneGraphNode();

        this.lightingManager = new LightingManager(this.scene);

        this.setupKeyBindings();

        this.populateScene();

        this.animate();
    }

    get aspect() {
        return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    add(obj: DynamicNode) {
        this.scene.add(obj.mesh);
        this.sceneGraph.add(obj);
    }

    animate() {
        this.renderer.render(this.scene, this.activeCamera);
        this.activeCamera.update();
        
        // Update spotlight to track the current active object (sphere or active domino)
        this.updateActiveObject();
        
        this.sceneGraph.update(this.clock.getDelta());
        requestAnimationFrame(() => this.animate());
    }
    
    updateActiveObject() {
        // If sphere is not null and not collided, it's the active object
        if (this.sphere && !this.sphere.collided) {
            this.lightingManager.setTrackingObject(this.sphere.mesh);
        } else {
            // Find dominoes that are currently toppling but not fallen
            // Focus on the most recently started one (the one that just began falling)
            const topplingDominoes = this.sceneGraph.children.filter(node => 
                node instanceof DynamicNode && 
                node.mesh.userData['domino'] && 
                node.mesh.userData['domino'].toppling && 
                !node.mesh.userData['domino'].fallen
            );
            
            if (topplingDominoes.length > 0) {
                // Prioritize dominoes that have just started falling
                // In the domino effect, this would typically be the last one in the chain
                this.lightingManager.setTrackingObject((topplingDominoes[topplingDominoes.length - 1] as DynamicNode).mesh);
            } else {
                this.lightingManager.setTrackingObject(null);
            }
        }
        
        // Update the tracking spotlight to point at the active object
        this.lightingManager.updateTrackingSpotlight();
    }

    setupKeyBindings() {
        $(document).on('keydown', (e) => {
            if (e.key === 'p') {
                this.lightingManager.togglePointLight();
            }
            if (e.key === 's') {
                this.lightingManager.toggleSpotLight();
            }
            if (e.key === 't') {
                this.lightingManager.toggleTrackingSpotlight();
            }
        });
    }

    populateScene() {
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(50, 50),
            new THREE.MeshStandardMaterial({ color: new THREE.Color(0xafafaf) })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1;
        floor.receiveShadow = true;
        this.scene.add(floor);

        this.activeCamera.position.set(0, 5, 5);

        const initDirection = new THREE.Vector3(1, 0, 0);
        const sphere = new Sphere(
            initDirection,
            new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xff0000),
            }),
        );
        sphere.mesh.position.set(-5, 0, 0);
        this.add(sphere);
        this.sphere = sphere;
        
        // Set initial tracking object to be the sphere
        this.lightingManager.setTrackingObject(sphere.mesh);

        const chain = buildSerpentineDominoCourse(
            this.scene,
            this.sceneGraph,
            new THREE.Vector3(1, 0, 0),
            initDirection,
        );
        sphere.addCollidable(chain[0]);

        sphere.roll();
    }
}