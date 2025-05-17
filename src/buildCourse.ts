import * as THREE from "three";
import { Domino } from "./lib/physics/domino";
import type { SceneGraphNode } from "./lib/physics/scenegraph";
import { UP } from "./lib/constants";

export function buildCourse(
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

    function curve(
        startPos: THREE.Vector3,
        direction: THREE.Vector3,
        radius: number = 3,
        count: number = 6,
        clockwise: boolean = true,
    ): Domino[] {
        const dominos: Domino[] = [];
        const normDir = direction.clone().normalize();
        const sign = clockwise ? -1 : 1;
        const perp = new THREE.Vector3().crossVectors(UP, normDir).normalize().multiplyScalar(sign);
        const center = startPos.clone().add(perp.clone().multiplyScalar(radius));

        const angleStep = (Math.PI / 2) / (count - 1);
        for (let i = 0; i < count; ++i) {
            const theta = i * angleStep;
            const pos = center.clone()
                .add(perp.clone().multiplyScalar(-1 * radius * Math.cos(theta)))
                .add(direction.clone().multiplyScalar(radius * Math.sin(theta)));
            const tangent = perp.clone().multiplyScalar(Math.sin(theta))
                .add(normDir.clone().multiplyScalar(Math.cos(theta))).normalize();
            const domino = new Domino(tangent, standingMat, fallenMat);
            domino.setPosition(pos.x, 0, pos.z);
            dominos.push(domino);
            if (i > 0) dominos[i - 1].addCollidable(dominos[i]);
            // display arrow helper
            // scene.add(new THREE.ArrowHelper(tangent, pos, 0.5, 0xff0000));
        }

        return dominos;
    }

    const line1 = line(
        startPos, initDirection, 10,
    );
    line1.map((d) => add(d));

    const curve1 = curve(
        line1[line1.length - 1].mesh.position.clone()
            .add(initDirection.clone().normalize().multiplyScalar(spacing)).add(new THREE.Vector3(0, 0, 0.5)),
        initDirection,
    );
    line1[line1.length - 1].addCollidable(curve1[0]);
    curve1.map((d) => add(d));

    const curve2 = curve(
        line1[line1.length - 1].mesh.position.clone()
            .add(initDirection.clone().normalize().multiplyScalar(spacing)).add(new THREE.Vector3(0, 0, -0.5)),
        initDirection, 3, 6, false,
    );
    line1[line1.length - 1].addCollidable(curve2[0]);
    curve2.map((d) => add(d));

    const line2 = line(
        curve1[curve1.length - 1].mesh.position.clone()
            .add(curve1[curve1.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve1[curve1.length - 1].fwdAxis, 10,
    );
    curve1[curve1.length - 1].addCollidable(line2[0]);
    line2.map((d) => add(d));

    const line3 = line(
        curve2[curve2.length - 1].mesh.position.clone()
            .add(curve2[curve2.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve2[curve2.length - 1].fwdAxis, 10,
    );
    curve2[curve2.length - 1].addCollidable(line3[0]);
    line3.map((d) => add(d));

    const curve3 = curve(
        line2[line2.length - 1].mesh.position.clone()
            .add(line2[line2.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line2[line2.length - 1].fwdAxis,
    );
    line2[line2.length - 1].addCollidable(curve3[0]);
    curve3.map((d) => add(d));

    const curve4 = curve(
        line3[line3.length - 1].mesh.position.clone()
            .add(line3[line3.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line3[line3.length - 1].fwdAxis, 3, 6, false,
    );
    line3[line3.length - 1].addCollidable(curve4[0]);
    curve4.map((d) => add(d));

    const line4 = line(
        curve3[curve3.length - 1].mesh.position.clone()
            .add(curve3[curve3.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve3[curve3.length - 1].fwdAxis, 20,
    );
    curve3[curve3.length - 1].addCollidable(line4[0]);
    line4.map((d) => add(d));

    const line5 = line(
        curve4[curve4.length - 1].mesh.position.clone()
            .add(curve4[curve4.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve4[curve4.length - 1].fwdAxis, 20,
    );
    curve4[curve4.length - 1].addCollidable(line5[0]);
    line5.map((d) => add(d));

    const curve5 = curve(
        line4[line4.length - 1].mesh.position.clone()
            .add(line4[line4.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line4[line4.length - 1].fwdAxis,
    );
    line4[line4.length - 1].addCollidable(curve5[0]);
    curve5.map((d) => add(d));

    const curve6 = curve(
        line5[line5.length - 1].mesh.position.clone()
            .add(line5[line5.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line5[line5.length - 1].fwdAxis, 3, 6, false,
    );
    line5[line5.length - 1].addCollidable(curve6[0]);
    curve6.map((d) => add(d));

    const line6 = line(
        curve5[curve5.length - 1].mesh.position.clone()
            .add(curve5[curve5.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve5[curve5.length - 1].fwdAxis, 3,
    );
    curve5[curve5.length - 1].addCollidable(line6[0]);
    line6.map((d) => add(d));

    const line7 = line(
        curve6[curve6.length - 1].mesh.position.clone()
            .add(curve6[curve6.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve6[curve6.length - 1].fwdAxis, 3,
    );
    curve6[curve6.length - 1].addCollidable(line7[0]);
    line7.map((d) => add(d));

    const curve7 = curve(
        line6[line6.length - 1].mesh.position.clone()
            .add(line6[line6.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line6[line6.length - 1].fwdAxis,
    );
    line6[line6.length - 1].addCollidable(curve7[0]);
    curve7.map((d) => add(d));

    const curve8 = curve(
        line7[line7.length - 1].mesh.position.clone()
            .add(line7[line7.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line7[line7.length - 1].fwdAxis, 3, 6, false,
    );
    line7[line7.length - 1].addCollidable(curve8[0]);
    curve8.map((d) => add(d));

    const line8 = line(
        curve7[curve7.length - 1].mesh.position.clone()
            .add(curve7[curve7.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve7[curve7.length - 1].fwdAxis, 5,
    );
    curve7[curve7.length - 1].addCollidable(line8[0]);
    line8.map((d) => add(d));

    const line9 = line(
        curve8[curve8.length - 1].mesh.position.clone()
            .add(curve8[curve8.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve8[curve8.length - 1].fwdAxis, 5,
    );
    curve8[curve8.length - 1].addCollidable(line9[0]);
    line9.map((d) => add(d));

    const curve9 = curve(
        line8[line8.length - 1].mesh.position.clone()
            .add(line8[line8.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(0, 0, 0.5)),
        line8[line8.length - 1].fwdAxis, 2, 4,
    );
    line8[line8.length - 1].addCollidable(curve9[0]);
    curve9.map((d) => add(d));

    const curve10 = curve(
        line8[line8.length - 1].mesh.position.clone()
            .add(line8[line8.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(0, 0, -0.5)),
        line8[line8.length - 1].fwdAxis, 1, 3, false,
    );
    line8[line8.length - 1].addCollidable(curve10[0]);
    curve10.map((d) => add(d));

    const curve11 = curve(
        line9[line9.length - 1].mesh.position.clone()
            .add(line9[line9.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(0, 0, 0.5)),
        line9[line9.length - 1].fwdAxis, 1, 3,
    );
    line9[line9.length - 1].addCollidable(curve11[0]);
    curve11.map((d) => add(d));

    const curve12 = curve(
        line9[line9.length - 1].mesh.position.clone()
            .add(line9[line9.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(0, 0, -0.5)),
        line9[line9.length - 1].fwdAxis, 2, 4, false,
    );
    line9[line9.length - 1].addCollidable(curve12[0]);
    curve12.map((d) => add(d));

    const curve13 = curve(
        curve11[curve11.length - 1].mesh.position.clone()
            .add(curve11[curve11.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve11[curve11.length - 1].fwdAxis, 1, 3,
    );
    curve11[curve11.length - 1].addCollidable(curve13[0]);
    curve13.map((d) => add(d));

    const curve14 = curve(
        curve10[curve10.length - 1].mesh.position.clone()
            .add(curve10[curve10.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve10[curve10.length - 1].fwdAxis, 1, 3, false,
    );
    curve10[curve10.length - 1].addCollidable(curve14[0]);
    curve14.map((d) => add(d));

    const line10 = line(
        curve13[curve13.length - 1].mesh.position.clone()
            .add(curve13[curve13.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve13[curve13.length - 1].fwdAxis, 10,
    );
    curve13[curve13.length - 1].addCollidable(line10[0]);
    line10.map((d) => add(d));

    const line11 = line(
        curve14[curve14.length - 1].mesh.position.clone()
            .add(curve14[curve14.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve14[curve14.length - 1].fwdAxis, 10,
    );
    curve14[curve14.length - 1].addCollidable(line11[0]);
    line11.map((d) => add(d));

    const curve15 = curve(
        curve12[curve12.length - 1].mesh.position.clone()
            .add(curve12[curve12.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(0.5, 0, 0)),
        curve12[curve12.length - 1].fwdAxis, 2, 4,
    );
    curve12[curve12.length - 1].addCollidable(curve15[0]);
    curve15.map((d) => add(d));

    const curve16 = curve(
        curve12[curve12.length - 1].mesh.position.clone()
            .add(curve12[curve12.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(-0.5, 0, 0)),
        curve12[curve12.length - 1].fwdAxis, 2, 4, false,
    );
    curve12[curve12.length - 1].addCollidable(curve16[0]);
    curve16.map((d) => add(d));

    const curve17 = curve(
        curve9[curve9.length - 1].mesh.position.clone()
            .add(curve9[curve9.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(-0.5, 0, 0)),
        curve9[curve9.length - 1].fwdAxis, 2, 4,
    );
    curve9[curve9.length - 1].addCollidable(curve17[0]);
    curve17.map((d) => add(d));

    const curve18 = curve(
        curve9[curve9.length - 1].mesh.position.clone()
            .add(curve9[curve9.length - 1].fwdAxis.clone().multiplyScalar(spacing)).add(new THREE.Vector3(0.5, 0, 0)),
        curve9[curve9.length - 1].fwdAxis, 2, 4, false,
    );
    curve9[curve9.length - 1].addCollidable(curve18[0]);
    curve18.map((d) => add(d));

    const line12 = line(
        curve16[curve16.length - 1].mesh.position.clone()
            .add(curve16[curve16.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve16[curve16.length - 1].fwdAxis, 5,
    );
    curve16[curve16.length - 1].addCollidable(line12[0]);
    line12.map((d) => add(d));

    const line13 = line(
        curve17[curve17.length - 1].mesh.position.clone()
            .add(curve17[curve17.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve17[curve17.length - 1].fwdAxis, 5,
    );
    curve17[curve17.length - 1].addCollidable(line13[0]);
    line13.map((d) => add(d));

    const line14 = line(
        curve15[curve15.length - 1].mesh.position.clone()
            .add(curve15[curve15.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve15[curve15.length - 1].fwdAxis, 5,
    );
    curve15[curve15.length - 1].addCollidable(line14[0]);
    line14.map((d) => add(d));

    const line15 = line(
        curve18[curve18.length - 1].mesh.position.clone()
            .add(curve18[curve18.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        curve18[curve18.length - 1].fwdAxis, 5,
    );
    curve18[curve18.length - 1].addCollidable(line15[0]);
    line15.map((d) => add(d));

    const curve19 = curve(
        line14[line14.length - 1].mesh.position.clone()
            .add(line14[line14.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line14[line14.length - 1].fwdAxis, 5, 8,
    );
    line14[line14.length - 1].addCollidable(curve19[0]);
    curve19.map((d) => add(d));

    const curve20 = curve(
        line15[line15.length - 1].mesh.position.clone()
            .add(line15[line15.length - 1].fwdAxis.clone().multiplyScalar(spacing)),
        line15[line15.length - 1].fwdAxis, 5, 8, false,
    );
    line15[line15.length - 1].addCollidable(curve20[0]);
    curve20.map((d) => add(d));

    return dominos;
}
