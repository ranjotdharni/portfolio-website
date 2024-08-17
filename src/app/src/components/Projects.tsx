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
        desc: 'Full-stack Chat Application',
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
        desc: 'Real-time Weather Service',
        points: [
            'Utilized Next.js framework to bootstrap web app allowing for server-side rendering, faster page loads, improved SEO, and simplified routing.',
            'Parsed and transformed API responses using React component-based architecture promoting reusability and maintainability of a dynamic frontend.',
            'Integrated Open-Meteo weather API to fetch and format real-time weather data creating a seamless user experience.',
            'Effectuated documentation-driven development by translating API specifications into working code, ensuring robust functionality between API and app capabilities.'
        ]
    },
    {
        base: '#fad7e2',
        color: '#DB7093',
        link: 'http://ec2-54-190-33-199.us-west-2.compute.amazonaws.com:443/',
        date: 'Docker',
        icon: '/png/docker.png',
        icon_bg: '#1D63ED',
        project_name: 'Tile Map Generator',
        desc: 'Multi-container Image Generator',
        points: [
            'Engineered a React-based application using Docker and Java, enabling seamless creation of 1920x1080 2D tile maps from basic images with efficient procedural generation.',
            "Developed a Java-based image generator and a user-friendly web interface, orchestrating resource initialization for smooth execution of the generation algorithm.",
            'Designed an intuitive process allowing detailed definition of various tile types, offering users granular control over map creation by specifying subtype tile images.',
            'Deployed the application on AWS EC2 using multi-container Docker, ensuring optimal performance and scalability for potential feature enhancements.'
        ]
    },
    {
        base: '#c9c5db',
        color: '#3412e0',
        link: 'https://github.com/ranjotdharni/sac-311-mobile',
        date: 'React Native',
        icon: '/png/reactnative.png',
        icon_bg: '#35353f',
        project_name: '311 Customer Service',
        desc: 'Customer Service Mobile Application',
        points: [
            'Led a team creating a unified React Native 311 app for City of Sacramento, integrating Google Maps and Salesforce for Android and iOS.',
            "Managed an eight-sprint, year-long project, fostering teamwork and adaptability while driving iterative front-end development.",
            "Engineered complex Salesforce integration for City of Sacramento's 311 services, adapting to evolving data structures.",
            'Directed key feature implementation like resource loading, Google Maps interactivity, and Salesforce integration, ensuring smooth collaboration with backend teams.'
        ]
    },
    {
        base: '#ceb1f2',
        color: '#6702e3',
        link: 'https://pitcrew.onrender.com',
        date: 'Python Django',
        icon: '/png/django.png',
        icon_bg: '#ffffff',
        project_name: 'Voxyl',
        desc: 'Project Management Application',
        points: [
            'Designed a responsive front-end using React with TypeScript including 12 interchangeable color themes with 2 lighting modes.',
            "Implemented a robust back-end architecture using built-in features of the Django development framework in Python.",
            "Employed PostgreSQL to save user data in a relational format for structured data storage enabling efficient querying.",
            'Developed functionalities which allow users to formulate teams, assign permissions to team members, and collaborate on projects.'
        ]
    }
]

/* 
base: '#dddcfc',
color: '#0e04e0',
*/

function ProjectTimeline()
{
    return (
        <div id='timeline'>
            <div className='timelineHeaderWrapper'>
                <div className="scrollBoxTwo" id='scrollTwo'><div></div></div>
                <p id='timelineTitle'>Projects</p>
            </div>
            <VerticalTimeline>
                {primitives.map((proj, index) => {
                    return <Project key={index} props={proj}></Project>
                })}
            </VerticalTimeline>
        </div>
    );
}

export default ProjectTimeline