import React from 'react'
import { styled } from '@stitches/react'
import leaves from "../assets/ginkgo-leavesld.jpg"

const StyledContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    width: "100%",
    backgroundImage: `url(${leaves})`,
    height: "35em"
})

const StyledTextContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "rgba(251,228,174,0.8)",
    padding: "2em",
    margin: "1.5em",
    borderRadius: "15px",
    maxWidth: "500px",
})

const StyledTitle = styled("h1", {
    padding: "2rem",
    fontSize: "1.4rem",
    color: "#063F3E",
    marginBottom: "1em",
    "@media(min-width: 800px)": {
        fontSize: "2rem"
    }
})

const StyledQuote = styled("h3", {
    color: "#063F3E",
    fontStyle: "italic",
    fontSize: "1.15em",
    textAlign: "center",
    "@media(min-width: 800px)": {
        fontSize: "1.25rem"
    }
})


function Title({title, quote}) {
  return (
    <StyledContainer>
        <StyledTextContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledQuote>{quote}</StyledQuote>
        </StyledTextContainer>
    </StyledContainer>
  )
}

export default Title