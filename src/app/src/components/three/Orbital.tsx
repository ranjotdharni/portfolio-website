import { Ring } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function orbitalsAligned(obj: any): boolean
{
    if (obj.rotation.y != Math.PI * 1.25)
    {
        return false;
    }

    return true;
}

function Orbital({fileName, radius, isOrbiting, orbitSpeed, spinSpeed} : {fileName: string, radius: number, isOrbiting: boolean, orbitSpeed: number, spinSpeed: number}) {
    const model = useLoader(GLTFLoader , fileName);
    const ref = useRef<any>();
    const meshRef = useRef<any>();
    var scale = 0.003;

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
            orb.rotation.y = (orb.rotation.y - (Math.PI * 1.25) > 0 ? Math.max(orb.rotation.y - ((Math.PI / 72) + (Math.abs(orb.rotation.y - (Math.PI * 1.25)) * (Math.PI / 24) * 0.25)), Math.PI * 1.25) : Math.min(orb.rotation.y + ((Math.PI / 72) + (Math.abs(orb.rotation.y - (Math.PI * 1.25)) * (Math.PI / 24) * 0.25)), Math.PI * 1.25));
        }

        if (orb.rotation.y >= (4 * Math.PI))
        {
            orb.rotation.y = 0;
        }

        meshRef.current.rotation.z += spinSpeed;
    })

    return (
        <>
            <pointLight ref={ref} intensity={0} position={[0, 0, 0]}>
                <mesh ref={meshRef} position={[radius + 2, 0, 0]} scale={[scale, scale, scale]} rotation={[Math.PI / 2, 0, 0]}>
                    <ambientLight intensity={2} color={0xfdd835}>
                    <primitive object={model.scene}/>
                    </ambientLight>
                </mesh>
            </pointLight>
            <mesh
            position={[0, 0, 0]} rotation={[Math.PI / -2, 0, 0]}>
                <Ring args={[radius - 0.01 + 2, radius + 2, 30]} />
                <meshStandardMaterial color="0xffffff" side={DoubleSide} />
            <ambientLight intensity={2} color={0xfdd835} />
            </mesh>
        </>
    );
}

export default Orbital