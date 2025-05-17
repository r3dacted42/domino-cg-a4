import * as THREE from "three";
import { Domino } from "./lib/physics/domino";
import type { SceneGraphNode } from "./lib/physics/scenegraph";
import { UP } from "./lib/constants";

export function buildSerpentineDominoCourse(
    scene: THREE.Scene,
    sceneGraph: SceneGraphNode,
    startPos: THREE.Vector3,
    initDirection: THREE.Vector3,
): Domino[] {

    const dominos: Domino[] = [];
    const spacing = 1;

    const standingMat = new THREE.MeshStandardMaterial({ color: 0x156289 });
    const fallenMat = new THREE.MeshStandardMaterial({ color: 0x0b3142 });

    function add(d: Domino) {
        scene.add(d.mesh);
        sceneGraph.add(d);
        dominos.push(d);
    }

    function line(
        startPos: THREE.Vector3,
        direction: THREE.Vector3,
        count: number,
    ): Domino[] {
        const dominos = [];
        const normDir = direction.clone().normalize();

        for (let i = 0; i < count; i++) {
            const pos = startPos.clone().add(normDir.clone().multiplyScalar(i * spacing));
            const domino = new Domino(normDir, standingMat, fallenMat);
            domino.setPosition(pos.x, 0, pos.z);
            dominos.push(domino);
            if (i - 1 >= 0) {
                dominos[i - 1].addCollidable(domino);
            }
        }

        return dominos;
    }

    function curve90(
        startPos: THREE.Vector3,
        direction: THREE.Vector3,
        radius: number = 3,
        count: number = 6,
        clockwise: boolean = true,
    ): Domino[] {
        console.log(startPos);
        const dominos: Domino[] = [];
        const normDir = direction.clone().normalize();
        const sign = clockwise ? -1 : 1;
        const perp = new THREE.Vector3().crossVectors(UP, normDir).normalize().multiplyScalar(sign);
        const center = startPos.clone().add(perp.clone().multiplyScalar(radius));
        console.log(center);

        const angleStep = (Math.PI / 2) / (count - 1);  // cover 90° in `count` steps
        for (let i = 0; i < count; ++i) {
            const theta = sign * i * angleStep;
            // position on arc
            const x = center.x + radius * Math.cos(theta);
            const z = center.z + radius * Math.sin(theta);
            const pos = new THREE.Vector3(x, 0, z);
            // tangent to the arc at this point
            const tangent = new THREE.Vector3(Math.sin(theta), 0, -Math.cos(theta)).multiplyScalar(sign);
            const domino = new Domino(tangent, standingMat, fallenMat);
            domino.setPosition(pos.x, 0, pos.z);
            dominos.push(domino);
        }
        dominos.reverse();
        for (let i = 1; i < count; i++) dominos[i - 1].addCollidable(dominos[i]);

        return dominos;
    }

    const line1 = line(
        startPos, initDirection, 10,
    );
    line1.map((d) => add(d));

    const curve1 = curve90(
        line1[line1.length - 1].mesh.position.clone()
        .add(initDirection.clone().normalize().multiplyScalar(spacing)),
        initDirection,
    );
    line1[line1.length - 1].addCollidable(curve1[0]);
    curve1.map((d) => add(d));

    return dominos;
}
