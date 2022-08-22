import { styled } from "@stitches/react"

export default function Highlight (props){
    const StyledHighlight = styled ('div', {
        backgroundImage: `url(${props.backgroundImage})`,
        height: '83vh',
        paddingTop: "4em",
        backgroundColor: "#64966b93",
        backgroundBlendMode: "darken",
        backgroundPosition: "left",
        backgroundSize: "cover",
        fontFamily: 'Montserrat',
        fontStyle: "italic",
        display: "flex",
        alignItems: "center",
        "@media(min-width: 800px)": {
            height: "100vh",
            backgroundPosition: "left",
            justifyContent: "right"
        }
    },
    )

    const StyledQuote = styled("h1", {
        fontSize: "1.2rem",
        textAlign: "center",
        padding: "1em",
        color: "white",
        textShadow: "rgba(26, 25, 25, 0.705) 5px 5px 10px",
        "@media(min-width: 800px)": {
            fontSize: "1.8rem",
            color: "white",
            width: "50%",
            marginRight: "4em"
        }
    })
    
    return (
        <StyledHighlight>
            <StyledQuote>
                {props.text}
            </StyledQuote>
        </StyledHighlight>
    )
}