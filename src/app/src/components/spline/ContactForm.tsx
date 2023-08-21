import Spline from '@splinetool/react-spline';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../css/ContactForm.css';

const submitId = 'de17cd1f-a903-4cf8-a81f-763352f677e2';
const directMaxY = 1400;
const maxY = 5.302;

function getCurrentY() {
    return ((window.innerHeight + window.scrollY) / document.body.offsetHeight) / maxY;
}

export default function App() {
    let timeout: any;
    const submitBtn = useRef<any>();
    const model = useRef<any>();
    const requestRef = useRef<any>();
    const divRef = useRef<any>();
    const formRef = useRef<any>();
    const nameRef = useRef<any>();
    const lastRef = useRef<any>();
    const emailRef = useRef<any>();
    const messageRef = useRef<any>();
    const submitRef = useRef<any>();
    const confirmRef = useRef<any>();

    function showMessage(mess: string) {
        confirmRef.current.innerText = mess;
        confirmRef.current.style.opacity = 1;

        if (timeout)
        {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            confirmRef.current.style.opacity = 0;
        }, 7000);
    } 

    const sendEmail = (e: any) => {
        e.preventDefault();
        showMessage('Received');

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, formRef.current, process.env.REACT_APP_EMAILJS_KEY!)
        .then(() => {
            showMessage('Received!');
        }, () => {
          showMessage('Something went wrong!');
        });
    };
      
    const animate = (time: any) => {
        if (getCurrentY() > 0.9)
        {
            divRef.current.style.top = 433 + (Math.sin(time / 600)) + 'vh';
        }

        requestRef.current = requestAnimationFrame(animate);
    };

    function onLoad(spline: any) {
        const obj = spline.findObjectById('aad8836f-9086-4b9c-8e6b-c774cd88c88f');
        submitBtn.current = spline.findObjectById(submitId);
        model.current = obj;
        model.current.position.y = directMaxY;
        model.current.rotation.y = 0.15;
        requestRef.current = requestAnimationFrame(animate);
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
            showMessage('Copied to Clipboard');
        }
        else if (subject == 'phone_icon')
        {
            navigator.clipboard.writeText('5304436729');
            showMessage('Copied to Clipboard');
        }
    }

    function onMouseHover(e: any)   {
        let subject = e.target.name;

        if (subject == 'main')
        {
            return;
        }

        if (subject == 'first')
        {
            nameRef.current.classList.add('nameHover');
        }
        else if (subject == 'last')
        {
            lastRef.current.classList.add('lastHover');
        }
        else if (subject == 'email')
        {
            emailRef.current.classList.add('emailHover');
        }
        else if (subject == 'message')
        {
            messageRef.current.classList.add('messageHover');
        }
        else if (subject == 'submit')
        {
            submitRef.current.classList.add('submitHover');
        }

        if (subject == 'linkedin_icon' || subject == 'github_icon' || subject == 'mail_icon' || subject == 'phone_icon')
        {
            divRef.current.style.cursor = 'pointer';
        }
        else if (subject == 'Phone')
        {
            divRef.current.style.cursor = 'default';

            nameRef.current.classList.remove('nameHover');
            lastRef.current.classList.remove('lastHover');
            emailRef.current.classList.remove('emailHover');
            messageRef.current.classList.remove('messageHover');
            submitRef.current.classList.remove('submitHover');
        }
        else
        {
            divRef.current.style.cursor = 'default';
        }
    }

  return (
    <>
        <div id='contactMain' ref={divRef} style={{zIndex: '2', width: '70vw', height: '95vh', position: 'absolute', top: '433vh', left: '-10vw'}}>
            <form onSubmit={sendEmail} ref={formRef}>
                <input id='nameInput' ref={nameRef} autoComplete='off' name='first' type='text' className='input3d' placeholder='First'></input>
                <input id='lastInput' ref={lastRef} autoComplete='off' name='last' type='text' className='input3d' placeholder='Last'></input>
                <input id='emailInput' ref={emailRef} autoComplete='off' name='email' type='email' className='input3d' placeholder='Email'></input>
                <textarea spellCheck='false' ref={messageRef} autoComplete='off' name='message' id='messageInput' className='input3d' placeholder='Leave a message...'></textarea>
                <button ref={submitRef} id='formSubmit' type="submit" ></button>
            </form>
            <Spline onLoad={onLoad} onMouseUp={onMouseUp} onMouseHover={onMouseHover} scene="https://prod.spline.design/123eyZgTIWbqmgjO/scene.splinecode" />
        </div>
        <p id='confirmMessage' ref={confirmRef} style={{color: 'aliceblue', transition: 'opacity 1s ease', opacity: '0', width: '10vw', height: '10vh', position: 'absolute', top: '515vh', left: '47vw', display: 'grid', placeItems: 'center'}}></p>
    </>
  );
}