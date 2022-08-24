import Header from "../components/Header";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Prices from "../components/Prices";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Presentation from "../components/Presentation";
import marionHamac from "../assets/marion-hamac-chill2zoom.jpg";


function Fly() {

  const yogaSessions = [
    {
      id:"1",
      title: "Cours collectifs",
      subtitle: "7 personnes maximum, réservation OBLIGATOIRE",
      price: [{text:"22€ / personne", id:"1"}],
      text:"La pratique telle qu’elle est envisagée chez Mudita aura pour but de relâcher le corps et l’esprit tout en douceur, au travers de postures réconfortantes. Ce, sans oublier un travail musculaire en profondeur au poids du corps, en jouant avec la gravité.",
      highlight: "Le petit + : J'utilise également ma casquette de sophrologue au sein de ma pratique afin de favoriser une détente profonde."
    },
    {
      id:"2",
      title: "Fly duo Adulte - Enfant",
      subtitle: "[Ponctuel] 7 duos maximum, réservation OBLIGATOIRE",
      price: [{text:"25€ / duo", id:"2"}],
      text:"Parent , Oncle , Tante , Cousin , Marraine , Parrain , Tuteur, Référent … la liste est longue ! Je vous invite ici à créer un duo d’un jour “Adulte-Enfant” pour un voyage hors du commun. Un espace pour laisser libre place à nos enfants intérieurs et partager un moment d’égal à égal.",
      highlight: "Je vous guide au gré de mon inspiration pour une joyeuse escapade, qui, je l’espère, ancrera de doux souvenirs !"
    },
    {
      id:"3",
      title: "Cours privés",
      subtitle: "Seul / Duo ou groupes (maximum de 7 personnes)",
      price: [{text: "Particulier: 60€ / heure", id:'1'},{text: "Duo: 80€ / heure par duo", id:"2"},{text:"Groupe: me contacter", id:"3"}],
      text: "Privatisez votre espace Fly yoga pour ces moments si particuliers! Je vous guiderais avec joie, selon vos souhaits pour de merveilleux instants partagés entre ciel et terre.",
      highlight: "EVGF - EVG / Anniversaire / Entreprises. Prenez contact avec moi afin de me faire part de vos envies et souhaits , je serais ravie de vous accompagner dans ce moment rien que  pour vous."
    }
  ]

  return (
    <div>
      <Header />
      <Title
        title="Fly Yoga"
        quote="Déployez vos ailes, la Magie du Hamac ne demande qu’à œuvrer pour vous"
      />
      <Presentation
        titre1="Qu'est ce que le Fly Yoga?"
        pPresentation1="Le fly yoga , le “yoga volant” , le “yoga dans les airs” , le “yoga avec le tissu” , oui oui , c’est bien de lui dont nous allons parler"
        pPresentation2="Cette méthode permet en effet d'allier corps physique, mental et émotionnel afin d’ouvrir tous les possibles de libération, de légèreté, de voyage et d’évasion.  
                    Enveloppé par le tissu, une deuxième peau s’offre à toi, le bercement t’apaise, les positions te déchargent "
        photo1={marionHamac}
        titre2="Une méthode développée avec des kinésithérapeutes"
        pPresentationSuite1="Le Fly Yoga garanti le respect de notre biomécanique. 
        J'ai pour objectif de te guider dans ta propre exploration en mettant en lumière les potentialités de chacun. 
        Pour moi le tissu est un magnifique support pour y arriver et permettre de prendre conscience de tes capacités.
        "
        pPresentationSuite2="Très à l’écoute de tes besoins et de ceux du groupe , je tiens à t’accueillir dans un espace de non jugement et de douceur."
        highlight1="Les cours sont ouverts à tous, c'est une méthode qui s'adapte à chacun."
        pPresentationSuite3="Il n’y a pas de “trop vieux”, “trop grosse“, “pas assez souple”, “trop petit”, tous les corps se fondent dans le hamac. 
        La pratique telle qu’elle est envisagée chez Mudita aura pour but de relâcher le corps et l’esprit tout en douceur, au travers de postures réconfortantes.
        Ce, sans oublier un travail musculaire en profondeur au poids du corps, en jouant avec la gravité."
      />
      <Prices
        data={yogaSessions}
      />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Fly;
