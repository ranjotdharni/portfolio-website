import Waves from './three/Waves.tsx';
import Desktop from './three/Desktop.tsx';
import Greeting from './page/Greeting.tsx';
import CSS from 'csstype'

function Intro() {
  const inlineStyles: {[key: string]: CSS.Properties} = {
      "container": {
        width: '100%',
        height: '100vh'
      }
  }

    return (
      <div style={inlineStyles.container}>
        <Waves></Waves>
        <Desktop></Desktop>
        <Greeting></Greeting>
      </div>
    )
  }
  
  export default Intro