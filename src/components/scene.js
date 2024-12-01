import * as THREE from 'three';
import { createTaurus } from './geometry.js';
import {floor} from './geometry.js';
import { Reflector } from 'three/addons/objects/Reflector.js';


export function createScene() {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x1F1F2F);
    scene.background = new THREE.Color(0x000000);

    const taurusMesh = createTaurus();
    scene.add(taurusMesh);

    const floorMesh = floor();
    scene.add(floorMesh);

    const floorReflector = new Reflector(new THREE.PlaneGeometry(100, 100), {
        color: 0x888888, // Tint for the reflection
        textureWidth: 256, // Resolution of the reflection texture
        textureHeight: 512,
        clipBias: 0.003, // Avoid z-fighting
    });
    floorReflector.rotation.x = -Math.PI / 2; // Lay flat
    floorReflector.position.y = -10;
    scene.add(floorReflector);

    return scene;
}
