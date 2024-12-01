import * as THREE from 'three';

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        65, // initial setting : 75
        window.innerWidth / window.innerHeight,
        0.001,
        10000
    );
    camera.position.set(0.5, 2, 12);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    return camera;
}
