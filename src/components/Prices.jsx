import { styled } from "@stitches/react";
import React from "react";

const StyledTitle = styled("h2", {
  padding: "1em 0",
});

const StyledContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5em",
  alignItems: "center",
});

const StyledSessionContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  fontSize: "0.9rem",
  "@media(min-width: 1000px)": {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const StyledSession = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5em",
  margin: "1em 0",
  backgroundColor: "#226a62",
  color: "rgba(255,255,255,0.9)",
  textAlign: "center",
  borderRadius: "15px",
  maxWidth: "500px",
  "@media(min-width: 1000px)": {
    justifyContent: "space-between",
    maxWidth: "30%",
    margin: "1em",
  },
});

const StyledSessionTitle = styled("h3", {
  paddingBottom: "0.3em",
});

const StyledSessionSubtitle = styled("p", {});

const StyledSessionPrice = styled("h4", {
  padding: "0.8em",
  "& ul": {
    listStyleType: "none",
    textDecoration: "none",
    textAlign: "center",
    padding: "0",
  },
});

const StyledSessionP = styled("p", {});

const StyledSessionHighlight = styled("div", {
  backgroundColor: "rgba(251,228,174,0.9)",
  margin: "1em 0",
  padding: "0.75em",
  color: "#063F3E",
  borderRadius: "15px",
  fontWeight: "bold",
});

function Prices(props) {
  const sessionsHtml = props.data.map((session) => {
    return (
      <StyledSession key={session.id}>
        <StyledSessionTitle>{session.title}</StyledSessionTitle>
        <StyledSessionSubtitle>{session.subtitle}</StyledSessionSubtitle>
        <StyledSessionPrice>
            <ul>
                {session.price.map((price) => {
                    return <li key={price.id}>{price.text}</li>
                })}
            </ul>
        </StyledSessionPrice>
        <StyledSessionP>{session.text}</StyledSessionP>
        {session.highlight ? (
          <StyledSessionHighlight>{session.highlight}</StyledSessionHighlight>
        ) : (
          ""
        )}
      </StyledSession>
    );
  });

  return (
    <StyledContainer>
      <StyledTitle>Tarifs</StyledTitle>
      <StyledSessionContainer>{sessionsHtml}</StyledSessionContainer>
    </StyledContainer>
  );
}

export default Prices;
