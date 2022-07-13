import './App.css';
import Header from './components/Header';
import Highlight from './components/Highlight';
import Presentation from './components/Presentation';
import Activite from './components/Activite';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Highlight
          text="Plantons ensemble les graines de votre éclosion future,  
          croyez pleinement en vos potentialités,
          faites vous confiance, votre corps sait !"
          backgroundImage="/images/marion-lac.jpg"/>
      <Presentation/>
      <Activite/>
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default App;
