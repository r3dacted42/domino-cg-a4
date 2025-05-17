import * as THREE from 'three';

export class LightingManager {
    scene: THREE.Scene;
    lights: THREE.Light[];
    helpers: THREE.Object3D[];

    pointLight: THREE.PointLight = new THREE.PointLight();
    spotLight: THREE.SpotLight = new THREE.SpotLight();
    trackingSpotlight: THREE.SpotLight = new THREE.SpotLight();
    trackingSpotlightHelper: THREE.SpotLightHelper = new THREE.SpotLightHelper(this.trackingSpotlight);

    currentMovingObject: THREE.Object3D | null = null;
    
    // Smooth transition properties
    private targetPosition: THREE.Vector3 = new THREE.Vector3();
    private currentTargetPosition: THREE.Vector3 = new THREE.Vector3();
    transitionSpeed: number = 1.0; // Kept for future adjustments
    private clock: THREE.Clock;

    constructor(scene: THREE.Scene) {
        this.scene = scene;
        this.lights = [];
        this.helpers = [];
        this.clock = new THREE.Clock();
        this.setupLighting();
    }

    setupLighting() {
        // this.scene.add(new THREE.AmbientLight(new THREE.Color(0xffffff), 0.5));

        this.pointLight = new THREE.PointLight(new THREE.Color(0xffffff), 500, 50);
        this.pointLight.position.set(0, 25, 0);
        this.pointLight.castShadow = true;
        this.pointLight.shadow.mapSize.width = 1024;
        this.pointLight.shadow.mapSize.height = 1024;
        this.lights.push(this.pointLight);
        this.scene.add(this.pointLight);
        // add a helper for the point light
        const pointLightHelper = new THREE.PointLightHelper(this.pointLight, 1);
        this.scene.add(pointLightHelper);
        this.helpers.push(pointLightHelper);

        this.spotLight = new THREE.SpotLight(new THREE.Color(0xffff00), 100);
        this.spotLight.position.set(0, 15, -10); // Fixed on one side
        this.spotLight.target.position.set(0, 0, 0); // Targeting the middle of the scene
        this.spotLight.angle = Math.PI / 8; // Narrow beam
        this.spotLight.penumbra = 0.2; // Soft edge
        this.spotLight.decay = 1.5;
        this.spotLight.distance = 50;
        this.spotLight.castShadow = true;
        this.spotLight.shadow.mapSize.width = 1024;
        this.spotLight.shadow.mapSize.height = 1024;
        this.lights.push(this.spotLight);
        this.scene.add(this.spotLight);
        this.scene.add(this.spotLight.target);
        // add a helper for the spot light
        const spotLightHelper = new THREE.SpotLightHelper(this.spotLight);
        this.scene.add(spotLightHelper);
        this.helpers.push(spotLightHelper);
        

        // Add tracking spotlight that stays at a fixed position but follows the moving object
        this.trackingSpotlight = new THREE.SpotLight(new THREE.Color(0x00aaff), 50);
        this.trackingSpotlight.visible = true; // Ensure it's on by default
        this.trackingSpotlight.position.set(15, 15, 5); // Fixed position for better side angle
        this.trackingSpotlight.angle = Math.PI / 25; // Very narrow beam for dramatic effect
        this.trackingSpotlight.penumbra = 0.05; // Sharper edge for more defined spotlight
        this.trackingSpotlight.decay = 1;
        this.trackingSpotlight.distance = 40; // Increased range
        this.trackingSpotlight.castShadow = true;
        this.trackingSpotlight.shadow.mapSize.width = 1024;
        this.trackingSpotlight.shadow.mapSize.height = 1024;
        
        // Create and position target for the tracking spotlight
        this.trackingSpotlight.target.position.set(0, 0, 0);
        
        // Initialize both current and target positions to the same starting point
        this.targetPosition.copy(this.trackingSpotlight.target.position);
        this.currentTargetPosition.copy(this.trackingSpotlight.target.position);
        
        this.scene.add(this.trackingSpotlight);
        this.scene.add(this.trackingSpotlight.target);
        this.lights.push(this.trackingSpotlight);

        // add a helper for the tracking spotlight
        this.trackingSpotlightHelper = new THREE.SpotLightHelper(this.trackingSpotlight);
        this.scene.add(this.trackingSpotlightHelper);
        this.helpers.push(this.trackingSpotlightHelper);
    }

    togglePointLight() {
        this.pointLight.visible = !this.pointLight.visible;
    }

    toggleSpotLight() {
        this.spotLight.visible = !this.spotLight.visible;
    }
    
    toggleTrackingSpotlight() {
        this.trackingSpotlight.visible = !this.trackingSpotlight.visible;
    }

    toggleHelpers() {
        this.helpers.forEach(helper => {
            helper.visible = !helper.visible;
        });
    }
    
    setTrackingObject(object: THREE.Object3D | null) {
        this.currentMovingObject = object;
        if (object) {
            // Store the position we want to track
            this.targetPosition.copy(object.position);
        }
    }
    
    updateTrackingSpotlight() {
        const deltaTime = this.clock.getDelta();
        
        if (this.currentMovingObject) {
            // Update the target position to the current moving object
            this.targetPosition.copy(this.currentMovingObject.position);
        }
        
        // Smoothly transition using the transition speed variable
        const lerpFactor = Math.min(1.0, this.transitionSpeed * deltaTime);
        this.currentTargetPosition.lerp(this.targetPosition, lerpFactor);
        
        // Apply the smoothed position to the spotlight target
        this.trackingSpotlight.target.position.copy(this.currentTargetPosition);
        if (this.trackingSpotlightHelper) {
            this.trackingSpotlightHelper.update();
        }
    }
}