import * as THREE from 'three';

type Trigger = () => boolean;
type OnTrigger = () => void;

export class SceneGraphNode {
    children: SceneGraphNode[] = [];

    add(child: SceneGraphNode) {
        this.children.push(child);
    }

    update(dt: number) {
        for (const c of this.children) c.update(dt);
    }
}

export class DynamicNode extends SceneGraphNode {
    private triggers: [Trigger, OnTrigger][] = [];
    mesh: THREE.Mesh;

    constructor(mesh: THREE.Mesh) {
        super();
        this.mesh = mesh;
    }

    addDependency(trigger: Trigger, onTrigger: OnTrigger) {
        this.triggers.push([trigger, onTrigger]);
    }

    override update(dt: number): void {
        super.update(dt);
        for (const [t, r] of this.triggers) {
            if (t()) r();
        }
    }
}