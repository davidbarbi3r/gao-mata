import "./App.css";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import Presentation from "./components/Presentation";
import Activite from "./components/Activite";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import marionLac from "./assets/marion-lac.jpg";
import marionPortrait from "./assets/marion-portrait.jpg"

function App() {
  return (
    <div>
      <Header />
      <Highlight
        text="Plantons ensemble les graines de votre éclosion future,  
          croyez pleinement en vos potentialités,
          faites vous confiance, votre corps sait !"
        // backgroundImage="gao-mata/static/media/marion-lac.9d914c7c6bf554ae8f88.jpg"
        backgroundImage={marionLac}
      />
      <Presentation
        titre1="Bienvenue dans l’univers Gao Mata"
        photo1={marionPortrait}
        pPresentation1="Je m’appelle Marion, j’ai 30 ans et la folle envie de vous guider dans le plus beau des voyages , le vôtre ! "
        pPresentation2="Au travers de mes cours, 
        ma mission est alors de vous guider 
        vers votre propre exploration, 
        par une prise de conscience de vos capacités, 
        une écoute de vos besoins dans un espace de non jugement et de douceur."
        titre2="Mon parcours"
        pPresentationSuite1="Mon parcours n'est pas linéaire, mais il est profondément marqué par l’importance de la richesse humaine.
        Travailleur social diplômée d’état, j’ai exercé ma profession durant une dizaine d’années auprès de publics et d’environnements très divers. 
        J’ai, par ce biais, beaucoup appris des autres mais surtout de moi-même."
        pPresentationSuite2="Ce chemin professionnel m’a menée à ce que j’appelle une “sortie de route”, plus communément appelé “burn out”.  
        Ce moment de vie, bien qu’extrêmement sombre, a finalement peut-être été ma plus belle opportunité, celle qui m’a menée à m’observer, à me rencontrer, à m’explorer en toute humilité et avec beaucoup de sincérité 
        Cette épreuve m’a poussée à mettre du sens dans mon quotidien et dans mes pratiques. "
        pPresentationDetaillee1="De nature aventurière , voyageuse , un brin rêveuse et utopiste j’ai alors compris qu’il était temps de me lancer et de réaliser ce que je gardais bien caché au fond de moi même.
        Fascinée par le monde du cirque depuis toute petite, piquée par le doux virus du yoga il y a déjà plusieurs années, c’est tout naturellement que j’ai fait le choix de me former à la méthode “Fly Yoga” initiée par Florie RAVINET."
        pPresentationDetaillee2="Toujours désireuse d’accompagner et de pouvoir apporter un soutien à quiconque en ressent le besoin face aux épreuves que la vie oriente sur nos chemins , j’ai aussi entrepris de me former à la Sophrologie via l’Institut de Formation à la Sophrologie - Catherine Aliotta.
        C’est désormais forte de mes expériences, de mon parcours de vie et plus que jamais en phase avec mon hypersensibilité que je souhaite vous apporter de nouveaux outils, pour une meilleure connaissance de vous-même et un quotidien plus doux."
      />
      <Activite />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
