import { useProgress, Html } from "@react-three/drei";
import '../../css/loader.css'

export default function Loader({ subject } : { subject: string }) {
    const { progress } = useProgress()
    return <Html>
            <div id="loader">{Math.floor(progress)} % <br></br> Loading {subject}</div>
        </Html>
}

// style={{color: 'white', backgroundColor: '#0f080f', position: 'fixed', zIndex: 10, width: '10000px', height: '10000px', top: 0, left: 0, textAlign: 'center'}}