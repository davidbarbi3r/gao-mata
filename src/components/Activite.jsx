export default function Activite (){
    return (
        <section className="Activite">
            <section className="Activite sophro">
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
                <button className="Activite-more">En savoir plus</button>
                <img src="/icons/meditation.png" alt="galets-icon"></img>
            </section>
            <section className="Activite sophro">
                <h2>
                    Fly Yoga
                </h2>
                <p>
                    Cette méthode a pour but d’ <strong>allier corps physique, 
                    mental et émotionnel</strong> afin d’ouvrir tous les possibles de libération. <br/>
                    Enveloppé par le tissu, une deuxième peau s’offre à vous, 
                    le bercement vous apaise, les postures vous déchargent … 
                </p>
                <button className="Activite-more">En savoir plus</button>
                <img src="/icons/lotus.png" alt="lotus-icon"></img>
            </section>
        </section>
    )
}