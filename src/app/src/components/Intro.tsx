import Waves from './three/Waves.tsx';
import Desktop from './three/Desktop.tsx';
import Greeting from './page/Greeting.tsx';
import { Suspense } from 'react';

function Intro() {
    return (
      <>
        <Waves></Waves>
        <Desktop></Desktop>
        <Greeting></Greeting>
        </>
    )
  }
  
  export default Intro