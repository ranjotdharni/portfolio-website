import Tablet from './Tablet';
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

            <div style={{width: '50%', height: '45%'}}>
            <Canvas camera={{position: [0, 0, 13], fov: 82}}>
                <Tablet />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 12 + (Math.PI / 1.75)} minPolarAngle={Math.PI / -6 + (Math.PI / 1.75)} minAzimuthAngle={Math.PI / -12} maxAzimuthAngle={Math.PI / 12} />
            </Canvas>
        </div>
        </div>
    )
}

export default TechList