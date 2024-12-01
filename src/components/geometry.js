import * as THREE from 'three';


export function createTaurus(){
    const taurusGeo = new THREE.TorusGeometry(10, 3, 16, 100);
    const taurusMat = new THREE.MeshStandardMaterial({ color: 0x2f4266 });
    const taurusMesh = new THREE.Mesh(taurusGeo, taurusMat);
    taurusMesh.position.set(0, -0.5, -1);

    return taurusMesh;
}

export function floor() {
    const floorGeo = new THREE.PlaneGeometry(28, 100);
    const floorMat = new THREE.MeshStandardMaterial({ 
        opacity: 1,
        metalness: 0.6,
        roughness: 0.2,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -1;
    floorMesh.receiveShadow = true; 
    floorMat.color = new THREE.Color(0x2f4266);

    return floorMesh;
}




