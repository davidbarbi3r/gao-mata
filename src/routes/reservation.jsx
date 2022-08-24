import Header from '../components/Header';
import Footer from '../components/Footer';
import { styled } from '@stitches/react';

function Reservation() {

    const StyledContainer = styled ("div", {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "7em",
        height: "fit-content"
    })

    const iframe =  <iframe
                        title='Planning réservations'
                        width="90%"
                        height="1700px"
                        src="https://www.eversports.fr/widget/w/3D38zX"
                        frameBorder="0"
                        samesite="Strict">
                    </iframe>

    return (
        <div>
            <Header/>
            <StyledContainer>
                   {iframe}
            </StyledContainer>
            <Footer/>
        </div>
    );
}

export default Reservation;