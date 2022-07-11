import { useState } from "react"

export default function Header (){

    const [menu, setMenu] = useState(false)

    function toggleMenu (){
        setMenu(prev => !prev)
    }

    const headerMenu =            
        <div className="Header-menu sticky">
            <h2>Fly Yoga</h2>
            <h2>Sophrothérapie</h2>
            <h2>A propos</h2>
            <h2>Réservation</h2>
        </div>

    return (
        <div className="Header-container">
            <header className="Header sticky">
                <div className="Header-left">
                    <img src="./icons/logowebblanc.png" alt="logo gao mata"></img>
                    <h1 className="Header-title">Gao.Mata</h1>
                </div>
                <div className="Header-burger" onClick={toggleMenu}>
                    |||
                </div>
            </header> 
            {menu ? headerMenu : ""}
        </div>
      
    )
}