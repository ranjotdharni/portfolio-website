import { Canvas, useLoader, useFrame, invalidate } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import { Clock } from 'three';

function Desktop() {
    const timer = new Clock();
    timer.start();
    const pc = useLoader(GLTFLoader ,'/gltf/pc/scene.gltf');
    var scale = 0.15;
    var posY = -0.4;
    var stepY = 0.75;

    const ref = useRef<any>();
    
    useFrame(() => {
        ref.current.position.y += 0.001 * Math.sin(timer.getElapsedTime() * 2.25);
        ref.current.position.y = (window.scrollY / 100) * stepY + posY;
        invalidate();
    });

    return (
                <mesh ref={ref} position={[0, posY, 0]} scale={[scale, scale, scale]} rotation={[0, Math.PI / -4, Math.PI / -48]}>
                    <ambientLight intensity={2} color={0xd384e0}>
                    <primitive object={pc.scene}/>
                    </ambientLight>
                </mesh>
    )
}

function DesktopCanvas() {
    return (
        <div style={{zIndex:'1', width: '100vw', height: '100vh', position: 'relative', left: '-10vw'}}>
            <Canvas
            frameloop='demand'
                shadows
                camera={{position: [0, 0, 2], fov: 75}}
                gl={{preserveDrawingBuffer: true}}>

                <Suspense>
                    <Desktop />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    )
}

export default DesktopCanvas