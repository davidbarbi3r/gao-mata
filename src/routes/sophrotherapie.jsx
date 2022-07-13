import Header from '../components/Header';
import Highlight from '../components/Highlight';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';

function Sophro() {
    return (
        <div>
            <Header/>
            <Highlight
                text={`Plantons ensemble les graines de votre éclosion future,  
                croyez pleinement en vos potentialités,
                faites vous confiance, votre corps sait !`}
                backgroundImage="/images/marion-lac.jpg"
                />
            <h1>SOPHROLOGIE</h1>
            <Reservation/>
            <Footer/>
        </div>
    );
}

export default Sophro;