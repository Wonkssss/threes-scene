import * as THREE from 'three';
import { createCamera } from './components/camera.js';
import { createRenderer } from './components/renderer.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createControls } from './components/controls.js';
// import { createGUI } from './components/gui.js';
import { createAnimation } from './components/animation.js';
import { loadFBXModel } from './components/model.js';  
import { create3DText } from './components/text.js'; 
import { createTorusKnot } from './components/torusknot.js';


const canvas = document.getElementById('myCanvas');
const camera = createCamera();
const renderer = createRenderer(canvas);
const scene = createScene();
createLights(scene);
const controls = createControls(camera, renderer);


// Create 3D objects 
const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
const sphereMat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);

const squareGeo = new THREE.BoxGeometry(1, 1, 1);
const squareMat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const squareMesh = new THREE.Mesh(squareGeo, squareMat);

const triangleGeo = new THREE.ConeGeometry(1, 2, 3);
const triangleMat = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const triangleMesh = new THREE.Mesh(triangleGeo, triangleMat);

const floorGeo = new THREE.PlaneGeometry(100, 100);
const floorMat = new THREE.ShadowMaterial({ opacity: 1 });
const floorMesh = new THREE.Mesh(floorGeo, floorMat);
floorMesh.rotation.x = -Math.PI / 2;
floorMesh.position.y = -10;
floorMesh.receiveShadow = true; 
scene.add(floorMesh);


// createGUI(scene, sphereMesh, squareMesh, triangleMesh);

create3DText(scene);

const mixers = [];
loadFBXModel('src/assets/models/Kick.fbx', scene, 0.035, { x: 0.5, y: -1, z: 0 }, mixers);

createTorusKnot(scene);


createAnimation(scene, camera, renderer, mixers, controls);  

document.body.appendChild(renderer.domElement);
