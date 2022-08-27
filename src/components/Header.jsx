import { findByLabelText } from "@testing-library/react";
import { useState } from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/logowebblanc.png"
import { styled, keyframes } from "@stitches/react";

export default function Header (){

    const [menu, setMenu] = useState(false)

    function toggleMenu (){
        setMenu(prev => !prev)
    }

    const headerMenu =            
        <nav className="Header-menu sticky">
            <NavLink to="/"
                     className={({ isActive }) => isActive ? "Active" : undefined}>
                        Accueil
            </NavLink>
            <NavLink to="/fly-yoga"
                     className={({ isActive }) => isActive ? "Active" : undefined}>
                        Fly Yoga
            </NavLink>
            <NavLink to="/sophrotherapie"
                     className={({ isActive }) => isActive ? "Active" : undefined}>
                        Sophrothérapie</NavLink>
            {/* <NavLink to="/reservations"
                     className={({ isActive }) => isActive ? "Active" : undefined}>
                        Réservation</NavLink> */}
                        <a href="https://www.eversports.fr/widget/w/3D38zX" target="#">Réserver</a>
        </nav>

    const StyledBurger = styled("div", {
        position: "relative",
        width: "30px",
        height: "30px",
        transform: "rotate(0deg)"
    })

    const StyledBurgerTop = styled("div", {
        position:"absolute",
        top: "0",
        width: "2px",
        height: "25px",
        margin: "0",
        backgroundColor: "White",
        transform: !menu ? "rotate(90deg)" : "rotate(45deg)",
        display: !menu ? "block" : "none",
    })

    const StyledBurgerMid1 = styled("div", {
        position:"absolute",
        top: "8px",
        width: "2px",
        height: "25px",
        backgroundColor: "White",
        transform: !menu ? "rotate(90deg)" : "rotate(45deg)"
    })

    const StyledBurgerMid2 = styled("div", {
        position:"absolute",
        top: "8px",
        width: "2px",
        height: "25px",
        backgroundColor: "White",
        display: menu ? "block" : "none",
        transform: !menu ? "rotate(90deg)" : "rotate(-45deg)",
    })

    const StyledBurgerBot = styled("div", {
        position:"absolute",
        top: "16px",
        width: "2px",
        height: "25px",
        backgroundColor: "White",
        transform: !menu ? "rotate(90deg)" : "rotate(-45deg)",
        display: !menu ? "block" : "none",
    })

    const rotateNeg = keyframes({
        '0%': { transform: 'rotate(90deg)' },
        '100%': { transform: 'rotate(-45deg)' },
      });

      const rotatePos = keyframes({
        '0%': { transform: 'rotate(90deg)' },
        '100%': { transform: 'rotate(45deg)' },
      });
      

    return (
        <div className="Header-container">
            <header className="Header sticky">
                <div className="Header-left">
                <NavLink to="/">
                    <img src={logo} alt="logo gao mata"></img>
                </NavLink>
                    <h1 className="Header-title">Gao.Mata</h1>
                </div>
                <div className="Header-right">
                    <nav className="Header-plein-menu">
                        <NavLink to="/"
                                className={({ isActive }) => isActive ? "Active" : undefined}>
                                    Accueil
                        </NavLink>
                        <NavLink to="/fly-yoga" 
                                className={({ isActive }) => isActive ? "Active" : undefined}>
                                    Fly Yoga
                        </NavLink>
                        <NavLink to="/sophrotherapie"
                                className={({ isActive }) => isActive ? "Active" : undefined}>
                                    Sophrothérapie
                        </NavLink>
                        {/* <NavLink to="/reservation"
                                className={({ isActive }) => isActive ? "Active" : undefined}>
                                    Réservation
                        </NavLink> */}
                        
                    </nav>
                    <a href="https://www.eversports.fr/widget/w/3D38zX" target="#"><button className="Header-button">Réserver</button></a>
                </div>
               
                <StyledBurger className="Header-burger" onClick={toggleMenu}>
                    <StyledBurgerTop></StyledBurgerTop>
                    <StyledBurgerMid1></StyledBurgerMid1>
                    <StyledBurgerMid2></StyledBurgerMid2>
                    <StyledBurgerBot></StyledBurgerBot>
                </StyledBurger>
                
            </header> 
            {menu ? headerMenu : ""}
        </div>
      
    )
}