import '../../css/TechList.css';

function TechList({ passUp, orbitState } : { passUp: any, orbitState: any }) {
    return (
        <div onMouseEnter={() => {orbitState(false)}} onMouseLeave={() => {orbitState(true)}} id="main_list">
            <div onMouseEnter={() => {passUp(1)}} onMouseLeave={() => {passUp(0)}} id='div1' className='list_div'><p className="list_text">JavaScript</p></div>
            <div onMouseEnter={() => {passUp(1)}} onMouseLeave={() => {passUp(0)}} id='div2' className='list_div'><p className="list_text">NodeJS</p></div>
            <div onMouseEnter={() => {passUp(1)}} onMouseLeave={() => {passUp(0)}} id='div3' className='list_div'><p className="list_text">ReactJS</p></div>
            <div onMouseEnter={() => {passUp(1)}} onMouseLeave={() => {passUp(0)}} id='div4' className='list_div'><p className="list_text">ThreeJS</p></div>
        </div>
    );
}

export default TechList