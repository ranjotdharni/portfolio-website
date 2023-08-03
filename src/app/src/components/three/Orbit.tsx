import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Orbital from "./Orbital";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function Orbit({isOrbiting} : {isOrbiting: boolean}) {
    const center = useLoader(GLTFLoader ,'/gltf/o_center/scene.glb');
    var centerScale = 0.0015;
    const orbitCenter = {x: 5, y: 0, z: -8};
    const ref = useRef<any>();

    useFrame(() => {
        ref.current.rotation.y += Math.PI / 480;
    });

    return (
        <group position={[orbitCenter.x, orbitCenter.y, orbitCenter.z]} rotation={[Math.PI / 5, Math.PI / -24, Math.PI / 12]}>
        <mesh ref={ref} scale={[centerScale, centerScale, centerScale]} rotation={[0, 0, 0]}>
            <pointLight intensity={5} color={0xfdd835}>
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

function OrbitCanvas() {
    const [isOrbiting, setOrbiting] = useState(true);

    return (
        <div style={{zIndex:'1', width: '100vw', height: '100vh', position: 'absolute', top:'120vh'}}>
            <Canvas
                frameloop='demand'
                shadows
                camera={{position: [0, 0, 5], fov: 75}}
                gl={{preserveDrawingBuffer: true}}>

                <Suspense>
                    <Orbit isOrbiting={isOrbiting} />
                </Suspense>
            </Canvas>
            <button onClick={() => {setOrbiting(!isOrbiting)}}></button>
        </div>
    )
}

export default OrbitCanvas