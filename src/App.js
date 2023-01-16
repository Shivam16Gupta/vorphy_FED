import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import ChooseUs from './components/ChooseUs';
import Future from './components/Future';
import Promotion from './components/Promotion';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <AboutUs/>
      <ChooseUs/>
      <Future/>
      <Promotion/>
      <Footer/>
    </div>
  );
}

export default App;
