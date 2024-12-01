import * as THREE from 'three';

export function createLights(scene) {
    // Directional light for shadow casting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true; // Enable shadows

    // Configure shadow properties for better quality
    directionalLight.shadow.mapSize.width = 2048; // High-resolution shadow map
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;

    scene.add(directionalLight);

    // Optional: Add a helper to visualize the shadow camera (for debugging)
    // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
    // scene.add(directionalLightHelper);

    // Ambient light for overall scene illumination
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Softer ambient light
    scene.add(ambientLight);

    // Dynamic light for lightning flashes
    const flashLight = new THREE.PointLight(0xffffff, 0, 50, 2); // Initially off
    flashLight.position.set(0, 10, 0);
    scene.add(flashLight);

    // Point light for the TV screen wall (adds glow around the screen)
    const screenLight = new THREE.PointLight(0x00aaff, 2, 20, 2);
    screenLight.position.set(0, 5, -14); // Position behind the torus/screen wall
    scene.add(screenLight);

    // Helpers for debugging (can be removed in production)
    // const flashLightHelper = new THREE.PointLightHelper(flashLight, 1);
    // scene.add(flashLightHelper);

    // const screenLightHelper = new THREE.PointLightHelper(screenLight, 1);
    // scene.add(screenLightHelper);
}

// ------------------------------------------------------------------------------------------------------
// import * as THREE from 'three';

// export function createLights(scene) {
//     const light = new THREE.PointLight(0xbbaadd, 5, 0, 0.01);
//     light.position.set(1, 1, -2);
//     scene.add(light);

//     const ambientLight = new THREE.AmbientLight(0xbbaadd, 0.5);
//     ambientLight.position.set(-3, -3, -3);
//     scene.add(ambientLight);

//     const lightHelper = new THREE.PointLightHelper(light, 1);
//     scene.add(lightHelper);

//     const ambientLightHelper = new THREE.PointLightHelper(ambientLight, 2);
//     scene.add(ambientLightHelper);
// }

