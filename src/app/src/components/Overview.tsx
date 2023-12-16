import { useEffect } from 'react';
import '../css/Overview.css'

function RoleDiv({x, y, src, desc, color, borderColor, animation} : {x: number, y: number, src: string, desc: string, color: string, borderColor: string, animation: string}) {
    return (
        <div className={'roleDiv' + (animation !== '' ? ` ${animation}` : animation)} style={{top: y + '%', left: x + '%', border: `solid 1px ${borderColor}`, backgroundColor: color}}>
            <img src={src} />
            <div className='descContainer'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

function InfoDiv({title, desc, x, y, margin, splitMargin, short} : {title: string, desc: string, x: number, y: number, margin: number, splitMargin: number, short: string}) {
    return (
        <span className='infoMain' style={{top: y + '%', left: x + '%'}}>
            <p className='infoTitle'>{title}</p>
            <p className='infoSplit' style={{left: splitMargin + '%'}}>:</p>
            <div className='infoDescWrapper'>
                <p className={(desc == short ? 'infoDesc' : 'infoDesc needsAfter')} style={{marginLeft: margin + '%'}}>{(window.innerWidth > 768 ? desc : short)}</p>
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
        }, {threshold: (window.innerWidth > 768 ? 0.75 : 0.2)});
        const fp = document.getElementById('overviewPrimary')!;
        observer.observe(fp);
    }, []);

    return (
        <div id="overviewPrimary" style={{width: '80vw', height: '60vh', position: 'absolute', top: '95vh', left: '10vw'}}>
            <p id="overviewTitle">Overview</p>

            <RoleDiv x={(window.innerWidth > 768 ? 24 : 2)} animation='spin' color='#1c2c4c' borderColor='white' y={5} src='/svg/react.svg' desc='React' />
            <RoleDiv x={(window.innerWidth > 768 ? 42 : 35)} animation='bounce' color='#3178C6' borderColor='white' y={5} src='/svg/typescript.svg' desc='TypeScript' />
            <RoleDiv x={(window.innerWidth > 768 ? 60 : 68)} animation='shake' color='#2496ED' borderColor='white' y={5} src='/svg/docker.svg' desc='Docker' />

            <p id='descTitle'>About Me</p>

            <p id='overviewDesc'>
                I'm a skilled developer and a team player that strives to be a leader. As a dedicated programmer, I have
                experience in web development and deployment tools like TypeScript or Docker, and frameworks like React and Node.
                Whether you require focus on specific development needs or want your own dynamic web app, with me on your team, you'll
                have another valuable asset ensuring the success of your business.  
            </p>

            <div id='pfpWrapper'><img src='/png/pfp.png' /></div>
            <p id='pfpTitle'>Ranjot Dharni</p>

            <InfoDiv splitMargin={15.5} margin={24} title='GPA' desc='3.79 (cumulative)' short='3.79' x={65} y={58}></InfoDiv>
            <InfoDiv splitMargin={6.25} margin={11} title='Location' desc='Sacramento, CA' short='Sacramento, CA' x={65} y={69}></InfoDiv>
            <InfoDiv splitMargin={3.7} margin={8} title='Education' desc='B.S. Computer Science - May 2024' short='B.S. Computer Science' x={65} y={80}></InfoDiv>

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