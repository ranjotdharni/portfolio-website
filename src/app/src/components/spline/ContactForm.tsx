import Spline from '@splinetool/react-spline';
import { useRef } from 'react';
import '../../css/ContactForm.css';

const maxY = 1400;

export default function App() {
    const model = useRef<any>();
    const requestRef = useRef<any>();
    const divRef = useRef<any>();
      
    const animate = (time: any) => {
        divRef.current.style.top = 433 + (Math.sin(time / 600)) + 'vh';
        requestRef.current = requestAnimationFrame(animate);
    };
      
    /*useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);*/

    function onLoad(spline: any) {
        const obj = spline.findObjectById('aad8836f-9086-4b9c-8e6b-c774cd88c88f');
        model.current = obj;
        model.current.position.y = maxY;
        model.current.rotation.y = 0.15;
        animate(0);
    }

  return (
        <div ref={divRef} style={{zIndex: '2', width: '70vw', height: '95vh', position: 'absolute', top: '433vh', left: '-10vw'}}>
            <form>
                <input id='nameInput' className='input3d' placeholder='First'></input>
            </form>
            <Spline onLoad={onLoad} scene="https://prod.spline.design/123eyZgTIWbqmgjO/scene.splinecode" />
        </div>
  );//35 60
}