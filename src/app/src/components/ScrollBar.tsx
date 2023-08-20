import { useRef, useState } from 'react';
import '../css/ScrollBar.css';

const maxY = 5.302;

function Bubble({scaleX, scaleY, text, onClick, offset, offsetX, expand} : {scaleX: number, scaleY: number, text: string, onClick: any, offset: number, offsetX: number, expand: boolean}) {
    return (
        <div className={'bubbleMain'} onClick={onClick} style={{width: scaleX * 100 + '%', height: scaleY * 5 + '%', top: offset - ((scaleY * 5 - 5) / 2) + '%', left: offsetX - ((scaleX * 100 - 100) / 2) + '%', border: (expand ? 'solid 1px var(--purple-color)' : 'none')}}>
            <p className={'bubbleText' + (expand ? ' bubbleExpand' : '')}>{text}</p>
        </div>
    )
}

function ScrollBar() {
    const ref1 = useRef<any>();
    const ref2 = useRef<any>();
    const ref3 = useRef<any>();
    const ref4 = useRef<any>();
    const ref5 = useRef<any>();
    const excess = window.innerHeight;
    const [curr, setCurr] = useState(0);

    function onClick(target: any) {
        target.current.scrollIntoView({behavior: 'smooth'})
    }

    window.addEventListener('scroll', () => {
        setCurr(((window.scrollY + (curr * excess)) / document.body.offsetHeight) / maxY);
    })

    return (
        <>
            <div className="scrollBox" id='scroll1'><div></div></div>
            <div className="scrollBox" id='scroll2'><div></div></div>

            <div ref={ref1} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '0'}}></div>
            <div ref={ref2} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '76.25vh'}}></div>
            <div ref={ref3} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '159.5vh'}}></div>
            <div ref={ref4} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '255.7vh'}}></div>
            <div ref={ref5} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '430vh'}}></div>
            <div className="scrollMain">
                <span className="scrollBack" style={{height: `${(curr + 0.2) * 100}%`}} />
                <Bubble expand={(curr >= 0 ? true : false)} onClick={() => {onClick(ref1)}} scaleX={(curr >= 0 ? (4 * 1.25) : 4)} scaleY={(curr >= 0 ? (3.25 * 1.25) : 3.25)} text='1' offset={10} offsetX={0} />
                <Bubble expand={(curr >= 0.1 ? true : false)} onClick={() => {onClick(ref2)}} scaleX={(curr >= 0.1 ? (4 * 1.25) : 4)} scaleY={(curr >= 0.1 ? (3.25 * 1.25) : 3.25)} text='2' offset={33} offsetX={0} />
                <Bubble expand={(curr >= 0.3 ? true : false)} onClick={() => {onClick(ref3)}} scaleX={(curr >= 0.3 ? (4 * 1.25) : 4)} scaleY={(curr >= 0.3 ? (3.25 * 1.25) : 3.25)} text='3' offset={56} offsetX={0} />
                <Bubble expand={(curr >= 0.5 ? true : false)} onClick={() => {onClick(ref4)}} scaleX={(curr >= 0.5 ? (4 * 1.25) : 4)} scaleY={(curr >= 0.5 ? (3.25 * 1.25) : 3.25)} text='4' offset={79} offsetX={0} />
                <Bubble expand={(curr >= 0.9 ? true : false)} onClick={() => {onClick(ref5)}} scaleX={(curr >= 0.9 ? (4 * 1.25) : 4)} scaleY={(curr >= 0.9 ? (3.25 * 1.25) : 3.25)} text='5' offset={103} offsetX={0} />
            </div>
        </>
    )
}

export default ScrollBar