import { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../css/TimelineElement.css'

function Project({ props } : { props: any})
{
    const [width, setWidth] = useState((window.innerWidth < 1920 ? true : false));

    window.addEventListener('resize', () => {
        setWidth((window.innerWidth < 1920 ? true : false));
    });
    //href={props.link}
    return (
        <VerticalTimelineElement 
            onTimelineElementClick={() => {window.open(props.link, '_blank');}}
            style={{width: (width ? '120%' : '150%'), position: 'relative', left: (width ? '-10%' : '-25%')}}
            contentStyle={{background: 'rgb(27, 14, 30)', color: '#fff'}}
            contentArrowStyle={{borderRight: '7px solid #232631'}}
            date={props.date}
            iconStyle={{backgroundColor: props.icon_bg}}
            icon={
                <div id='icon_box'>
                    <img id='icon_img' src={props.icon} alt={props.project_name} />
                </div>
            }
        >
            <div className='click' style={{marginBottom: '5%'}}>
                <h1 id='link' style={{'--custom-color': props.color, '--custom-base': props.base} as React.CSSProperties}>{props.project_name}</h1>
                <p>{props.desc}</p>
            </div>

            <ul className='click'>
                {
                    props.points.map((bullet: string, index: number) => {
                        return (
                            <li style={{marginBottom: '2%'}} key={`project-bullet-${index}`}>
                                {bullet}
                            </li>
                        )
                    })
                }
            </ul>
        </VerticalTimelineElement>
    );
}

export default Project