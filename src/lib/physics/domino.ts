import { BoxGeometry, Material, Mesh, Vector3 } from "three";
import { DynamicNode } from "./scenegraph";
import { hit } from "./collision";
import { UP } from "../constants";

const width = 0.8;
const height = 2;
const depth = 0.3;
const toppleOmega = 0.5; // radians/sec
const haltTheta = 5 * Math.PI / 12;

export class Domino extends DynamicNode {
    collided: boolean = false;
    fallen: boolean = false;
    fallenMat: Material;
    fwdAxis: Vector3;
    collideNodes: DynamicNode[] = [];

    constructor(fwdAxis: Vector3, standingMat: Material, fallenMat: Material) {
        const geom = new BoxGeometry(width, height, depth);
        geom.translate(0, height / 2, -depth / 2);
        super(new Mesh(geom, standingMat));
        this.mesh.castShadow = true;
        this.mesh.translateOnAxis(UP, -height / 2);
        this.fallenMat = fallenMat;
        this.fwdAxis = fwdAxis.clone().normalize();
        this.mesh.rotateY(new Vector3(0, 0, 1).angleTo(fwdAxis));
    }

    setPosition(x: number, y: number, z: number) {
        this.mesh.position.set(x, y, z);
        this.mesh.translateOnAxis(UP, -height / 2);
    }

    addCollidable(dn: DynamicNode) {
        this.collideNodes.push(dn);
    }

    topple() {
        let theta = 0;
        const toppleAxis = new Vector3()
            .crossVectors(UP, this.fwdAxis)
            .normalize();
        const _haltTheta = this.collideNodes.length > 0 ? haltTheta : Math.PI / 2;
        this.addDependency(
            () => theta < _haltTheta,
            () => {
                this.update = (dt: number) => {
                    if (this.fallen) return;
                    for (const c of this.collideNodes) {
                        if (!(c instanceof Domino)) continue;
                        if (hit(this.mesh, c.mesh)) {
                            this.collided = true;
                            c.topple();
                            console.info(`${this} collided with ${c}`);
                        }
                    }
                    if (theta >= _haltTheta) {
                        this.fallen = true;
                        this.mesh.material = this.fallenMat;
                        return;
                    }
                    const deltaTheta = toppleOmega * dt;
                    theta += deltaTheta;
                    this.mesh.rotateOnWorldAxis(toppleAxis, deltaTheta);
                }
            }
        )
    }
}