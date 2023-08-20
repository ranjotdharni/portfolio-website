import { RoundedBox, Text3D } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Clock } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const back = -30;

function ExclusiveRandom(min: number, max: number): number {
    const root = Math.random();
    const randomNumber = min + root * (max - min);
    return randomNumber;
}

function Tablet({flatScale, fontColor, leftColor, rightColor, fileName, fontSize, fontX, fontY, text, logoScale, pos, row} : {fontColor: string ,leftColor: string, rightColor: string, fileName: string, fontSize: number, fontX: number, fontY: number, text: string, logoScale: number, pos: number, row: number, flatScale: number}) {
    const baseX = -40.5 * flatScale;
    const baseY = 20 * flatScale;
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
        tablet.position.y += 0.01 * Math.cos(timer.getElapsedTime() * 2 + rotOffset);//baseX + (pos * 50), baseY - (row * 50)
    });

    return (
        <>
            <group position={[baseX + (pos * 27) * flatScale, baseY - (row * 20) * flatScale, back]} scale={[flatScale, flatScale, flatScale]} ref={ref}>
                
                <RoundedBox receiveShadow args={[20, 7, 1]} radius={0.4} position={[0, 0, 0]}>
                    <meshLambertMaterial attach="material" color={leftColor} />
                </RoundedBox>
                <RoundedBox receiveShadow args={[16.05, 7.05, 1.05]} radius={0.4} position={[4, 0, 0]}>
                    <meshLambertMaterial attach="material" color={rightColor} />
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

function TabletCanvas({scale, reference} : {scale: number, reference: any}) {

    function Enter() {
        reference.current.style.cursor = 'grab';
    }

    function Down() {
        reference.current.style.cursor = 'grabbing';
    }

    function Leave() {
        reference.current.style.cursor = 'default';
    }

    function Up() {
        reference.current.style.cursor = 'grab';
    }

    return (
        <group onPointerEnter={Enter} onPointerDown={Down} onPointerOut={Leave} onPointerUp={Up}>
        <RoundedBox receiveShadow castShadow args={[125 * scale, 60 * scale, 2]} position={[0, 0, back - 2.75]} radius={1} smoothness={6} >
            <meshLambertMaterial color="#6c1e8a" />
        </RoundedBox>
        
        <pointLight position={[20, 30, 0]} color={'#ebc5f5'}  intensity={5000} />
        <pointLight position={[-20, -30, 0]} color={'#ebc5f5'}  intensity={1000} />
        <pointLight position={[0, 0, -50]} color={'#ebc5f5'}  intensity={5000} />

        <Tablet flatScale={scale} row={0} pos={0} logoScale={0.025} text='HTML5' fontColor='#ffffff' fontSize={2.75} fontX={-2.75} fontY={-1.25} fileName='/gltf/o_html/scene.glb' leftColor='#ffffff' rightColor='#e34c26' />
        <Tablet flatScale={scale} row={0} pos={1} logoScale={0.02} text='CSS3' fontColor='#ffffff' fontSize={3.5} fontX={-2.25} fontY={-1.75} fileName='/gltf/o_css/scene.glb' leftColor='#ffffff' rightColor='#264de4' />
        <Tablet flatScale={scale} row={0} pos={2} logoScale={0.025} text='ReactJS' fontColor='#4c768d' fontSize={2.5} fontX={-3.25} fontY={-1.25} fileName='/gltf/o_react/scene.glb' leftColor='#4c768d' rightColor='#88dded' />
        <Tablet flatScale={scale} row={0} pos={3} logoScale={0.025} text='ThreeJS' fontColor='#ffffff' fontSize={2.25} fontX={-2.75} fontY={-1.25} fileName='/gltf/o_r3f/scene.glb' leftColor='#ffffff' rightColor='#000000' />
    
        <Tablet flatScale={scale} row={1} pos={0} logoScale={0.025} text='JavaScript' fontColor='#323330' fontSize={1.75} fontX={-2.75} fontY={-0.75} fileName='/gltf/o_js/scene.glb' leftColor='#323330' rightColor='#f0db4f' />
        <Tablet flatScale={scale} row={1} pos={1} logoScale={0.025} text='TypeScript' fontColor='#ffffff' fontSize={1.75} fontX={-3} fontY={-1} fileName='/gltf/o_ts/scene.glb' leftColor='#ffffff' rightColor='#007acc' />
        <Tablet flatScale={scale} row={1} pos={2} logoScale={0.02} text='NodeJS' fontColor='#303030' fontSize={2.5} fontX={-2.5} fontY={-1.25} fileName='/gltf/o_node/scene.glb' leftColor='#3c873a' rightColor='#68a063' />
        <Tablet flatScale={scale} row={1} pos={3} logoScale={0.025} text='SQL' fontColor='#f29111' fontSize={4} fontX={-1.5} fontY={-2} fileName='/gltf/o_sql/scene.glb' leftColor='#f29111' rightColor='#00758f' />
   
        <Tablet flatScale={scale} row={2} pos={0} logoScale={0.025} text='Java' fontColor='#f89820' fontSize={4} fontX={-2.75} fontY={-2} fileName='/gltf/o_java/scene.glb' leftColor='#f89820' rightColor='#5382a1' />
        <Tablet flatScale={scale} row={2} pos={1} logoScale={0.025} text='NextJS' fontColor='#ffffff' fontSize={2.5} fontX={-2.25} fontY={-1.25} fileName='/gltf/o_next/scene.glb' leftColor='#ffffff' rightColor='#000000' />
        <Tablet flatScale={scale} row={2} pos={2} logoScale={0.02} text='Git' fontColor='#3e2c00' fontSize={4} fontX={-1} fontY={-2} fileName='/gltf/o_git/scene.glb' leftColor='#3e2c00' rightColor='#f1502f' />
        <Tablet flatScale={scale} row={2} pos={3} logoScale={0.025} text='SocketIO' fontColor='#ffffff' fontSize={2} fontX={-2.5} fontY={-1.25} fileName='/gltf/o_socketio/scene.glb' leftColor='#ffffff' rightColor='#000000' />
    </group>
    );
}
/*<div style={{width: '23%', height: '90%'}}>
            <Canvas camera={{position: [0, 0, 13], fov: 82}}>
                <Tablet fontColor={fontColor} text={text} logoScale={logoScale} fontSize={fontSize} fontX={fontX} fontY={fontY} leftColor={leftColor} rightColor={rightColor} fileName={fileName} />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 12 + (Math.PI / 1.75)} minPolarAngle={Math.PI / -6 + (Math.PI / 1.75)} minAzimuthAngle={Math.PI / -12} maxAzimuthAngle={Math.PI / 12} />
            </Canvas>
        </div>*/
//11.5
export default TabletCanvas