import * as THREE from 'three';

import { createParticleSystem } from './background.js';
import { createDynamicBackground } from './dynamicbackground.js';  

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export function createAnimation(scene, camera, renderer, mixers, controls) {
    const clock = new THREE.Clock();

    // Enable shadows in the renderer
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Create dynamic background
    createDynamicBackground(scene); 


    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.2, 0.35); // Adjust bloom parameters
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    const animate = () => {
        requestAnimationFrame(animate);

        // Update animation mixers for FBX models
        mixers.forEach(mixer => {
            if (mixer) {
                mixer.update(clock.getDelta());
            }
        });

        // Update controls to allow interaction (camera movement)
        controls.update(); 

        // renderer.render(scene, camera);
        composer.render(); // Use the composer instead of renderer to allow post-processing
        
    };

    animate();
    

}

