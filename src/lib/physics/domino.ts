import { BoxGeometry, Mesh, Quaternion, Raycaster, Vector3 } from "three";
import type { Material } from "three";
import { DynamicNode } from "./scenegraph";
import { UP } from "../constants";

const width = 0.8;
const height = 2;
const depth = 0.3;
const toppleOmega = 0.75; // radians/sec

const raycaster = new Raycaster();

export class Domino extends DynamicNode {
    toppling: boolean = false;
    fallen: boolean = false;
    fallenMat: Material;
    fwdAxis: Vector3;
    toppleAxis: Vector3;
    collideNodes: DynamicNode[] = [];

    constructor(fwdAxis: Vector3, standingMat: Material, fallenMat: Material) {
        const geom = new BoxGeometry(width, height, depth);
        geom.translate(0, height / 2, -depth / 2);
        super(new Mesh(geom, standingMat));
        this.mesh.userData['domino'] = this;
        this.mesh.castShadow = true;
        this.mesh.translateOnAxis(UP, -height / 2);
        this.fallenMat = fallenMat;
        this.fwdAxis = fwdAxis.clone().normalize();
        
        const defaultFwd = new Vector3(0, 0, 1);
        const quaternion = new Quaternion().setFromUnitVectors(defaultFwd, this.fwdAxis);
        this.mesh.quaternion.premultiply(quaternion);
        
        this.toppleAxis = new Vector3()
            .crossVectors(UP, this.fwdAxis)
            .normalize();
    }

    setPosition(x: number, y: number, z: number) {
        this.mesh.position.set(x, y, z);
        this.mesh.translateOnAxis(UP, -height / 2);
    }

    updateAxes(fwdAxis: Vector3) {
        this.fwdAxis = fwdAxis.clone().normalize();
        this.mesh.rotateY(new Vector3(0, 0, 1).angleTo(fwdAxis));
        this.toppleAxis = new Vector3()
            .crossVectors(UP, this.fwdAxis)
            .normalize();
    }

    addCollidable(dn: DynamicNode) {
        this.collideNodes.push(dn);
    }

    rayOrigin(idx: number) {
        const basePos = this.mesh.position.clone();
        const delta = this.toppleAxis.clone().normalize().multiplyScalar(width / 2);
        if (idx === 0) return basePos.add(delta);
        return basePos.sub(delta);
    }

    get rayDirection() {
        return new Vector3(0, height, 0).applyQuaternion(this.mesh.quaternion).normalize();
    }

    topple() {
        this.toppling = true;
        let theta = 0;
        const toppleAxis = new Vector3()
            .crossVectors(UP, this.fwdAxis)
            .normalize();
        const thresh = 50;
        let current = 0;

        this.addDependency(
            () => !this.fallen,
            () => {
                this.update = (dt: number) => {
                    if (this.fallen) return;
                    const deltaTheta = toppleOmega * dt;
                    raycaster.set(this.rayOrigin(0), this.rayDirection);
                    const hits0 = raycaster.intersectObjects(
                        this.collideNodes.map(n => n.mesh),
                        false // don't recursively check children
                    );
                    raycaster.set(this.rayOrigin(1), this.rayDirection);
                    const hits1 = raycaster.intersectObjects(
                        this.collideNodes.map(n => n.mesh),
                        false // don't recursively check children
                    );

                    if (theta >= Math.PI / 2 || current >= thresh) {
                        this.fallen = true;
                        this.mesh.material = this.fallenMat;
                        return;
                    }

                    const obstacleHit0 = hits0.find(h => h.distance <= height + 0.01);
                    const obstacleHit1 = hits1.find(h => h.distance <= height + 0.01);
                    if (obstacleHit0 || obstacleHit1) {
                        if (obstacleHit0) {
                            if (obstacleHit0.object instanceof Mesh
                                && obstacleHit0.object.userData.domino
                                && !obstacleHit0.object.userData.domino.toppling) {
                                obstacleHit0.object.userData.domino.topple();
                            }
                        }
                        if (obstacleHit1) {
                            if (obstacleHit1.object instanceof Mesh
                                && obstacleHit1.object.userData.domino
                                && !obstacleHit1.object.userData.domino.toppling) {
                                obstacleHit1.object.userData.domino.topple();
                            }
                        }
                        current++;
                        return;
                    }
                    current = 0;
                    theta += deltaTheta;
                    this.mesh.rotateOnWorldAxis(toppleAxis, deltaTheta);
                }
            }
        )
    }
}