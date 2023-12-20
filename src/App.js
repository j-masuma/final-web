
import Navbarc from './components/Navbarc';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import Section2 from './components/Section2';
import Future from './components/Future';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navbarc/>
     <HeroSection/>
     <Section2/>
     <Future/>
     <Footer/>
    </div>
  );
}

export default App;
