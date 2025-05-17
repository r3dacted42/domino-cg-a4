import * as THREE from 'three';
import { OrbitalCamera } from './orbitalcam';

export class FollowCamera extends OrbitalCamera {
    private target: undefined | THREE.Object3D;

    private lastTargetPos: undefined | THREE.Vector3;

    constructor(fov: number, aspect: number, near: number, far: number, canvas: HTMLCanvasElement) {
        super(fov, aspect, near, far, canvas);
    }

    setTarget(newTarget: THREE.Object3D, initialOffset: THREE.Vector3) {
        this.target = newTarget;
        this.position.copy(newTarget.position).add(initialOffset);
    }

    override update() {
        super.update();
        if (!this.target) return;
        
        if (this.lastTargetPos) {
            const currTargetPos = this.target.position;
            const deltaTarget = this.lastTargetPos.sub(currTargetPos);
            this.position.add(deltaTarget);
        }

        this.lastTargetPos = this.target.position;
    }
}