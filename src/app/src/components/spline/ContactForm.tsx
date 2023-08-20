import Spline from '@splinetool/react-spline';
import { useRef } from 'react';
import '../../css/ContactForm.css';

const submitId = 'de17cd1f-a903-4cf8-a81f-763352f677e2';
const directMaxY = 1400;
const maxY = 5.302;

function getCurrentY() {
    return ((window.innerHeight + window.scrollY) / document.body.offsetHeight) / maxY;
}

export default function App() {
    const submitBtn = useRef<any>();
    const model = useRef<any>();
    const requestRef = useRef<any>();
    const divRef = useRef<any>();
      
    const animate = (time: any) => {
        if (getCurrentY() > 0.9)
        {
            divRef.current.style.top = 433 + (Math.sin(time / 600)) + 'vh';
        }

        requestRef.current = requestAnimationFrame(animate);
    };
      
    /*useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);*/

    function onLoad(spline: any) {
        const obj = spline.findObjectById('aad8836f-9086-4b9c-8e6b-c774cd88c88f');
        submitBtn.current = spline.findObjectById(submitId);
        model.current = obj;
        model.current.position.y = directMaxY;
        model.current.rotation.y = 0.15;
        requestRef.current = requestAnimationFrame(animate);
    }

    function onMouseDown(e: any) {
        let subject = e.target.name;

        if (subject == 'submit')
        {

        }
    }

    function onMouseUp(e: any)   {
        let subject = e.target.name;

        if (subject == 'linkedin_icon')
        {
            window.open('https://www.linkedin.com/in/ranjot-dharni-717580269/', '_blank');
        }
        else if (subject == 'github_icon')
        {
            window.open('https://github.com/ranjotdharni', '_blank');
        }
        else if (subject == 'mail_icon')
        {
            navigator.clipboard.writeText('ranjotdharni1@gmail.com');
        }
        else if (subject == 'phone_icon')
        {
            navigator.clipboard.writeText('5304436729');
        }
    }

    function onMouseHover(e: any)   {
        let subject = e.target.name;

        if (subject == 'main')
        {
            return;
        }

        if (subject == 'submit' || subject == 'linkedin_icon' || subject == 'github_icon' || subject == 'mail_icon' || subject == 'phone_icon')
        {
            divRef.current.style.cursor = 'pointer';
        }
        else if (subject == 'Phone')
        {
            divRef.current.style.cursor = 'default';
        }
        else
        {
            divRef.current.style.cursor = 'default';
        }
    }

  return (
        <div id='contactMain' ref={divRef} style={{zIndex: '2', width: '70vw', height: '95vh', position: 'absolute', top: '433vh', left: '-10vw'}}>
            <form>
                <input id='nameInput' className='input3d' placeholder='First'></input>
                <input id='lastInput' className='input3d' placeholder='Last'></input>
                <input id='emailInput' className='input3d' placeholder='Email'></input>
                <textarea spellCheck='false' id='messageInput' className='input3d' placeholder='Leave a message...'></textarea>
            </form>
            <Spline onLoad={onLoad} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseHover={onMouseHover} scene="https://prod.spline.design/123eyZgTIWbqmgjO/scene.splinecode" />
        </div>
  );//35 60
}