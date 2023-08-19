import '../css/Overview.css'

function RoleDiv({x, y, src, desc} : {x: number, y: number, src: string, desc: string}) {
    return (
        <div className='roleDiv' style={{top: y + '%', left: x + '%'}}>
            <img src={src}></img>
            <div className='descContainer'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

function Content() {
    return (
        <div id="overviewPrimary" style={{width: '80vw', height: '60vh', position: 'absolute', top: '90vh', left: '10vw'}}>
            <p id="overviewTitle">Overview</p>

            <RoleDiv x={2} y={5} src='/png/uiIcon.png' desc='UI/UX Design' />
            <RoleDiv x={20} y={5} src='/png/frontendIcon.png' desc='Frontend Development' />
            <RoleDiv x={38} y={5} src='/png/backendIcon.png' desc='Backend Development' />

            <p id='overviewDesc'>
                I'm a skilled developer with experience primarily in Object-Oriented Languages like Java, and various
                JavaScript technologies. I am a fast learner and offer a versatile skillset including tools like TypeScript 
                and Git, as well as a number of frameworks such as React, Node.js, or Three.js. Whether you require focus
                on specific development or need your own dynamic web app, let's work together to make a product that you and
                your users will love!   
            </p>
        </div>
    )
}

function Overview() {
    return (
        <>
            <Content />
        </>
    )
}

export default Overview