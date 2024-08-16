import ContactForm from './spline/ContactForm';
import Planet from './three/Planet';
import Stars from './three/Stars';

function Contact() {

    return (
        <div style={{position: 'relative', width: '100vw', height: '100vh', marginTop: '150px'}}>
            <div style={{width: '100%', height: '100%'}}>
                <Stars />
                <Planet />
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact