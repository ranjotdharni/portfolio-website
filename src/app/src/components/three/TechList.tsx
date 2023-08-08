import Tablet from './Tablet';
import '../../css/TechList.css';

function TechList() {
    return (
        <>
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
        </>
    )
}

export default TechList