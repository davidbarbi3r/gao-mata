import Header from '../components/Header';
import Highlight from '../components/Highlight';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';

function Fly() {
    return (
        <div>
            <Header/>
            <Highlight
                text={`Plantons ensemble les graines de votre éclosion future,  
                croyez pleinement en vos potentialités,
                faites vous confiance, votre corps sait !`}
                backgroundImage="/images/marion-fly-wide2.jpg"/>
            <Carousel
                images={[
                    {url: "/images/fly/marion-flyc1.jpg",
                    alt: "photo de fly yoga 1" },
                    {url: "/images/fly/marion-flyc2.jpg",
                    alt: "photo de fly yoga 2"},
                    {url: "/images/fly/marion-flyc3.jpeg",
                    alt: "photo de fly yoga 3"},
                    {url: "/images/fly/marion-flyc4.jpg",
                    alt: "photo de fly yoga 4"},
                    {url: "/images/fly/marion-flyc5.jpg",
                    alt: "photo de fly yoga 5"},
                    {url: "/images/fly/marion-flyc6.jpg",
                    alt: "photo de fly yoga 6"}]}/>
            <Reservation/>
            <Footer/>
        </div>
    );
}

export default Fly;