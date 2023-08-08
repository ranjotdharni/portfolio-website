import { OrbitControls, RoundedBox, Text3D } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Clock } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ExclusiveRandom(min: number, max: number): number {
    const root = Math.random();
    const randomNumber = min + root * (max - min);
    return randomNumber;
}

function Tablet({fontColor, leftColor, rightColor, fileName, fontSize, fontX, fontY, text, logoScale} : {fontColor: string ,leftColor: string, rightColor: string, fileName: string, fontSize: number, fontX: number, fontY: number, text: string, logoScale: number}) {
    const timer = new Clock();
    timer.start();
    
    const rotOffset = ExclusiveRandom(0, Math.PI * 2);
    const rotSpeed = ExclusiveRandom(0.5, 1);
    const logo = useLoader(GLTFLoader, fileName);
    let scale = logoScale;
    const ref = useRef<any>();

    useFrame(() => {
        let tablet = ref.current;
        
        tablet.rotation.y = (Math.PI / 30) * Math.cos((timer.getElapsedTime() * rotSpeed) + rotOffset);
        tablet.rotation.x = (Math.PI / 36) * Math.cos((timer.getElapsedTime()) + rotOffset);
        tablet.position.y = 0.5 * Math.cos(timer.getElapsedTime() * 2 + rotOffset);
    });

    return (
        <>
            <group ref={ref}>
                <pointLight intensity={25} position={[1, 1, 5]} />
                <pointLight intensity={25} position={[-1, 1, -5]} />
                <pointLight intensity={30} position={[0, -0.5, 0]} />
                <pointLight intensity={30} position={[0, 0.5, 0]} />
                <RoundedBox receiveShadow args={[20, 7, 1]} radius={0.4} position={[0, 0, 0]}>
                    <meshLambertMaterial attach="material" color={leftColor} />
                    <hemisphereLight intensity={1.25} groundColor={"black"} />
                </RoundedBox>
                <RoundedBox receiveShadow args={[16.05, 7.05, 1.05]} radius={0.4} position={[4, 0, 0]}>
                    <meshLambertMaterial attach="material" color={rightColor} />
                    <hemisphereLight intensity={1.25} groundColor={"black"} />
                </RoundedBox>
                <mesh position={[-6.75, 0, 0.5]} scale={[scale, scale, scale]} rotation={[Math.PI / 2, 0, 0]}>
                    <primitive object={logo.scene}/>  
                </mesh>
                <Text3D font={'/fonts/Mplus.json'} size={fontSize} height={0.5} position={[fontX, fontY, 0.5]} >
                    <meshLambertMaterial attach="material" color={fontColor} />
                    {text}
                </Text3D>
            </group>
        </>
    );
}

function TabletCanvas({fontColor, leftColor, rightColor, fileName, fontSize, fontX, fontY, text, logoScale} : {fontColor: string, leftColor: string, rightColor: string, fileName: string, fontSize: number, fontX: number, fontY: number, text: string, logoScale: number}) {
    return (
        <div style={{width: '23%', height: '90%'}}>
            <Canvas camera={{position: [0, 0, 11.5], fov: 75}}>
                <Tablet fontColor={fontColor} text={text} logoScale={logoScale} fontSize={fontSize} fontX={fontX} fontY={fontY} leftColor={leftColor} rightColor={rightColor} fileName={fileName} />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 12 + (Math.PI / 1.75)} minPolarAngle={Math.PI / -6 + (Math.PI / 1.75)} minAzimuthAngle={Math.PI / -12} maxAzimuthAngle={Math.PI / 12} />
            </Canvas>
        </div>
    );
}

export default TabletCanvas