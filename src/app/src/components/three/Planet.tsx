import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Planet()
{
    const planet = useLoader(GLTFLoader , '/gltf/planet/scene.gltf');
    var scale = 3.4;

    return (
        <mesh position={[0, 0, 0]} scale={[scale, scale, scale]}>
            <primitive object={planet.scene}/>
        </mesh>
    )
}

function PlanetCanvas()
{
    var cScale = 2.0;

    return (
        <div style={{zIndex:'2', width: (18 * cScale) + 'vw', height: (35 * cScale) + 'vh', position: 'absolute', left: '55vw', top: '345vh'}}>
            <Canvas
            frameloop='demand'
                shadows
                gl={{preserveDrawingBuffer: true}}
                >
            
                <OrbitControls autoRotate autoRotateSpeed={0.75} enablePan={false} enableZoom={false} />
                <Planet />
            </Canvas>
        </div>
    ) 
}

export default PlanetCanvas