//Tracking image

const THREE = window.MINDAR.IMAGE.THREE;
//import {loadGLTF} from "../../libs/loader.js";

document.addEventListener('DOMContentLoaded', () => {
    const start = async () => {
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: '../../assets/targets/Business_Card.mind'
        });

        const { renderer, scene, camera } = mindarThree;

        // Use THREE.PlaneGeometry instead of THREE.PlanGeometry
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: true, opacity: 0.5 });
        const plane = new THREE.Mesh(geometry, material);

        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane); // THREE.group

        await mindarThree.start();

        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    };

    start();
});
