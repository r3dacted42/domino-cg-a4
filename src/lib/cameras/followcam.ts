import * as THREE from 'three';
import { OrbitalCamera } from './orbitalcam';

export class FollowCamera extends OrbitalCamera {
    private target: undefined | THREE.Object3D;
    private offset: THREE.Vector3 = new THREE.Vector3(0, 2, 5); // Default offset: above and behind
    private rotationAngle: number = 0; // Current rotation around vertical axis
    
    // Smooth transition properties
    private targetPosition: THREE.Vector3 = new THREE.Vector3();
    private currentTargetPosition: THREE.Vector3 = new THREE.Vector3();
    private targetOffset: THREE.Vector3 = new THREE.Vector3();
    private currentOffset: THREE.Vector3 = new THREE.Vector3(0, 2, 5);
    public transitionSpeed: number = 2.0; // Higher values = faster transitions
    private clock: THREE.Clock;
    
    constructor(fov: number, aspect: number, near: number, far: number, canvas: HTMLCanvasElement) {
        super(fov, aspect, near, far, canvas);
        this.clock = new THREE.Clock();
        this.targetPosition.copy(this.position);
        this.currentTargetPosition.copy(this.position);
    }

    setTarget(newTarget: THREE.Object3D) {
        this.target = newTarget;
        
        // Set the target position we want to move to
        if (newTarget) {
            this.targetPosition.copy(newTarget.position);
        }
        
        // Calculate the desired offset with current rotation
        this.calculateTargetOffset();
    }
    
    // Rotate the camera around the vertical axis
    rotateHorizontal(angleInRadians: number) {
        this.rotationAngle += angleInRadians;
        this.calculateTargetOffset();
    }
    
    private calculateTargetOffset() {
        // Calculate offset with current rotation
        this.targetOffset.set(
            Math.sin(this.rotationAngle) * this.offset.z,
            this.offset.y, 
            Math.cos(this.rotationAngle) * this.offset.z
        );
    }
    
    private updatePosition() {
        if (!this.target) return;
        
        const deltaTime = this.clock.getDelta();
        
        // Update target position to the current object position
        this.targetPosition.copy(this.target.position);
        
        // Smoothly transition camera position
        const lerpFactor = Math.min(1.0, this.transitionSpeed * deltaTime);
        
        // Smoothly transition the current offset
        this.currentOffset.lerp(this.targetOffset, lerpFactor);
        
        // Smoothly transition to target position
        this.currentTargetPosition.lerp(this.targetPosition, lerpFactor);
        
        // Position the camera at current target position + current offset
        this.position.copy(this.currentTargetPosition).add(this.currentOffset);
        
        // Look at the current target position
        this.lookAt(this.currentTargetPosition);
    }

    override update() {
        if (!this.target) return;
        
        this.updatePosition();
    }

    // Set the transition speed (higher = faster transitions)
    setTransitionSpeed(speed: number) {
        this.transitionSpeed = Math.max(0.1, speed); // Ensure it's not too slow
    }
}