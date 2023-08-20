import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Project from './page/Project.js';
import '../css/Timeline.css'

const primitives = [
    {
        base: '#d0fce1',
        color: '#2faf74',
        link: 'https://chemistreams.onrender.com/',
        date: 'Node.js',
        icon: '/png/nodejs.png',
        icon_bg: '#303030',
        project_name: 'ChemiStreams',
        desc: 'Full-stack Messenger App',
        points: [
            'Employed Node.js to design and implement RESTful APIs, enabling seamless communication between the front-end and the server.',
            "Organized and implemented database schema using a relational database management system (MySQL) to store and manage the web app's data.",
            'Developed and deployed front-end templates for landing page, login page, and dashboard to cloud platform (Render) for public access.',
            'Integrated third-party services using Spotify Web API to enhance user functionality after reading through corresponding technical documentation.'
        ]
    },
    {
        base: '#FFDFBE',
        color: '#FF3403',
        link: 'https://meteorize.netlify.app/',
        date: 'Next.js',
        icon: '/png/nextjs.png',
        icon_bg: '#fff',
        project_name: 'Meteorize',
        desc: 'Static Weather SPA',
        points: [
            'Utilized Next.js framework to bootstrap web app allowing for server-side rendering, faster page loads, improved SEO, and simplified routing.',
            'Parsed and transformed API responses using React component-based architecture promoting reusability and maintainability of a dynamic frontend.',
            'Integrated Open-Meteo weather API to fetch and format real-time weather data creating a seamless user experience.',
            'Effectuated documentation-driven development by translating API specifications into working code, ensuring robust functionality between API and app capabilities.'
        ]
    },
    {
        base: '#c9c5db',
        color: '#3412e0',
        link: '',
        date: 'Django',
        icon: '/png/progress.png',
        icon_bg: '#1B0E1E',
        project_name: 'Coming Soon...',
        desc: 'Python React App',
        points: [
        ]
    }
]

function ProjectTimeline()
{
    return (
        <div id='timeline'>
            <p id='timelineTitle'>Projects</p>
            <VerticalTimeline>
                {primitives.map((proj, index) => {
                    return <Project key={index} props={proj}></Project>
                })}
            </VerticalTimeline>
        </div>
    );
}

export default ProjectTimeline