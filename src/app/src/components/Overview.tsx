import { useEffect } from 'react';
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

function InfoDiv({title, desc, x, y, margin, splitMargin} : {title: string, desc: string, x: number, y: number, margin: number, splitMargin: number}) {
    return (
        <span className='infoMain' style={{top: y + '%', left: x + '%'}}>
            <p className='infoTitle'>{title}</p>
            <p className='infoSplit' style={{left: splitMargin + '%'}}>:</p>
            <div className='infoDescWrapper'>
                <p className='infoDesc' style={{marginLeft: margin + '%'}}>{desc}</p>
            </div>
        </span>
    )
}

function Content() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                {
                    entry.target.classList.add('Oshow');
                }
                else
                {
                    entry.target.classList.remove('Oshow');
                }
            });
        }, {threshold: 0.75});
        const fp = document.getElementById('overviewPrimary')!;
        observer.observe(fp);
    }, []);

    return (
        <div id="overviewPrimary" style={{width: '80vw', height: '60vh', position: 'absolute', top: '95vh', left: '10vw'}}>
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

            <InfoDiv splitMargin={2} margin={6} title='Experience' desc='2+ Years' x={65} y={58}></InfoDiv>
            <InfoDiv splitMargin={6} margin={11} title='Location' desc='Yuba City, CA' x={65} y={69}></InfoDiv>
            <InfoDiv splitMargin={3} margin={8} title='Education' desc='B.S. Computer Science - May 2024' x={65} y={80}></InfoDiv>

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