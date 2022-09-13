import { styled } from "@stitches/react";
import eye from "../assets/closed-eye.png"

function ClinDoeil() {

    const StyledClin = styled("div", {
        padding: "0 1.5em 2em 1.5em",
        backgroundColor: "#eff3f1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "strong": {
            fontWeight: "inherit"
        },
        "div" : {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            padding: "1em",
            borderRadius: "15px"
        },
        "p": {
            margin: "1em 0",
            maxWidth: "800px"
        },
        "img" : {
            maxWidth: "100px"
        }

    })

  return (
    <StyledClin>
        <div>
            <h2>Le Clin d'oeil <strong>Gao Mata</strong></h2>
            <img src={eye} alt='logo oeil'></img>
            <p>
                Ce terme définit la fameuse vache sacrée en Inde, <br/>
                Alors à toi ami Limougeaud, fier de tes origines, qui connait mon esprit fantasque et
                farceur tu comprendras l’hommage à mes racines Limousines à travers ce
                nom si précieux à mes yeux. <br/>
                Gao Mata fait également écho à la douceur ,
                à la “mère universelle” , Sentez-vous accueillis de manière chaleureuse
                et inconditionnelle au sein de Gao Mata.
                Je vous suis d’une immense
                gratitude quant à l’intérêt que vous portez aux pratiques que j'exerce : <strong>Fly Yoga et Sophrothérapie à Limoges</strong>
            </p>
        </div>
    </StyledClin>
  );
}

export default ClinDoeil;
