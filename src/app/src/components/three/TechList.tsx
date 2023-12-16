import Character from '../spline/Character';
import '../../css/TechList.css';
import { useEffect, useRef } from 'react';

interface TechDataItem {
    name: string,
    textColor: string,
    backgroundColor: string,
    url: string,
    external: string
}

function TechList() {
    const ref = useRef<any>();

    function makeRedirectFunction(externalUrl: string) {
        return () => {
            window.open(externalUrl, '_blank')
        }
    }

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
                Below are some of the technologies that I've used in the various projects listed
                on my resume and mentioned here. I regularly apply these modern tools to develop 
                robust and efficient web applications. Currently, I am working with City of Sacramento to help migrate their
                311 Customer Service mobile application to a cross-platform framework. 
            </p>

            <div id='tabletContainer' ref={ref} style={{width: '53%', height: '50%', position: 'absolute', top: '37%', left: '3%', zIndex: '1'}}>
                {
                    techData.map((item) => {
                        return (
                            <div onClick={makeRedirectFunction(item.external)} style={{backgroundColor: item.backgroundColor, border: `solid 2px ${item.textColor}`}}><img src={item.url} /><div><p style={{color: item.textColor}}>{item.name}</p></div></div>
                        )
                    })
                }
            </div>

            <Character />
        </div>
    )
}

export default TechList

const techData: Array<TechDataItem> = [
    {
        name: 'React',
        textColor: '#61DAFB',
        backgroundColor: '#1c2c4c',
        url: '/svg/react.svg',
        external: 'https://react.dev/',
    },
    {
        name: 'TypeScript',
        textColor: '#ffffff',
        backgroundColor: '#3178C6',
        url: '/svg/typescript.svg',
        external: 'https://www.typescriptlang.org/',
    },
    {
        name: 'Node',
        textColor: '#339933',
        backgroundColor: '#1d331d',
        url: '/svg/node.svg',
        external: 'https://nodejs.org/en',
    },
    {
        name: 'MySQL',
        textColor: '#00758f',
        backgroundColor: '#f29111',
        url: '/svg/mysql.svg',
        external: 'https://www.mysql.com/',
    },
    {
        name: 'Next',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        url: '/svg/next.svg',
        external: 'https://nextjs.org/',
    },
    {
        name: 'Java',
        textColor: '#437291',
        backgroundColor: '#f29111',
        url: '/svg/java.svg',
        external: 'https://www.java.com/en/',
    },
    {
        name: 'Git',
        textColor: '#F05032',
        backgroundColor: '#572117',
        url: '/svg/git.svg',
        external: 'https://git-scm.com/',
    },
    {
        name: 'EC2',
        textColor: '#FF9900',
        backgroundColor: '#232F3E',
        url: '/svg/aws.svg',
        external: 'https://aws.amazon.com/pm/ec2/?gclid=Cj0KCQiAj_CrBhD-ARIsAIiMxT-McDNYfY9NFw1r0Ypxn6utE-21sqR2kSc-HlwsAYic72dIAhXJKEQaAkPmEALw_wcB&trk=9cd376cd-1c18-46f2-9f75-0e1cdbca94c5&sc_channel=ps&ef_id=Cj0KCQiAj_CrBhD-ARIsAIiMxT-McDNYfY9NFw1r0Ypxn6utE-21sqR2kSc-HlwsAYic72dIAhXJKEQaAkPmEALw_wcB:G:s&s_kwcid=AL!4422!3!651751059309!e!!g!!ec2!19852662176!145019189697',
    },
    {
        name: 'Docker',
        textColor: 'white',
        backgroundColor: '#2496ED',
        url: '/svg/docker.svg',
        external: 'https://www.docker.com/',
    },
    {
        name: 'Expo',
        textColor: '#000020',
        backgroundColor: '#ffffff',
        url: '/svg/expo.svg',
        external: 'https://expo.dev/',
    },
    {
        name: 'Express',
        textColor: '#3C873A',
        backgroundColor: '#303030',
        url: '/svg/express.svg',
        external: 'https://expressjs.com/',
    },
    {
        name: 'SocketIO',
        textColor: '#010101',
        backgroundColor: '#ffffff',
        url: '/svg/socket.svg',
        external: 'https://socket.io/',
    },
]

/*
<Canvas
            shadows
            camera={{position: [0, 0, 35], fov: 45}}
            gl={{preserveDrawingBuffer: true}}
            >
                <Tablet reference={ref} scale={0.5} />
                <OrbitControls enablePan={false} enableZoom={false} target={[0, 0, -35]} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
            </Canvas>
*/