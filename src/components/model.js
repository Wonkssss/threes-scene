import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// Function to load an FBX model
export function loadFBXModel(url, scene, scale = 0.01, position = { x: 0, y: 0, z: 0 }, mixers) {
    const fbxLoader = new FBXLoader();
    let mixer;
    let actions = [];

    fbxLoader.load(url, (object) => {
        object.scale.set(scale, scale, scale);
        object.position.set(position.x, position.y, position.z);

        // Enable shadows for all meshes in the FBX model
        object.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true; // Enable shadow casting
                child.receiveShadow = false; // Ensure it doesn't receive shadows unless required
            }
        });


        scene.add(object);

        // Play animations if they exist
        if (object.animations && object.animations.length > 0) {
            mixer = new THREE.AnimationMixer(object);
            const action = mixer.clipAction(object.animations[0]);
            action.play();
        }
        mixers.push(mixer);
    }, undefined, (error) => {
        console.error('Error loading FBX model:', error);
    });

    return mixer;
}