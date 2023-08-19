import Tablet from './Tablet';
import Character from '../spline/Character';
import '../../css/TechList.css';
import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
//import { useRef } from 'react';

function TechList() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting)
            {
                entry.target.classList.add('show');
            }
            else
            {
                entry.target.classList.remove('show');
            }
        });
    }, {threshold: 0.65});

    useEffect(() => {
        const fp: Element = document.getElementById('fadePrimary')!;
        observer.observe(fp);
    }, []);

    return (
        <div id='fadePrimary'>
            <p id='title'>Explore My Tech Stack</p>
            <p id='stack_text'>
                Below are the technologies that I'm familiar with. I use these on
                a regular basis to develop web apps with the most modern tools for
                efficient development. Currently, I am working on familiarizing myself with
                Python, including the Django framework for backend development. 
            </p>

            <div style={{width: '75%', height: '90%', position: 'absolute', top: '20%', left: '-6%', zIndex: '1'}}>
            <Canvas
            shadows
            camera={{position: [0, 0, 35], fov: 45}}
            gl={{preserveDrawingBuffer: true}}
            >
                <Tablet scale={0.5} />
                <OrbitControls enablePan={false} enableZoom={false} target={[0, 0, -35]} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
            </Canvas>
            </div>

            <Character />
        </div>
    )
}

export default TechList