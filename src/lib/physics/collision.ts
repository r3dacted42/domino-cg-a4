import { Box3, type Object3D } from "three";

export function hit(a: Object3D, b: Object3D) {
    a.updateWorldMatrix(true, false);
    b.updateWorldMatrix(true, false);

    const ba = new Box3().setFromObject(a);
    const bb = new Box3().setFromObject(b);

    return ba.intersectsBox(bb);
}