import * as Functions from "./functions.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const timer = new Functions.Timer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
const loader = new GLTFLoader();
const t_loader = new THREE.TextureLoader();
const oldMouse = new THREE.Vector2();
const mouse = new THREE.Vector2();
const rayCaster = new THREE.Raycaster();
const clicked = new Map([
    ["pc", false]
]);
const director = new Functions.Director(camera);

//camera.position.set(0, 0, 5);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.getElementById("action").appendChild(renderer.domElement);

const orbit = new THREE.Vector3(5, -3, -5);
let orbitTiltX = Math.PI / 5;
let orbitalView = -1;
let waves;
let pc;

const jsOrbitRadius = 2;
const jsOrbitCenter = new THREE.PointLight(0xffffff, 0);
const jsOrbitRing = new THREE.Mesh(new THREE.RingGeometry(jsOrbitRadius - 0.01, jsOrbitRadius, 30), new THREE.MeshBasicMaterial({color: 0xffffff}));
jsOrbitCenter.position.set(orbit.x, orbit.y, orbit.z);
jsOrbitRing.position.set(orbit.x, orbit.y, orbit.z);
jsOrbitRing.rotation.x = Math.PI / -2 + orbitTiltX;
scene.add(jsOrbitRing);
scene.add(jsOrbitCenter);
jsOrbitCenter.rotation.x = orbitTiltX;

const nodeOrbitRadius = 3;
const nodeOrbitCenter = new THREE.PointLight(0xffffff, 0);
const nodeOrbitRing = new THREE.Mesh(new THREE.RingGeometry(nodeOrbitRadius - 0.01, nodeOrbitRadius, 30), new THREE.MeshBasicMaterial({color: 0xffffff}));
nodeOrbitCenter.position.set(orbit.x, orbit.y, orbit.z);
nodeOrbitRing.position.set(orbit.x, orbit.y, orbit.z);
nodeOrbitRing.rotation.x = Math.PI / -2 + orbitTiltX;
scene.add(nodeOrbitRing);
scene.add(nodeOrbitCenter);
nodeOrbitCenter.rotation.x = orbitTiltX;

const reactOrbitRadius = 4;
const reactOrbitCenter = new THREE.PointLight(0xffffff, 0);
const reactOrbitRing = new THREE.Mesh(new THREE.RingGeometry(reactOrbitRadius - 0.01, reactOrbitRadius, 30), new THREE.MeshBasicMaterial({color: 0xffffff}));
reactOrbitCenter.position.set(orbit.x, orbit.y, orbit.z);
reactOrbitRing.position.set(orbit.x, orbit.y, orbit.z);
reactOrbitRing.rotation.x = Math.PI / -2 + orbitTiltX;
scene.add(reactOrbitRing);
scene.add(reactOrbitCenter);
reactOrbitCenter.rotation.x = orbitTiltX;

const tsOrbitRadius = 5;
const tsOrbitCenter = new THREE.PointLight(0xffffff, 0);
const tsOrbitRing = new THREE.Mesh(new THREE.RingGeometry(tsOrbitRadius - 0.01, tsOrbitRadius, 30), new THREE.MeshBasicMaterial({color: 0xffffff}));
tsOrbitCenter.position.set(orbit.x, orbit.y, orbit.z);
tsOrbitRing.position.set(orbit.x, orbit.y, orbit.z);
tsOrbitRing.rotation.x = Math.PI / -2 + orbitTiltX;
scene.add(tsOrbitRing);
scene.add(tsOrbitCenter);
tsOrbitCenter.rotation.x = orbitTiltX;

const threeOrbitRadius = 6;
const threeOrbitCenter = new THREE.PointLight(0xffffff, 0);
const threeOrbitRing = new THREE.Mesh(new THREE.RingGeometry(threeOrbitRadius - 0.01, threeOrbitRadius, 30), new THREE.MeshBasicMaterial({color: 0xffffff}));
threeOrbitCenter.position.set(orbit.x, orbit.y, orbit.z);
threeOrbitRing.position.set(orbit.x, orbit.y, orbit.z);
threeOrbitRing.rotation.x = Math.PI / -2 + orbitTiltX;
scene.add(threeOrbitRing);
scene.add(threeOrbitCenter);
threeOrbitCenter.rotation.x = orbitTiltX;

const orbitals = [
    {orbital: null, center: jsOrbitCenter, ring: jsOrbitRing, orbitSpeed: 0.01, spinSpeed: -0.015, finals: {x: 1.9, y: -1.87, z: 3}},
    {orbital: null, center: nodeOrbitCenter, ring: nodeOrbitRing, orbitSpeed: 0.015, spinSpeed: -0.02, finals: {x: 2.5, y: -1.5, z: 2.25}},
    {orbital: null, center: reactOrbitCenter, ring: reactOrbitRing, orbitSpeed: 0.013, spinSpeed: -0.0175},
    {orbital: null, center: tsOrbitCenter, ring: tsOrbitRing, orbitSpeed: 0.012, spinSpeed: -0.014},
    {orbital: null, center: threeOrbitCenter, ring: threeOrbitRing, orbitSpeed: 0.008, spinSpeed: -0.015},
];

        /*Lights*/

const pcLight = new THREE.DirectionalLight(0xd384e0, 2.5);
//pcLight.target = new THREE.Object3D(-3, -0.5, 2);
pcLight.position.set(-3, 3, 2);
scene.add(pcLight);

const orbitLight = new THREE.PointLight(0xffffff, 3);
orbitLight.position.set(orbit.x, orbit.y, orbit.z);
scene.add(orbitLight);
const lightHelper = new THREE.PointLightHelper(orbitLight);
scene.add(lightHelper);

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

const f_o_js = (gltf) =>
{
    let index = 0;
    orbitals[index].orbital = gltf.scene;

    let scale = 0.003;
    orbitals[index].orbital.scale.set(scale * orbitals[index].orbital.scale.x, scale * orbitals[index].orbital.scale.y, scale * orbitals[index].orbital.scale.z);

    jsOrbitCenter.add(orbitals[index].orbital);
    orbitals[index].orbital.position.x = jsOrbitRadius;
    orbitals[index].orbital.rotation.x = Math.PI / 2;
}

const f_o_node = (gltf) => 
{
    let index = 1;
    orbitals[index].orbital = gltf.scene;

    let scale = 0.003;
    orbitals[index].orbital.scale.set(scale * orbitals[index].orbital.scale.x, scale * orbitals[index].orbital.scale.y, scale * orbitals[index].orbital.scale.z);

    nodeOrbitCenter.add(orbitals[index].orbital);
    orbitals[index].orbital.position.x = nodeOrbitRadius;
    orbitals[index].orbital.rotation.x = Math.PI / 2;
}

const f_o_react = (gltf) => 
{
    let index = 2;
    orbitals[index].orbital = gltf.scene;

    let scale = 0.003;
    orbitals[index].orbital.scale.set(scale * orbitals[index].orbital.scale.x, scale * orbitals[index].orbital.scale.y, scale * orbitals[index].orbital.scale.z);

    reactOrbitCenter.add(orbitals[index].orbital);
    orbitals[index].orbital.position.x = reactOrbitRadius;
    orbitals[index].orbital.rotation.x = Math.PI / 2;
}

const f_o_ts = (gltf) => 
{
    let index = 3;
    orbitals[index].orbital = gltf.scene;

    let scale = 0.003;
    orbitals[index].orbital.scale.set(scale * orbitals[index].orbital.scale.x, scale * orbitals[index].orbital.scale.y, scale * orbitals[index].orbital.scale.z);

    tsOrbitCenter.add(orbitals[index].orbital);
    orbitals[index].orbital.position.x = tsOrbitRadius;
    orbitals[index].orbital.rotation.x = Math.PI / 2;
}

const f_o_three = (gltf) => 
{
    let index = 4;
    orbitals[index].orbital = gltf.scene;

    let scale = 0.003;
    orbitals[index].orbital.scale.set(scale * orbitals[index].orbital.scale.x, scale * orbitals[index].orbital.scale.y, scale * orbitals[index].orbital.scale.z);

    threeOrbitCenter.add(orbitals[index].orbital);
    orbitals[index].orbital.position.x = threeOrbitRadius;
    //orbitals[index].orbital.rotation.x = Math.PI / 2;
}

const objectLoaders = [
    {"file": "pc", "function": f_pc},
    {"file": "o_js", "function": f_o_js},
    {"file": "o_node", "function": f_o_node},
    {"file": "o_react", "function": f_o_react},
    {"file": "o_ts", "function": f_o_ts},
    {"file": "o_three", "function": f_o_three}
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

function isOrbiting(): boolean
{
    let subject = window.scrollY / 100;

    if (!(subject > 9))
    {
        orbitalView = -1;
    }

    return (subject > 9 ? false : true); 
}

function orbitalsAligned(): boolean
{
    for (var i = 0; i < orbitals.length; i++)
    {
        if (orbitals[i].center.rotation.y != Math.PI * 1.25)
        {
            return false;
        }
    }

    return true;
}

function animateOrbitals()
{
    for (var i = 0; i < orbitals.length; i++)
    {
        let orb = orbitals[i];
        if (isOrbiting())
        {
            if ((orb.center.position.x != orbit.x) || (orb.center.position.y != orbit.y) || (orb.center.position.z != orbit.z))
            {
                orb.center.position.x = Math.min(orb.center.position.x + 0.15, orbit.x);
                orb.center.position.y = Math.max(orb.center.position.y - 0.15, orbit.y);
                orb.center.position.z = Math.max(orb.center.position.z - 0.15, orbit.z);

                orb.ring.position.x = Math.min(orb.ring.position.x + 0.15, orbit.x);
                orb.ring.position.y = Math.max(orb.ring.position.y - 0.15, orbit.y);
                orb.ring.position.z = Math.max(orb.ring.position.z - 0.15, orbit.z);
            }
            else
            {
                orb.center.rotation.y += orb.orbitSpeed;
            }

            if (orb.center.rotation.y >= (4 * Math.PI))
            {
                orb.center.rotation.y = 0;
            }
        }
        else
        {
            if (!orbitalsAligned())
            {
                orb.center.rotation.y = (orb.center.rotation.y - (Math.PI * 1.25) > 0 ? Math.max(orb.center.rotation.y - ((Math.PI / 72) + (Math.abs(orb.center.rotation.y - (Math.PI * 1.25)) * (Math.PI / 24) * 0.25)), Math.PI * 1.25) : Math.min(orb.center.rotation.y + ((Math.PI / 72) + (Math.abs(orb.center.rotation.y - (Math.PI * 1.25)) * (Math.PI / 24) * 0.25)), Math.PI * 1.25));
            }
            else if (orbitalView != -1)
            {
                orb.center.position.x = Math.max(orb.center.position.x - (Math.abs(orb.center.position.x - orbitals[orbitalView].finals.x) * 0.1 + 0.01), orbitals[orbitalView].finals.x);
                orb.center.position.y = Math.min(orb.center.position.y + (Math.abs(orb.center.position.y - orbitals[orbitalView].finals.y) * 0.1 + 0.01), orbitals[orbitalView].finals.y);
                orb.center.position.z = Math.min(orb.center.position.z + (Math.abs(orb.center.position.z - orbitals[orbitalView].finals.z) * 0.1 + 0.01), orbitals[orbitalView].finals.z);

                orb.ring.position.x = Math.max(orb.ring.position.x - (Math.abs(orb.ring.position.x - orbitals[orbitalView].finals.x) * 0.1 + 0.01), orbitals[orbitalView].finals.x);
                orb.ring.position.y = Math.min(orb.ring.position.y + (Math.abs(orb.ring.position.y - orbitals[orbitalView].finals.y) * 0.1 + 0.01), orbitals[orbitalView].finals.y);
                orb.ring.position.z = Math.min(orb.ring.position.z + (Math.abs(orb.ring.position.z - orbitals[orbitalView].finals.z) * 0.1 + 0.01), orbitals[orbitalView].finals.z);
            }
        }

        orb.orbital.rotation.z += orb.spinSpeed;
    }

    orbitals[4].orbital.rotation.y += orbitals[4].spinSpeed;
}

function animations()
{
    animateWaves();
    animatePC();
    animateOrbitals();
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

document.getElementById("btn1").addEventListener("click", () => {
    orbitalView = 0;
});
document.getElementById("btn2").addEventListener("click", () => {
    orbitalView = 1;
});

animate();