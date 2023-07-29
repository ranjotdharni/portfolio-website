import * as Functions from "./functions.js";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const timer = new Functions.Timer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
const loader = new GLTFLoader();
const oldMouse = new THREE.Vector2();
const mouse = new THREE.Vector2();
const rayCaster = new THREE.Raycaster();
const clicked = new Map([
    ["pc", false]
]);
const director = new Functions.Director(camera);
let controls;

//camera.position.set(0, 0, 5);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.getElementById("action").appendChild(renderer.domElement);

let waves;
let pc;
let keyboard;

    /*Custom Geometry/Shaders*/

const wavesUniforms = {
    time: {
        type: 'f',
        value: timer.getElapsedTime()
    }
}
const wavesGeometry = new THREE.PlaneGeometry(4, 4, 128, 128);
const wavesMaterial = new THREE.ShaderMaterial({
  uniforms: wavesUniforms,
  vertexShader: Functions.getWavesVertexShader(),
  fragmentShader: Functions.getWavesFragmentShader()
});
waves = new THREE.Points(wavesGeometry, wavesMaterial);
waves.rotation.y = Math.PI / 12;
waves.rotation.x = Math.PI / 2;
waves.rotation.z = Math.PI / 2.5;
scene.add(waves);
waves.position.set(1, 0, 5);

    /*Loaded Object Functions*/

const f_pc = (gltf) =>
{
    pc = gltf.scene;
    let scale = 0.05;

    pc.scale.set(scale * pc.scale.x, scale * pc.scale.y, scale * pc.scale.z);

    pc.rotation.y = 3.14 / -4;
    pc.rotation.x = Math.PI / 24;
    pc.position.set(-0.25, -0.18, 4.25);
    
    pc.traverse((node) => {
        if (node.isMesh)
        {
            node.castShadow = true;
        }
    });

    scene.add(pc);
}

const f_keyboard = (gltf) =>
{
    keyboard = gltf.scene;
    let scale = 0.1;

    keyboard.scale.set(scale * keyboard.scale.x, scale * keyboard.scale.y, scale * keyboard.scale.z);
    keyboard.rotation.z = Math.PI / 2;
    
    keyboard.traverse((node) => {
        if (node.isMesh)
        {
            node.castShadow = true;
        }
    });

    keyboard.position.set(0.5, -0.01, 4.5);

    scene.add(keyboard);
}

const objectLoaders = [
    {"file": "pc", "function": f_pc},
    //{"file": "keyboard", "function": f_keyboard}
];

for (var i = 0; i < objectLoaders.length; i++)
{
    loader.load(
        Functions.toObjString(objectLoaders[i].file),
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

//controls = new OrbitControls(camera, renderer.domElement);

/*const pointLight = new THREE.PointLight(0xffffff, 30);
pointLight.position.set(0, 5, 3);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);*/

const pcLight = new THREE.DirectionalLight(0xd384e0, 2.5);
//pcLight.target = new THREE.Object3D(-3, -0.5, 2);
pcLight.position.set(-3, 3, 2);
scene.add(pcLight);

function animateWaves()
{
    wavesUniforms.time.value = timer.getElapsedTime();
}

function animatePC()
{
    //pc.rotation.y = timer.getElapsedTime() / 3;
    pc.position.y = 0.01 * Math.sin(timer.getElapsedTime()) - 0.18;

    if (clicked.get("pc"))
    {
        pc.rotation.y += (mouse.x - oldMouse.x) * 4;
    }
    else if (pc.rotation.y > 3.14 / -4)
    {
        pc.rotation.y = Math.max(3.14 / -4, pc.rotation.y - 0.01);
    }
    else if (pc.rotation.y < 3.14 / -4)
    {
        pc.rotation.y = Math.min(3.14 / -4, pc.rotation.y + 0.01);
    }
}

function animations()
{
    animateWaves();
    animatePC();
    //keyboard.rotation.y = timer.getElapsedTime() / 3;
    //keyboard.position.y = 0.02 * Math.sin(timer.getElapsedTime()) - 0.01;
}

function animate() 
{
    requestAnimationFrame(animate);
    animations();
    
    if (director.scrollReady())
    {
        director.handleScroll();
    }

    renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("mousemove", (evt) => {
    oldMouse.x = mouse.x;
    oldMouse.y = mouse.y;

    mouse.x = (evt.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("pointerdown", (evt) => {
    rayCaster.setFromCamera(mouse, camera);
    const intersects = rayCaster.intersectObject(pc, true);

    if (intersects.length != 0)
    {
        clicked.set("pc", true);
    }
});

window.addEventListener("pointerup", (evt) => {
    clicked.forEach((v, k) => {
        if (clicked.get(k))
        {
            clicked.set(k, false);
        }
    });
});

animate();