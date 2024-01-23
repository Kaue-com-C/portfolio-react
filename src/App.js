import './App.css';
import Navbar from './components/section/Navbar';
import Presentation from './components/section/Presentation';
import Skills from './components/section/Skills';
import Projects from './components/section/Projects';
import Footer from './components/section/Footer';

function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="App">
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
     <Navbar/>
     <Presentation/>
     <Skills/>
     <Projects/>
     <Footer/>
    </div>
  );
}

export default App;
