import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";

export class Timer {
    constructor() {
        this.start = new Date();
    }

    getElapsedTime() {
        return ((new Date()) - this.start) / 1000;
    }
}

export function toObjString(str)
{
    return `/gltf/${str}/scene.gltf`;
}