import { instagram, facebook, linkedin } from "../assets/logos"

export default function Footer () {
    return (
        <footer className="Footer">
            <div>
                © 2022 Gaomata <br/>   
                Fly Yoga et Sophrologie <br/>  
                Email : gao.mata87@gmail.com <br/>  
                Téléphone : 06.09.05.00.01 <br/>
                Adresse : Studio Mudita, <br/>
                32 rue Jules Noriac, 87000 Limoges
            </div>
            <div className="Socials">
                Rejoins moi sur : 
                <a href="https://www.instagram.com/marion.gaomata/" target="blank">{instagram}</a>
                <a href="https://www.facebook.com/mariongaomata" target="blank">{facebook}</a>
                <a href="https://www.linkedin.com/in/marion-aubreton-b818b0153/" target="blank">{linkedin}</a>
            </div>
        </footer>
    )
}