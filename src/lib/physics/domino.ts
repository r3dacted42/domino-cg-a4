import { BoxGeometry, Mesh, Raycaster, Vector3 } from "three";
import type { Material } from "three";
import { DynamicNode } from "./scenegraph";
import { hit } from "./collision";
import { UP } from "../constants";

const width = 0.8;
const height = 2;
const depth = 0.3;
const toppleOmega = 0.5; // radians/sec
const haltTheta = 5 * Math.PI / 12;

const raycaster = new Raycaster();

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

    get rayDirection() {
        return new Vector3(0, height, 0).applyQuaternion(this.mesh.quaternion).normalize();
    }

    topple() {
        let theta = 0;
        const toppleAxis = new Vector3()
            .crossVectors(UP, this.fwdAxis)
            .normalize();
        const rayOrigin = this.mesh.getWorldPosition(new Vector3());
        const minGap = (() => {
            let gap = Infinity;
            for (const c of this.collideNodes) {
                if (!(c instanceof Domino)) continue;
                gap = Math.min(gap, c.mesh.position.clone().sub(this.mesh.position).length());
            }
            return gap;
        })();
        const closeHitDist = Math.sqrt(minGap*minGap + depth*depth);

        this.addDependency(
            () => !this.fallen,
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
                    const deltaTheta = toppleOmega * dt;
                    raycaster.set(rayOrigin, this.rayDirection);
                    const hits = raycaster.intersectObjects(
                        this.collideNodes.map(n => n.mesh),
                        false // don't recursively check children
                    );

                    const closeHit = hits.find(h => h.distance <= closeHitDist + 0.01);
                    if (closeHit || theta >= Math.PI / 2) {
                        this.fallen = true;
                        this.mesh.material = this.fallenMat;
                        return;
                    }

                    const obstacleHit = hits.find(h => h.distance <= height);
                    if (obstacleHit) {
                        const d = new Vector3().subVectors(obstacleHit.point, rayOrigin);
                        const upDir = new Vector3(0, 1, 0).applyQuaternion(this.mesh.quaternion);
                        const dot = d.dot(upDir);
                        const len = d.length();
                        const angleToHit = Math.acos(dot / len);
                        if (theta + deltaTheta > theta + angleToHit) return; // prevent overshoot
                    }
                    theta += deltaTheta;
                    this.mesh.rotateOnWorldAxis(toppleAxis, deltaTheta);
                }
            }
        )
    }
}