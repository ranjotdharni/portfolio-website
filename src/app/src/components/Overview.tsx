import { useEffect } from 'react';
import '../css/Overview.css'

function RoleDiv({src, desc, color, borderColor, animation} : {src: string, desc: string, color: string, borderColor: string, animation: string}) {
    return (
        <div className={'roleDiv' + (animation !== '' ? ` ${animation}` : animation)} style={{border: `solid 1px ${borderColor}`, backgroundColor: color}}>
            <img src={src} />
            <div className='descContainer'>
                <p>{desc}</p>
            </div>
        </div>
    )
}

function InfoDiv({title, desc, margin, splitMargin, short} : {title: string, desc: string, margin: number, splitMargin: number, short: string}) {
    return (
        <span className='infoMain'>
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
        <div style={{width: '100vw', height: '100vh'}}>
            <div id="overviewPrimary" style={{width: '80%', height: '60%', position: 'relative', top: '20%', left: '10%'}}>
                        <div className='overviewContentContainer'>
                            <div id='pfpWrapper'><a href='https://www.linkedin.com/in/ranjot-dharni-717580269/' target='_blank'><img src='/png/pfp.png' /></a></div>
                            <p id='pfpTitle'>Ranjot Dharni</p>

                            <RoleDiv animation='spin' color='#1c2c4c' borderColor='white' src='/svg/react.svg' desc='React' />
                            <RoleDiv animation='bounce' color='#3178C6' borderColor='white' src='/svg/typescript.svg' desc='TypeScript' />
                            <RoleDiv animation='shake' color='#1D63ED' borderColor='white' src='/svg/docker.svg' desc='Docker' />
                        
                            <p id="overviewTitle">Overview</p>
                        </div>

                        <div className='overviewContentContainer'>
                            <p id='descTitle'>About Me</p>

                            <p id='overviewDesc'>
                                I'm a skilled developer and a team player that strives to be a leader. As a dedicated programmer, I have
                                experience in web development and deployment tools like TypeScript or Docker, and frameworks like React and Node.
                                Whether you require focus on specific development needs or want your own dynamic web app, with me on your team, you'll
                                have another valuable asset ensuring the success of your business.  
                            </p>



                            <InfoDiv splitMargin={15.5} margin={24} title='GPA' desc='3.79 (cumulative)' short='3.79'></InfoDiv>
                            <InfoDiv splitMargin={6.25} margin={11} title='Location' desc='Sacramento, CA' short='Sacramento, CA'></InfoDiv>
                            <InfoDiv splitMargin={3.7} margin={8} title='Education' desc='B.S. Computer Science - May 2024' short='B.S. Computer Science'></InfoDiv>
                        </div>
            </div>
        </div>
    )
}

function Overview() {
    return (
        <Content />
    )
}

export default Overview