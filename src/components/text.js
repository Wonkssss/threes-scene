import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// Function to create 3D text
export function create3DText(scene) {
    const loader = new FontLoader();

    loader.load('src/assets/fonts/Poppins_SemiBold_Regular.json', (font) => {
        const textGeometry = new TextGeometry("WELCOME", {
            font: font,
            size: 1.33,
            depth: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });

        const textMaterial = new THREE.MeshStandardMaterial({ 
            color: 0xffffff, 
            emissive: 0xffffff,
            emissiveIntensity: 1.2,
        });

        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-4.5, 3, -0.5);

        scene.add(textMesh);

    }, undefined, (error) => {
        console.error('Error loading font:', error);
    });
}
