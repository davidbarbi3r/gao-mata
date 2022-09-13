import { styled } from "@stitches/react"

export default function Presentation (props){

    const StyledPhoto = styled("img", {
        objectPosition: "bottom",
        margin: "0 auto",
        maxHeight: "70vh",
        maxWidth: "100%",
        objectFit: "cover",
        borderRadius:"15px",
        '&::after': {
            content: ``,
            display: 'block',
            backgroundColor: "red",
            width: '500px',
            height: '500px',
            borderRadius: 'inherit',
          },
        "@media(min-width: 700px)": {
            width: "40%",
            margin: "0 auto",
            borderRadius: "50% 50% 3% 3%",
            maxHeight: "50vh",
            objectFit: 'cover'
        }
    })

    const StyledHighlight = styled("h3", {
        textAlign: 'center',
        margin: "1.5em"
    })

    const presentationSuite = props.pPresentationSuite3 ? 
            <div>
                <div>
                    <h2>{props.titre3}</h2>
                    <p>{props.pPresentationSuite3}</p> 
                </div>
                <div>
                    <h2>{props.titre4}</h2>
                    <p>{props.pPresentationSuite4}</p>
                </div>
            </div> : null

    return (
        <section className="Presentation">
            <div className="Presentation-container">
                <div className="Presentation-first-container">
                    <div className="Presentation-generale">
                        <h2>
                            {props.titre1}
                        </h2>
                        <p>
                            {props.pPresentation1}
                        </p>
                        <p>
                            {props.pPresentation2} 
                        </p>
                    </div>
                    <StyledPhoto src={props.photo1} alt="Portrait"></StyledPhoto>
                </div>
                {props.pPresentation3}
                <div className="Presentation-second-container">
                    <h2>{props.titre2}</h2>
                    <p>
                        {props.pPresentationSuite1} 
                    </p>
                    <p>
                        {props.pPresentationSuite2} 
                    </p>
                    <StyledHighlight>{props.highlight1}</StyledHighlight>
                    {presentationSuite}
                    <div className="Presentation-detaillee">
                        <p>
                            {props.pPresentationDetaillee1} 
                        </p>
                        <p>
                            {props.pPresentationDetaillee2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}