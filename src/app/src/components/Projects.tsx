import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Project from './page/Project.js';
import '../css/Timeline.css'

const primitives = [
    {
        base: '#d0fce1',
        color: '#2faf74',
        link: 'https://chemistreams.onrender.com/',
        date: '10-20-2001 to 11-07-2010',
        icon: '/png/js.png',
        icon_bg: '#f7df1e',
        project_name: 'ChemiStreams',
        desc: 'Full-stack Messenger App',
        points: [
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies'
        ]
    },
    {
        base: '#d0fce1',
        color: '#2faf74',
        link: 'https://chemistreams.onrender.com/',
        date: '10-20-2001 to 11-07-2010',
        icon: '/png/js.png',
        icon_bg: '#f7df1e',
        project_name: 'ChemiStreams',
        desc: 'Full-stack Messenger App',
        points: [
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies'
        ]
    },
    {
        base: '#d0fce1',
        color: '#2faf74',
        link: 'https://chemistreams.onrender.com/',
        date: '10-20-2001 to 11-07-2010',
        icon: '/png/js.png',
        icon_bg: '#f7df1e',
        project_name: 'ChemiStreams',
        desc: 'Full-stack Messenger App',
        points: [
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies',
            'Developing and maintaining web aplicatns using ReactJS and other related technologies'
        ]
    }
]

function ProjectTimeline()
{
    return (
        <div id='timeline'>
            <VerticalTimeline>
                {primitives.map((proj, index) => {
                    return <Project key={index} props={proj}></Project>
                })}
            </VerticalTimeline>
        </div>
    );
}

export default ProjectTimeline