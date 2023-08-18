import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

const maxY = 1400;

export default function App() {
    const model = useRef<any>();
    const requestRef = useRef<any>();
      
    const animate = (time: any) => {
        model.current.position.y = maxY + (15 * Math.sin(time / 600));
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
        <div style={{zIndex: '2', width: '70vw', height: '95vh', position: 'absolute', top: '333vh', left: '-10vw'}}>
            <Spline onLoad={onLoad} scene="https://prod.spline.design/123eyZgTIWbqmgjO/scene.splinecode" />
        </div>
  );//35 60
}