import Tablet from './Tablet';
import '../../css/TechList.css';

function TechList() {
    return (
        <div className='main'>
            <Tablet logoScale={0.025} text='JavaScript' fontColor='#323330' fontSize={1.75} fontX={-2.75} fontY={-0.75} fileName='/gltf/o_js/scene.glb' leftColor='#323330' rightColor='#f0db4f' />
            <Tablet logoScale={0.02} text='NodeJS' fontColor='#303030' fontSize={2.5} fontX={-2.5} fontY={-1.25} fileName='/gltf/o_node/scene.glb' leftColor='#3c873a' rightColor='#68a063' />
            <Tablet logoScale={0.025} text='ReactJS' fontColor='#4c768d' fontSize={2.5} fontX={-3.25} fontY={-1.25} fileName='/gltf/o_react/scene.glb' leftColor='#4c768d' rightColor='#88dded' />
            <Tablet logoScale={0.025} text='TypeScript' fontColor='#ffffff' fontSize={1.75} fontX={-3} fontY={-1} fileName='/gltf/o_ts/scene.glb' leftColor='#ffffff' rightColor='#007acc' />
        </div>
    )
}
//this is a test

export default TechList