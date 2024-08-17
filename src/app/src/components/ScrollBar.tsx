import { useRef, useState } from 'react';
import '../css/ScrollBar.css';

const expand1 = 0
const expand2 = 12.5
const expand3 = 25
const expand4 = 41
const expand5 = 90

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
    const [curr, setCurr] = useState(0);

    function getScrollPercent() {
        var h: any = document.documentElement, 
            b: any = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }

    function onClick(target: any) {
        target.current.scrollIntoView({behavior: 'smooth'})
    }

    window.addEventListener('scroll', () => {
        setCurr(getScrollPercent());
    })

    return (
        <>
            <div className="scrollBox" id='scroll1'><div></div></div>

            <div ref={ref1} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '0'}}></div>
            <div ref={ref2} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '100vh'}}></div>
            <div ref={ref3} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '200vh'}}></div>
            <div ref={ref4} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: '300vh'}}></div>
            <div ref={ref5} style={{zIndex: '3', width: '2vw', height: '20vh', position: 'absolute', top: (window.innerWidth > 1600 ? '565vh' : '700vh')}}></div>
            <div className="scrollMain">
                <span className="scrollBack" style={{height: `${(curr > 97.5 ? curr + 20 : (curr + (curr > expand3 ? (curr > expand4 + 22.5 ? 10 : 30) : 22)))}%`}} />
                <Bubble expand={(curr >= expand1 ? true : false)} onClick={() => {onClick(ref1)}} scaleX={(curr >= expand1 ? (4 * 1.25) : 4)} scaleY={(curr >= expand1 ? (3.25 * 1.25) : 3.25)} text='1' offset={10} offsetX={0} />
                <Bubble expand={(curr >= expand2 ? true : false)} onClick={() => {onClick(ref2)}} scaleX={(curr >= expand2 ? (4 * 1.25) : 4)} scaleY={(curr >= expand2 ? (3.25 * 1.25) : 3.25)} text='2' offset={33} offsetX={0} />
                <Bubble expand={(curr >= expand3 ? true : false)} onClick={() => {onClick(ref3)}} scaleX={(curr >= expand3 ? (4 * 1.25) : 4)} scaleY={(curr >= expand3 ? (3.25 * 1.25) : 3.25)} text='3' offset={56} offsetX={0} />
                <Bubble expand={(curr >= expand4 ? true : false)} onClick={() => {onClick(ref4)}} scaleX={(curr >= expand4 ? (4 * 1.25) : 4)} scaleY={(curr >= expand4 ? (3.25 * 1.25) : 3.25)} text='4' offset={79} offsetX={0} />
                <Bubble expand={(curr >= expand5 ? true : false)} onClick={() => {onClick(ref5)}} scaleX={(curr >= expand5 ? (4 * 1.25) : 4)} scaleY={(curr >= expand5 ? (3.25 * 1.25) : 3.25)} text='5' offset={103} offsetX={0} />
            </div>
        </>
    )
}

export default ScrollBar