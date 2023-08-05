import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Orbital from "./Orbital";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function zoomAt(zoom: {x: number, y: number, z: number}, point: {x: number, y: number, z: number}): boolean {
    if ((zoom.x != point.x) || (zoom.y != point.y) || (zoom.z != point.z))
    {
        return false;
    }

    return true;
}


function Orbit({o_center, zoomPos, isOrbiting} : {o_center: {x: number, y: number, z: number}, zoomPos: {x: number, y: number, z: number}, isOrbiting: boolean}) {
    const center = useLoader(GLTFLoader ,'/gltf/o_center/scene.glb');
    var centerScale = 0.0015;
    var zoomSpeed = 0.1;
    const ref = useRef<any>();
    const sunRef = useRef<any>();
    const sysRot = {x: Math.PI / 5, y: Math.PI / 12, z: Math.PI / -8}
    //const sysRot = {x: Math.PI / 5, y: Math.PI / -24, z: Math.PI / 12}

    useFrame(() => {
        sunRef.current.rotation.y += (isOrbiting ? Math.PI / 480  : 0.001);//Math.PI / 480;

        let orbit = ref.current;

        if (!zoomAt(zoomPos, orbit.position))
        {
            orbit.position.x = (zoomPos.x - orbit.position.x > 0 ? Math.min(zoomPos.x, orbit.position.x + (Math.abs(zoomPos.x - orbit.position.x) * zoomSpeed + 0.001)) : 
                                Math.max(zoomPos.x, orbit.position.x - (Math.abs(zoomPos.x - orbit.position.x) * zoomSpeed + 0.001))); 
            orbit.position.y = (zoomPos.y - orbit.position.y > 0 ? Math.min(zoomPos.y, orbit.position.y + (Math.abs(zoomPos.y - orbit.position.y) * zoomSpeed + 0.001)) : 
                                Math.max(zoomPos.y, orbit.position.y - (Math.abs(zoomPos.y - orbit.position.y) * zoomSpeed + 0.001)));
            orbit.position.z = (zoomPos.z - orbit.position.z > 0 ? Math.min(zoomPos.z, orbit.position.z + (Math.abs(zoomPos.z - orbit.position.z) * zoomSpeed + 0.001)) : 
                                Math.max(zoomPos.z, orbit.position.z - (Math.abs(zoomPos.z - orbit.position.z) * zoomSpeed + 0.001)));
        }

        if (!zoomAt(zoomPos, o_center))
        {
            orbit.rotation.x = Math.max(orbit.rotation.x - (Math.PI / 48), 0);
            orbit.rotation.y = Math.min(orbit.rotation.y + (Math.PI / 48), 0);
            orbit.rotation.z = Math.max(orbit.rotation.z - (Math.PI / 48), 0);
        }
        else
        {
            orbit.rotation.x = Math.min(orbit.rotation.x + (Math.PI / 48), sysRot.x);
            orbit.rotation.y = Math.max(orbit.rotation.y - (Math.PI / 48), sysRot.y);
            orbit.rotation.z = Math.min(orbit.rotation.z + (Math.PI / 48), sysRot.z);
        }

        /*if (window.scrollY / 100 > 15)
        {
            ref.current.position.y = 0;
        }*/
    });

    return (
        <group ref={ref} position={[o_center.x, o_center.y, o_center.z]} rotation={[sysRot.x, sysRot.y, sysRot.z]}>
        <mesh ref={sunRef} scale={[centerScale, centerScale, centerScale]} rotation={[0, 0, 0]}>
            <pointLight intensity={1} color={'white'}>
                <primitive object={center.scene}/>
            </pointLight>
        </mesh>
        <Orbital isOrbiting={isOrbiting} fileName="/gltf/o_js/scene.glb" radius={1} orbitSpeed={0.01} spinSpeed={-0.015}></Orbital>
        <Orbital isOrbiting={isOrbiting} fileName="/gltf/o_node/scene.glb" radius={2} orbitSpeed={0.015} spinSpeed={-0.02}></Orbital>
        <Orbital isOrbiting={isOrbiting} fileName="/gltf/o_react/scene.glb" radius={3} orbitSpeed={0.013} spinSpeed={-0.0175}></Orbital>
        <Orbital isOrbiting={isOrbiting} fileName="/gltf/o_three/scene.glb" radius={4} orbitSpeed={0.012} spinSpeed={-0.014}></Orbital>
        <Orbital isOrbiting={isOrbiting} fileName="/gltf/o_ts/scene.glb" radius={5} orbitSpeed={0.008} spinSpeed={-0.015}></Orbital>
        </group>
    );
}

function StarField() {
    const starRef = useRef<any>();

    useFrame(() => {
        starRef.current.rotation.y += 0.0002;//Math.PI / 480;
    });

    return (
        <Stars ref={starRef} />
    )
}

function OrbitCanvas({ o_center, zoomPos, isOrbiting } : { o_center: {x: number, y: number, z: number}, zoomPos: {x: number, y: number, z: number}, isOrbiting: boolean }) {

    return (
        <div style={{zIndex:'1', width: '100vw', height: '100vh', position: 'absolute', top:'120vh'}}>
            <Canvas
                frameloop='demand'
                shadows
                camera={{position: [0, 0, 5], fov: 75}}
                gl={{preserveDrawingBuffer: true}}>

                <Suspense>
                    <StarField />
                    <Orbit o_center={o_center} zoomPos={zoomPos} isOrbiting={isOrbiting} />
                    <ambientLight />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default OrbitCanvas