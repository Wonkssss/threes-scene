import * as THREE from 'three';
import { generateSprite, createParticleSystem } from './background.js'; // Import the particle system from background.js

export function createTorusKnot(scene) {
    const controls = new function () {
        this.radius = 10;
        this.tube = 3;
        this.radialSegments = 64;
        this.tubularSegments = 8;
        this.p = 2;
        this.q = 3;
        this.heightScale = 1;
        this.asParticles = true;
        this.rotate = true;

        this.redraw = () => {
            if (this.knot) scene.remove(this.knot);

            const geometry = new THREE.TorusKnotGeometry(
                this.radius,
                this.tube,
                Math.round(this.radialSegments),
                Math.round(this.tubularSegments),
                Math.round(this.p),
                Math.round(this.q),
                this.heightScale
            );

            if (this.asParticles) {
                this.knot = createParticleSystem(geometry);
            } else {
                this.knot = createMesh(geometry);
            }

            scene.add(this.knot);
        };
    };

    // Add GUI for TorusKnot
    // const gui = new dat.GUI();
    // gui.add(controls, 'radius', 1, 20).onChange(controls.redraw);
    // gui.add(controls, 'tube', 0.1, 10).onChange(controls.redraw);
    // gui.add(controls, 'radialSegments', 4, 128).step(1).onChange(controls.redraw);
    // gui.add(controls, 'tubularSegments', 2, 64).step(1).onChange(controls.redraw);
    // gui.add(controls, 'p', 1, 10).step(1).onChange(controls.redraw);
    // gui.add(controls, 'q', 1, 10).step(1).onChange(controls.redraw);
    // gui.add(controls, 'heightScale', 0.5, 2).onChange(controls.redraw);
    // gui.add(controls, 'asParticles').onChange(controls.redraw);
    // gui.add(controls, 'rotate');

    controls.redraw();

    // Helper functions
    function createParticleSystem(geometry) {
        const material = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.01,
            transparent: true,
            blending: THREE.AdditiveBlending,
        });
        return new THREE.Points(geometry, material);
    }

    function createMesh(geometry) {
        const material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
        return new THREE.Mesh(geometry, material);
    }



    // Animation loop for rotation
    const animate = () => {
        requestAnimationFrame(animate);

        if (controls.rotate && controls.knot) {
            controls.knot.rotation.y += 0.01;
        }
    };

    animate();
}
