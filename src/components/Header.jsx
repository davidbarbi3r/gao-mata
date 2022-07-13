import { useState } from "react"
import { NavLink } from "react-router-dom";

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
            <a href="https://www.eversports.fr/widget/w/3D38zX" target="#">Réservation</a>
        </nav>

    return (
        <div className="Header-container">
            <header className="Header sticky">
                <div className="Header-left">
                    <img src="./icons/logowebblanc.png" alt="logo gao mata"></img>
                    <h1 className="Header-title">Gao.Mata</h1>
                </div>
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
                    <a href="https://www.eversports.fr/widget/w/3D38zX" target="#">
                            Réservation
                    </a>
                </nav>
                <div className="Header-burger" onClick={toggleMenu}>
                    |||
                </div>
            </header> 
            {menu ? headerMenu : ""}
        </div>
      
    )
}