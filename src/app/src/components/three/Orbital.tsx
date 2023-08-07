import { Ring, Decal, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { DoubleSide, Clock } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const orbitStop = Math.PI * 1.35;

function orbitalsAligned(obj: any): boolean
{
    if (obj.rotation.y != orbitStop)
    {
        return false;
    }

    return true;
}

/*function isOrbiting(): boolean 
{
    let windowTopStop = 9.6;

    if ((window.scrollY / 100) > windowTopStop)
    {
        return false;
    }

    return true;
}*/

function RadianRandom(min: number, max: number): number {
    const root = Math.random();
    const randomNumber = min + root * (max - min);
    return randomNumber;
}

function Orbital(this: any, {fileName, radius, orbitSpeed, spinSpeed, isOrbiting} : {fileName: string, radius: number, orbitSpeed: number, spinSpeed: number, isOrbiting: boolean}) {
    const timer = new Clock();
    timer.start();
    const [decal] = useTexture(['/png/js.png']);
    const ref = useRef<any>();
    const meshRef = useRef<any>();
    const maxOrbits = 2;
    var scale = 1;//0.003;
    var wasStopped = false;

    useEffect(() => {
        ref.current.rotation.y = RadianRandom(0, ((2 * Math.PI) * maxOrbits));
    }, []);

    useFrame(() => {
        let orb = ref.current;
        /*if ((orb.position.x != 0) || (orb.position.y != 0) || (orb.position.z != 0))
        {
            orb.position.x = Math.min(orb.position.x + 0.15, 0);
            orb.position.y = Math.max(orb.position.y - 0.15, 0);
            orb.position.z = Math.max(orb.position.z - 0.15, 0);

            //orb.ring.position.x = Math.min(orb.ring.position.x + 0.15, orbitCenter.x);
            //orb.ring.position.y = Math.max(orb.ring.position.y - 0.15, orbitCenter.y);
            //orb.ring.position.z = Math.max(orb.ring.position.z - 0.15, orbitCenter.z);
        }
        else
        {
            orb.rotation.y += orbitSpeed;
        }*/

        if (isOrbiting)
        {
            orb.rotation.y += orbitSpeed;
        }
        else if (!orbitalsAligned(orb))
        {
            orb.rotation.y = (orb.rotation.y - orbitStop > 0 ? Math.max(orb.rotation.y - ((Math.PI / 72) + (Math.abs(orb.rotation.y - orbitStop) * (Math.PI / 24) * 0.25)), orbitStop) : Math.min(orb.rotation.y + ((Math.PI / 72) + (Math.abs(orb.rotation.y - orbitStop) * (Math.PI / 24) * 0.25)), orbitStop));
        }

        if (orb.rotation.y >= ((2 * Math.PI) * maxOrbits))
        {
            orb.rotation.y = 0;
        }

        if (isOrbiting)
        {
            meshRef.current.rotation.y += spinSpeed;

            if (meshRef.current.position.y != 0)
            {
                meshRef.current.position.y = 0;
            }
        }
        else
        {
            meshRef.current.rotation.y = Math.PI / 3.5;
            meshRef.current.rotation.y += (Math.PI / 12) * Math.cos(timer.getElapsedTime() / 2);
            meshRef.current.position.y += 0.001 * Math.cos(timer.getElapsedTime() * 2);
        }

        if (!wasStopped && !isOrbiting)
        {
            wasStopped = true;
        }

        if (wasStopped && isOrbiting)
        {
            wasStopped = false;
        }
    })

    return (
        <>
            <pointLight ref={ref} intensity={0} position={[0, 0, 0]}>
                <mesh ref={meshRef} position={[radius + 2, 0, 0]} scale={[scale, scale, scale]} rotation={[0, 0, 0]}>
                    <icosahedronGeometry args={[0.25, 1]} />
                    <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
                    <Decal position={[0.25, 0, 0]} scale={[0.25, 0.25, 0.25]} map={decal} />
                </mesh>
            </pointLight>
            <mesh
            position={[0, 0, 0]} rotation={[Math.PI / -2, 0, 0]}>
                <Ring args={[radius + 1.99, radius + 2, 30]} />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>
        </>
    );
}

export default Orbital

/*<mesh ref={meshRef} position={[radius + 2, 0, 0]} scale={[scale, scale, scale]} rotation={[Math.PI / 2, 0, 0]}>
                    <hemisphereLight intensity={0.00001} groundColor={"black"}>
                        <primitive object={model.scene}/>
                    </hemisphereLight>
                </mesh>*/