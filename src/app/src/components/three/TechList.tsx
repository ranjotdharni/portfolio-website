import Tablet from './Tablet';
import '../../css/TechList.css';
import { useEffect } from 'react';
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

            <div className='main' id='main1'>
                <Tablet logoScale={0.025} text='HTML5' fontColor='#ffffff' fontSize={2.75} fontX={-2.75} fontY={-1.25} fileName='/gltf/o_html/scene.glb' leftColor='#ffffff' rightColor='#e34c26' />
                <Tablet logoScale={0.02} text='CSS3' fontColor='#ffffff' fontSize={3.5} fontX={-2.25} fontY={-1.75} fileName='/gltf/o_css/scene.glb' leftColor='#ffffff' rightColor='#264de4' />
                <Tablet logoScale={0.025} text='ReactJS' fontColor='#4c768d' fontSize={2.5} fontX={-3.25} fontY={-1.25} fileName='/gltf/o_react/scene.glb' leftColor='#4c768d' rightColor='#88dded' />
                <Tablet logoScale={0.025} text='ThreeJS' fontColor='#ffffff' fontSize={2.25} fontX={-2.75} fontY={-1.25} fileName='/gltf/o_r3f/scene.glb' leftColor='#ffffff' rightColor='#000000' />
            </div>
            <div className='main' id='main2'>
                <Tablet logoScale={0.025} text='JavaScript' fontColor='#323330' fontSize={1.75} fontX={-2.75} fontY={-0.75} fileName='/gltf/o_js/scene.glb' leftColor='#323330' rightColor='#f0db4f' />
                <Tablet logoScale={0.025} text='TypeScript' fontColor='#ffffff' fontSize={1.75} fontX={-3} fontY={-1} fileName='/gltf/o_ts/scene.glb' leftColor='#ffffff' rightColor='#007acc' />
                <Tablet logoScale={0.02} text='NodeJS' fontColor='#303030' fontSize={2.5} fontX={-2.5} fontY={-1.25} fileName='/gltf/o_node/scene.glb' leftColor='#3c873a' rightColor='#68a063' />
                <Tablet logoScale={0.025} text='SQL' fontColor='#f29111' fontSize={4} fontX={-1.5} fontY={-2} fileName='/gltf/o_sql/scene.glb' leftColor='#f29111' rightColor='#00758f' />
            </div>
            <div className='main' id='main3'>
                <Tablet logoScale={0.025} text='Java' fontColor='#f89820' fontSize={4} fontX={-2.75} fontY={-2} fileName='/gltf/o_java/scene.glb' leftColor='#f89820' rightColor='#5382a1' />
                <Tablet logoScale={0.025} text='NextJS' fontColor='#ffffff' fontSize={2.5} fontX={-2.25} fontY={-1.25} fileName='/gltf/o_next/scene.glb' leftColor='#ffffff' rightColor='#000000' />
                <Tablet logoScale={0.02} text='Git' fontColor='#3e2c00' fontSize={4} fontX={-1} fontY={-2} fileName='/gltf/o_git/scene.glb' leftColor='#3e2c00' rightColor='#f1502f' />
                <Tablet logoScale={0.025} text='SocketIO' fontColor='#ffffff' fontSize={2} fontX={-2.5} fontY={-1.25} fileName='/gltf/o_socketio/scene.glb' leftColor='#ffffff' rightColor='#000000' />
            </div>
        </div>
    )
}

export default TechList