import * as THREE from 'three';
import { FollowCamera } from './lib/cameras/followcam';
import { OrbitalCamera } from './lib/cameras/orbitalcam';
import { DynamicNode, SceneGraphNode } from './lib/physics/scenegraph';
import { Sphere } from './lib/physics/sphere';
import $ from 'jquery';
import { Domino } from './lib/physics/domino';

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

    populateScene() {
        this.scene.add(new THREE.AmbientLight(new THREE.Color(0xffffff), 0.5));

        const dirLight = new THREE.DirectionalLight(new THREE.Color(0xfeffef), 1);
        dirLight.position.set(-15, 10, 15);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        this.scene.add(dirLight);

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(50, 50),
            new THREE.MeshStandardMaterial({ color: new THREE.Color(0xafafaf) })
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.y = -1;
        floor.receiveShadow = true;
        this.scene.add(floor);

        this.activeCamera.position.set(0, 5, 5);

        const sphere = new Sphere(
            new THREE.Vector3(1, 0, 0),
            new THREE.MeshStandardMaterial({
                color: new THREE.Color(0xff0000),
            }),
        );
        this.add(sphere);

        const dominoStandingMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0x00ff00),
        });
        const dominoFallenMat = new THREE.MeshStandardMaterial({
            color: new THREE.Color(0x00aa00),
        });

        const domino1 = new Domino(
            new THREE.Vector3(1, 0, 0), dominoStandingMat, dominoFallenMat,
        );
        domino1.setPosition(3, 0, 0);
        this.add(domino1);
        sphere.addCollidable(domino1);

        const domino2 = new Domino(
            new THREE.Vector3(1, 0, 0), dominoStandingMat, dominoFallenMat,
        );
        domino2.setPosition(4, 0, 0);
        this.add(domino2);
        domino1.addCollidable(domino2);

        sphere.roll();

        this.activeCamera.lookAt(domino1.mesh.position);
    }
}