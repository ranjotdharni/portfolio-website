import * as Functions from "./functions.js";

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
//import { RenderPass } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/postprocessing/RenderPass";
//import { EffectComposer } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/postprocessing/EffectComposer";
//import { UnrealBloomPass } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/postprocessing/UnrealBloomPass";

let controls;
const loader = new GLTFLoader();
let pc_model;

    /*Loaded Object Functions*/

const pc = (gltf) =>
{
    pc_model = gltf.scene;
    
    pc_model.traverse((node) => {
        if (node.isMesh)
        {
            node.castShadow = true;
        }
    });

    pc_model.position.set(-0.75, -0.5, 3.5);

    scene.add(pc_model);
}

const objectLoaders = [
    {"id": "pc", "function": pc},
];

const timer = new Functions.Timer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

camera.position.set(0, 0, 5);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

for (var i = 0; i < objectLoaders.length; i++)
{
    loader.load(
        Functions.toObjString(objectLoaders[i].id),
        objectLoaders[i].function,
        function (xhr)
        {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error)
        {
            console.error(error);
        }
    );
}

controls = new OrbitControls(camera, renderer.domElement);
document.getElementById("action").appendChild(renderer.domElement);

const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.set(0, 5, 3);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

function animate() 
{
    requestAnimationFrame(animate);

    pc_model.rotation.y = timer.getElapsedTime();

    renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


animate();