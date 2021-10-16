import './styles/default.min.css'

import Navbar   from './components/sections/Navbar';
import Header   from './components/sections/Header';
import About    from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact  from './components/sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
