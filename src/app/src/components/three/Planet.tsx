import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader} from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Planet({reference}: {reference: any})
{
    const planet = useLoader(GLTFLoader , '/gltf/planet/scene.gltf');
    var scale = 3.4;

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
        <mesh onPointerEnter={Enter} onPointerDown={Down} onPointerOut={Leave} onPointerUp={Up} position={[0, 0, 0]} scale={[scale, scale, scale]}>
            <primitive object={planet.scene}/>
        </mesh>
    )
}

function PlanetCanvas()
{
    const ref = useRef<any>();
    var cScale = 2.0;
// , position: 'absolute', left: '55vw', top: '545vh'
    return (
        <div ref={ref} style={{zIndex:'2', width: (18 * cScale) + 'vw', height: (35 * cScale) + 'vh', position: 'absolute', left: '55vw', top: '100px'}}>
            <Canvas
            frameloop='demand'
                shadows
                gl={{preserveDrawingBuffer: true}}
                >
            
                <OrbitControls autoRotate autoRotateSpeed={0.75} enablePan={false} enableZoom={false} />
                <Planet reference={ref} />
            </Canvas>
        </div>
    ) 
}

export default PlanetCanvas