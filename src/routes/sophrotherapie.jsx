import Header from "../components/Header";
import Title from "../components/Title";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Prices from "../components/Prices";
import marionPhoto from "../assets/mario-sophro.jpg"

function Sophro() {
  const sophroSessions = [
    {
      id: "1",
      title: "Séances individuelles",
      subtitle: "accompagnement personnalisé",
      price: [{ text: "60€ / séance", id: "12" }],
      text: "Accompagnement de plusieurs semaines à quelques mois, modalités à définir ensemble lors de notre première rencontre.",
      highlight:
        "C’est vous qui détenez la clef de votre mieux être, et c’est en cela que je souhaite vous guider!",
    },
    {
      id: "2",
      title: "Atelier sophro de groupe",
      subtitle: "10 personnes maximum",
      price: [{ text: "15€ / personne", id: "13" }],
      text: "Atelier ponctuel afin de découvrir la pratique à travers l’énergie d’un groupe.",
      highlight: "Accordez-vous une bulle de douceur mensuelle, laissez-vous guider. Respirez, relâchez et repartez régénéré.",
    },
    // {
    //   id: "3",
    //   title: "Atelier Fly & Sophro",
    //   subtitle: "7 personnes maximum",
    //   price: [{ text: "25€ / personne", id: "14" }],
    //   text: "Atelier ponctuel pour une détente aérienne des plus enveloppantes.",
    //   highlight:
    //     "Le bon plan tikiton pour découvrir les deux activités en groupe",
    // },
  ];

  return (
    <div>
      <Header />
      <Title title="Sophrothérapie" quote="Science de l’esprit harmonieux" />
      <Presentation
        titre1="La sophrologie"
        photo1={marionPhoto}
        pPresentation1="Méthode inventée en 1960 par Alfonso Caycedo (psychiatre) que l’on qualifie de psycho-corporelle car elle allie en pratique les corps physiques, mentaux et émotionnels ."
        pPresentation2="Inspirée du yoga, du zen, de la psychanalyse, la sophrologie est une méthode thérapeutique douce qui vise à prendre conscience de ses capacités à surmonter certaines situations, de peurs, phobies et angoisses. Elle est également très couramment utilisée dans la gestion du stress, dans des parcours de soin, ou encore pour la préparation mentale lors d'événements précis (accouchements, examens…)."
        pPresentation3="C’est également un merveilleux outil de cohésion de groupe , de connaissance de soi, de prise de conscience de la pluralité de ses capacités , elle permet une douce émergence de l’estime de soi pour plus de confiance au quotidien."
        titre2="Le déroulé d’une séance"
        pPresentationSuite1="Deux types d’exercices sont proposés lors d’une séance , il y a tout d’abord ce que l’on appelle la relaxation dynamique .
                Ici on passe par le mouvement et la respiration afin d’induire calme et détente.
                En second lieu , des exercices de suggestion mentale sont utilisés : on utilise alors l’imagination , la capacité à ressentir et à visualiser du positif."
        pPresentationSuite2="La voix de votre thérapeute est là pour vous guider tout au long de chaque pratique.
                Des temps d’échange sont aussi proposés durant chaque séance afin de laisser tout l’espace à vos ressentis et vos besoins."
        titre3="La sophrothérapie, ça s'adresse à qui ?"
        pPresentationSuite3="Cette pratique s’ouvre à tout le monde ,elle peut être utilisée dès la crèche sans réelle limite d’âge et de manière inconditionnelle.
                C’est toujours dans cet esprit de libération, de travail en conscience sur vos propres capacités que je vous propose de venir découvrir l’accompagnement thérapeutique en sophrologie.
                "
        titre4="Pourquoi la sophrothérapie ?"
        pPresentationSuite4="La base de mon travail est bien entendu axée pleinement sur la sophrologie, toutefois ayant bénéficié du coaching “coach ailé” dispensé par Florie Ravinet (citée auparavant) , et forte de ce qu’il a pu faire émerger en moi , je vous propose, si vous le souhaitez, d’aller un peu plus loin dans ce voyage vers vous même en explorant pleinement vos potentialités.
                "
      />
      <Prices data={sophroSessions} />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Sophro;
