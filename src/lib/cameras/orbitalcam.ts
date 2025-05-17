import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export class OrbitalCamera extends PerspectiveCamera {
    private controls: OrbitControls;

    constructor(fov: number, aspect: number, near: number, far: number, canvas: HTMLCanvasElement) {
        super(fov, aspect, near, far);
        this.controls = new OrbitControls(this, canvas);
    }

    update() {
        this.controls.update();
    }
}