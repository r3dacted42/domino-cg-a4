import { Material, Mesh, SphereGeometry, Vector3 } from "three";
import { DynamicNode } from "./scenegraph";
import { hit } from "./collision";
import { Domino } from "./domino";
import { UP } from "../constants";

const radius = 1;
const rollOmega = 0.5; // radians/sec

export class Sphere extends DynamicNode {
    collided: boolean = false;
    fwdAxis: Vector3;
    collideNodes: DynamicNode[] = [];

    constructor(fwdAxis: Vector3, sphereMat: Material) {
        super(new Mesh(new SphereGeometry(radius), sphereMat));
        this.mesh.castShadow = true;
        this.fwdAxis = fwdAxis.clone().normalize();
    }

    addCollidable(dn: DynamicNode) {
        this.collideNodes.push(dn);
    }

    roll() {
        let theta = 0;
        const rollAxis = new Vector3()
            .crossVectors(UP, this.fwdAxis)
            .normalize();
        this.addDependency(
            () => !this.collided,
            () => {
                this.update = (dt: number) => {
                    if (this.collided) return;
                    for (const c of this.collideNodes) {
                        if (!(c instanceof Domino)) continue;
                        if (hit(this.mesh, c.mesh)) {
                            console.info("sphere collided with domino");
                            this.collided = true;
                            c.topple();
                        }
                    }
                    const deltaTheta = rollOmega * dt;
                    theta += deltaTheta;
                    this.mesh.rotateOnAxis(rollAxis, deltaTheta);
                    const worldDeltaPos = this.fwdAxis.clone().multiplyScalar(deltaTheta * radius);
                    this.mesh.position.add(worldDeltaPos);
                }
            }
        )
    }
}