import './styles/default.min.css'
import { isIE } from "react-device-detect"

import Navbar   from './components/sections/Navbar';
import Header   from './components/sections/Header';
import About    from './components/sections/About';
import Projects from './components/sections/Projects';
import Footer  from './components/sections/Footer';

function App() {
  if (isIE) {
    return (
      <div 
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center"
        }}>
        <p style={{color: "white"}}>Your browser is not supported.</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
