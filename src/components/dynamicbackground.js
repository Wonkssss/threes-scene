import * as THREE from 'three';

// Function to create a dynamic background with a gradient or particles
export function createDynamicBackground(scene) {
    // Create a plane to act as the background
    const geometry = new THREE.PlaneGeometry(500, 500);
    const material = new THREE.MeshBasicMaterial({
        color: 0x000000,
        side: THREE.BackSide
    });
    const backgroundPlane = new THREE.Mesh(geometry, material);
    scene.add(backgroundPlane);

    // Optional: Add particle effects to the background (we will animate particles here)
    animateBackground(backgroundPlane);
}

// Function to animate the background (e.g., color changes or particle movement)
function animateBackground(backgroundPlane) {
    let clock = new THREE.Clock();
    let lastTime = 0;

    function update() {
        let deltaTime = clock.getDelta();
        let time = clock.getElapsedTime();

        // Animate background color
        backgroundPlane.material.color.setHSL((Math.sin(time * 0.1) + 1) / 2, 0.7, 0.4);

        requestAnimationFrame(update);
    }

    update();
}

