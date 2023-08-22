import Intro from './components/Intro.js';
import Tech from './components/Tech.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Overview from './components/Overview.js';
import ScrollBar from './components/ScrollBar.js';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense>
      <ScrollBar></ScrollBar>

      <Intro></Intro>
      <Overview></Overview>
      <Tech></Tech>
      <Projects></Projects>
      <Contact></Contact>
    </Suspense>
  )
}

export default App
