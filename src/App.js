import './App.css';
import Header from './components/Header';
import Highlight from './components/Highlight';
import Presentation from './components/Presentation';
import Activite from './components/Activite';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Highlight/>
      <Presentation/>
      <Activite/>
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default App;
