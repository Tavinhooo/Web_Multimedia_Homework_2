import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three/examples/jsm/loaders/RGBELoader.js';

const canvas = document.getElementById('hdrCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(300, 200);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);
camera.position.z = 2;

// Correct the path to the HDR file
new RGBELoader().load('818-hdri-skies-com.hdr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
});