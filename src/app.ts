import * as THREE from 'three';
import { FollowCamera } from './lib/cameras/followcam';
import { OrbitalCamera } from './lib/cameras/orbitalcam';
import { DynamicNode, SceneGraphNode } from './lib/physics/scenegraph';
import { Sphere } from './lib/physics/sphere';
import $ from 'jquery';
import { buildCourse } from './buildCourse';
import { LightingManager } from './lib/lighting';
import { setupControls } from './lib/controls';

export class App {
    canvas: HTMLCanvasElement;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;

    activeCamera: OrbitalCamera | FollowCamera;

    topCamera: OrbitalCamera;
    followCamera: FollowCamera;

    clock: THREE.Clock;
    sceneGraph: SceneGraphNode;

    lightingManager: LightingManager;
    activeDomino: DynamicNode | null = null;
    sphere: Sphere | null = null;
    
    // Track if follow camera is active
    isFollowCameraActive: boolean = false;
    
    // Materials for Gouraud (Lambert) and Phong shading
    gouraudMaterial: THREE.MeshLambertMaterial;
    phongMaterial: THREE.MeshPhongMaterial;
    currentShadingModel: string = 'phong';
    
    // Texture flag for dominos
    useTexture: boolean = false;
    woodTexture: THREE.Texture;
    
    // Track all objects that need materials updated
    materialObjects: THREE.Mesh[] = [];

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
        
        // Load wood texture
        const textureLoader = new THREE.TextureLoader();
        this.woodTexture = textureLoader.load('src/assets/textures/wood.jpg');
        this.woodTexture.wrapS = THREE.RepeatWrapping;
        this.woodTexture.wrapT = THREE.RepeatWrapping;
        
        // Initialize materials for both shading models with the same properties
        const redColor = new THREE.Color(0xff0000);
        this.gouraudMaterial = new THREE.MeshLambertMaterial({
            color: redColor,
        });
        this.phongMaterial = new THREE.MeshPhongMaterial({
            color: redColor,
            shininess: 100
        });

        this.setupKeyBindings();
        setupControls(this);

        this.populateScene();

        this.animate();
    }

    get aspect() {
        return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    add(obj: DynamicNode) {
        this.scene.add(obj.mesh);
        this.sceneGraph.add(obj);
        if (obj.mesh instanceof THREE.Mesh) {
            this.materialObjects.push(obj.mesh);
        }
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
            
            // Update follow camera target if in follow mode
            if (this.isFollowCameraActive) {
                this.followCamera.setTarget(this.sphere.mesh);
            }
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
                const activeDomino = topplingDominoes[topplingDominoes.length - 1] as DynamicNode;
                this.lightingManager.setTrackingObject(activeDomino.mesh);
                
                // Update follow camera target if in follow mode
                if (this.isFollowCameraActive) {
                    this.followCamera.setTarget(activeDomino.mesh);
                }
            } else {
                this.lightingManager.setTrackingObject(null);
            }
        }
        
        // Update the tracking spotlight to point at the active object
        this.lightingManager.updateTrackingSpotlight();
    }

    setupKeyBindings() {
        $(document).on('keydown', (e) => {            
            // Camera switching
            if (e.key === 'c') {
                this.toggleCamera();
            }
            
            // Texture toggle
            if (e.key === 't') {
                this.toggleTexture();
            }
            
            // Follow camera controls
            if (this.isFollowCameraActive) {
                const rotationSpeed = 0.1; // Radians
                if (e.key === 'a' || e.key === 'ArrowLeft') {
                    this.followCamera.rotateHorizontal(rotationSpeed);
                }
                if (e.key === 'd' || e.key === 'ArrowRight') {
                    this.followCamera.rotateHorizontal(-rotationSpeed);
                }
            }
        });
    }
    
    toggleCamera() {
        this.isFollowCameraActive = !this.isFollowCameraActive;
        
        if (this.isFollowCameraActive) {
            // Switch to follow camera
            this.activeCamera = this.followCamera;
            
            // Set target based on current active object
            if (this.sphere && !this.sphere.collided) {
                this.followCamera.setTarget(this.sphere.mesh);
            } else {
                const topplingDominoes = this.sceneGraph.children.filter(node => 
                    node instanceof DynamicNode && 
                    node.mesh.userData['domino'] && 
                    node.mesh.userData['domino'].toppling && 
                    !node.mesh.userData['domino'].fallen
                );
                
                if (topplingDominoes.length > 0) {
                    const activeDomino = topplingDominoes[topplingDominoes.length - 1] as DynamicNode;
                    this.followCamera.setTarget(activeDomino.mesh);
                } else if (this.sphere) {
                    // If no toppling dominoes, fallback to the sphere even if it has collided
                    this.followCamera.setTarget(this.sphere.mesh);
                }
            }
        } else {
            // Switch to top view camera
            this.activeCamera = this.topCamera;
        }
    }
    
    toggleTexture() {
        this.useTexture = !this.useTexture;
        
        // Update material for all domino objects
        for (const obj of this.materialObjects) {
            if (obj.userData['domino']) {
                const domino = obj.userData['domino'];
                this.updateDominoMaterial(domino);
            }
        }
    }
    
    updateDominoMaterial(domino: any) {
        const color = new THREE.Color(0x156289);
        const darkColor = new THREE.Color(color).multiplyScalar(0.6);
        
        // Create materials based on current shading model and texture setting
        if (this.useTexture) {
            if (this.currentShadingModel === 'gouraud') {
                domino.standingMat = new THREE.MeshLambertMaterial({
                    map: this.woodTexture,
                    side: THREE.DoubleSide,
                });
                domino.fallenMat = new THREE.MeshLambertMaterial({
                    map: this.woodTexture,
                    side: THREE.DoubleSide,
                    color: darkColor,
                });
            } else {
                domino.standingMat = new THREE.MeshPhongMaterial({
                    map: this.woodTexture,
                    side: THREE.DoubleSide,
                    shininess: 30
                });
                domino.fallenMat = new THREE.MeshPhongMaterial({
                    map: this.woodTexture,
                    side: THREE.DoubleSide,
                    color: darkColor,
                    shininess: 30
                });
            }
        } else {
            if (this.currentShadingModel === 'gouraud') {
                domino.standingMat = new THREE.MeshLambertMaterial({
                    color: color,
                    side: THREE.DoubleSide,
                });
                domino.fallenMat = new THREE.MeshLambertMaterial({
                    color: darkColor,
                    side: THREE.DoubleSide,
                });
            } else {
                domino.standingMat = new THREE.MeshPhongMaterial({
                    color: color,
                    side: THREE.DoubleSide,
                    shininess: 30
                });
                domino.fallenMat = new THREE.MeshPhongMaterial({
                    color: darkColor,
                    side: THREE.DoubleSide,
                    shininess: 30
                });
            }
        }
        
        // Update the mesh material based on domino state
        if (domino.fallen) {
            domino.mesh.material = domino.fallenMat;
        } else {
            domino.mesh.material = domino.standingMat;
        }
    }
    
    toggleShadingModel(model: string) {
        this.currentShadingModel = model;
        
        // Update material for all objects based on the selected shading model
        for (const obj of this.materialObjects) {
            if (obj.material instanceof THREE.Material) {
                const material = obj.material as THREE.Material;
                const color = material.hasOwnProperty('color') 
                    ? (material as any).color 
                    : new THREE.Color(0xffffff);
                
                let newMaterial: THREE.Material;
                
                if (obj.userData['domino']) {
                    // Handle domino objects with special update method
                    const domino = obj.userData['domino'];
                    this.updateDominoMaterial(domino);
                    continue;
                }
                
                // Handle non-domino objects
                if (model === 'gouraud') {
                    // Gouraud shading with MeshLambertMaterial
                    newMaterial = new THREE.MeshLambertMaterial({
                        color: color,
                        side: material.side,
                    });
                } else {
                    // Phong shading with MeshPhongMaterial
                    newMaterial = new THREE.MeshPhongMaterial({
                        color: color,
                        shininess: 100,
                        side: material.side,
                    });
                }
                
                // Keep metadata and properties from original material
                for (const key in material.userData) {
                    newMaterial.userData[key] = material.userData[key];
                }
                
                // Apply the new material
                obj.material = newMaterial;
            }
        }
        
        // Update the sphere's material specifically
        if (this.sphere) {
            const sphereMaterial = this.currentShadingModel === 'phong' 
                ? this.phongMaterial 
                : this.gouraudMaterial;
            this.sphere.mesh.material = sphereMaterial;
        }
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
        this.materialObjects.push(floor);

        this.activeCamera.position.set(0, 5, 5);

        const initDirection = new THREE.Vector3(1, 0, 0);
        const sphereMaterial = this.currentShadingModel === 'phong' 
            ? this.phongMaterial 
            : this.gouraudMaterial;
            
        const sphere = new Sphere(
            initDirection,
            sphereMaterial,
        );
        sphere.mesh.position.set(-5, 0, 0);
        this.add(sphere);
        this.sphere = sphere;
        
        // Set initial tracking object to be the sphere
        this.lightingManager.setTrackingObject(sphere.mesh);
        
        // Initialize the follow camera with the sphere as the target
        this.followCamera.setTarget(sphere.mesh);

        const chain = buildCourse(
            this.scene,
            this.sceneGraph,
            new THREE.Vector3(1, 0, 0),
            initDirection,
            this.materialObjects,
            this.currentShadingModel,
            this.useTexture,  // Pass texture flag
            this.woodTexture  // Pass wood texture
        );
        sphere.addCollidable(chain[0]);
    }
}