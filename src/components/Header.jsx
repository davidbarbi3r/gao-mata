import { useState } from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/logowebblanc.png"

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
               
                <div className="Header-burger" onClick={toggleMenu}>
                    |||
                </div>
                
            </header> 
            {menu ? headerMenu : ""}
        </div>
      
    )
}