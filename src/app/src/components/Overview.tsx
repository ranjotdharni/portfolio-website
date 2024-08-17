import { useEffect } from 'react';
import '../css/Overview.css'

function RoleDiv({src, color, borderColor, animation} : {src: string, color: string, borderColor: string, animation: string}) {
    return (
        <div className={'roleDiv' + (animation !== '' ? ` ${animation}` : animation)} style={{border: `solid 1px ${borderColor}`, backgroundColor: color}}>
            <img src={src} />
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
                            <div className='rolesWrapper'>
                                <RoleDiv animation='spin' color='#1c2c4c' borderColor='white' src='/svg/react.svg' />
                                <RoleDiv animation='bounce' color='#3178C6' borderColor='white' src='/svg/typescript.svg' />
                                <RoleDiv animation='shake' color='#1D63ED' borderColor='white' src='/svg/docker.svg' />
                            </div>
                            
                            <div className='pfpContainer'>
                                <div id='pfpWrapper'><a href='https://www.linkedin.com/in/ranjot-dharni-717580269/' target='_blank'><img src='/png/pfp.png' /></a></div>
                                <p id='pfpTitle'>Ranjot Dharni</p>
                            </div>

                            <div className='titleWrapper'>
                                <p id="overviewTitle">Overview</p>
                            </div>
                        </div>

                        <div className='overviewContentContainer'>
                            <div className='overviewWrapper'>
                                <p id='descTitle'>About Me</p>

                                <p id='overviewDesc'>
                                    I'm a skilled developer and a team player that strives to be a leader. As a dedicated programmer, I have
                                    experience in various development and deployment tools like TypeScript or Docker, and frameworks like React and Django.
                                    Whether you require focus on specific development needs or want your own dynamic web app, with me on your team, you'll
                                    have another valuable asset ensuring the success of your projects.  
                                </p>
                            </div>

                            <div className='infoWrapper'>
                                <InfoDiv splitMargin={2} margin={8} title='GPA' desc='3.82 ( / 4.00)' short='3.82'></InfoDiv>
                                <InfoDiv splitMargin={2} margin={8} title='Location' desc='Sacramento, CA' short='Sacramento, CA'></InfoDiv>
                                <InfoDiv splitMargin={2} margin={8} title='Education' desc='B.S. Computer Science' short='B.S. Computer Science'></InfoDiv>
                            </div>
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