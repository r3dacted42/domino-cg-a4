import * as THREE from 'three';
import { FollowCamera } from './lib/cameras/followcam';
import { OrbitalCamera } from './lib/cameras/orbitalcam';
import { DynamicNode, SceneGraphNode } from './lib/physics/scenegraph';
import { Sphere } from './lib/physics/sphere';
import $ from 'jquery';
import { buildSerpentineDominoCourse } from './buildCourse';

export class App {
    canvas: HTMLCanvasElement;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;

    activeCamera: OrbitalCamera;

    topCamera: OrbitalCamera;
    followCamera: FollowCamera;

    clock: THREE.Clock;
    sceneGraph: SceneGraphNode;

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
        
        this.setupLighting();
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
        this.sceneGraph.update(this.clock.getDelta());
        requestAnimationFrame(() => this.animate());
    }

    setupLighting() {
        this.scene.add(new THREE.AmbientLight(new THREE.Color(0xffffff), 0.5));

        const dirLight = new THREE.DirectionalLight(new THREE.Color(0xfeffef), 1);
        dirLight.position.set(-15, 10, 15);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        const size = 20;
        dirLight.shadow.camera.left = -size;
        dirLight.shadow.camera.right = size;
        dirLight.shadow.camera.top = size;
        dirLight.shadow.camera.bottom = -size;
        this.scene.add(dirLight);
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