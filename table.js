import * as THREE from '../../libs/three.js-r132/build/three.module.js';
document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MashBasicMaterial({color: "#0000FF"});
    const cube = new THREE.Mesh(grometry, material);

    scene.add(cube);
    cube.position.set(0, 0, -2);
    cube.rotation.set(0, Math.pi/4, 0);
    
});