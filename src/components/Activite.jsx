import { Link } from "react-router-dom";
import lotus from "../assets/lotus.png"
import galets from "../assets/galets.png"

export default function Activite (){
    return (
        <section className="Activite-container">
            <section className="Activite sophro">
                <div className="Activite-text">
                    <h2>
                        Sophrothérapie
                    </h2>
                    <p>
                        Inspirée du yoga , du zen , de la psychanalyse , 
                        la sophrologie est une <strong>méthode thérapeutique douce  
                        qui vise à prendre conscience de ses capacités</strong> à surmonter 
                        certaines situations , de peurs , phobies , angoisses. 
                        Elle est également très couramment utilisée dans la gestion du stress, 
                        dans des parcours de soin, 
                        ou encore pour la préparation mentale lors d'événements précis.
                    </p>
                </div>   
                <button className="Activite-more"><Link to="/sophrotherapie">En savoir plus</Link></button>
                <img src={galets} alt="galets-icon"></img>
            </section>
            <section className="Activite fly">
                <div className="Activite-text">
                    <h2>
                        Fly Yoga ©
                    </h2>
                    <p>
                        Cette méthode a pour but d’<strong>allier corps physique, 
                        mental et émotionnel</strong> afin d’ouvrir tous les possibles de libération. <br/>
                        Enveloppé par le tissu, une deuxième peau s’offre à vous, 
                        le bercement vous apaise, les postures vous déchargent … 
                    </p>
                </div>
                <button className="Activite-more"><Link to="/fly-yoga">En savoir plus</Link></button>
                <img src={lotus} alt="lotus-icon"></img>
            </section>
        </section>
    )
}