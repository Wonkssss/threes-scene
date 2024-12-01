import { GUI } from 'three/addons/libs/lil-gui.module.min.js';  // Import lil-gui

export function createGUI(scene, sphereMesh, squareMesh, triangleMesh) {
    // Create a GUI instance
    const gui = new GUI();

    // Create a folder for organizing the controls
    const positionFolder = gui.addFolder('Object Positions');
    

    // Return the GUI instance if you need to add more controls or interact with it later
    return gui;
}
