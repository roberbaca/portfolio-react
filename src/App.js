import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact/Contact';
import Background from './components/Background/Background';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Router from './Router/Router';

/*--------------------------------------------------------------------------------

	# Personal Portfolio 1.0 - Mar 11, 2022
	# ------------------------------------------------------------------------------
	# Designed & coded by Roberto Baca
	# Websites:  http://www.robertobaca.dev -  Email: roberto.nicolas.baca@gmail.com

---------------------------------------------------------------------------------- */

//npm install react-icons
//https://react-icons.github.io/react-icons

function App() {

  return (
    <div className="App">
      {/* <Background/>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> */}

       <Router/>
      
   
      
    </div>
  );
}

export default App;
