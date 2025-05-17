import * as THREE from 'three';

export class LightingManager {
    scene: THREE.Scene;
    lights: THREE.Light[];
    constructor(scene: THREE.Scene) {
        this.scene = scene;

        this.lights = [];

        this.setupLighting();
    }

    setupLighting() {
        // this.scene.add(new THREE.AmbientLight(new THREE.Color(0xffffff), 0.5));

        const pointLight = new THREE.PointLight(new THREE.Color(0xffffff), 500, 50);
        pointLight.position.set(0, 25, 0);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.width = 1024;
        pointLight.shadow.mapSize.height = 1024;
        this.lights.push(pointLight);
        this.scene.add(pointLight);

        const spotLight = new THREE.SpotLight(new THREE.Color(0xffff00), 100);
        spotLight.position.set(0, 15, -10); // Fixed on one side
        spotLight.target.position.set(0, 0, 0); // Targeting the middle of the scene
        spotLight.angle = Math.PI / 8; // Narrow beam
        spotLight.penumbra = 0.2; // Soft edge
        spotLight.decay = 1.5;
        spotLight.distance = 50;
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;
        this.lights.push(spotLight);
        this.scene.add(spotLight);
        this.scene.add(spotLight.target);
    }

    togglePointLight() {
        this.lights[0].visible = !this.lights[0].visible;
    }

    toggleSpotLight() {
        this.lights[1].visible = !this.lights[1].visible;
    }
}