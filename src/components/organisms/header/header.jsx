import React from "react";

//Atoms
import PrimaryCta from "../../atoms/primaryCta/primaryCta";

//Assets
import agicapLogo from "../../../assets/brand-logo.svg";
import bulletIcon from "../../../assets/bulletIcon.svg";

function Header() {
    return (
        <div className="header">
            <div className="header__navigation">
                <img src={agicapLogo} className="header__navigation--logo" alt="logo Agicap" />
                <nav className="header__navigation--nav">
                    <ul>
                        <li><a href="#">Solution</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Tarifs</a></li>
                        <li><a href="#">Ressources</a></li>
                        <li><a href="#">Partenaires</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__cta">
                <select className="header__cta--languages" id="language" name="language">
                    <option value="fr">Français</option>
                    <option value="en">Anglais</option>
                    <option value="es">Espagnol</option>
                    <option value="de">Allemand</option>
                </select>
                <button className="header__cta--connection">Connectez-vous</button>
                <PrimaryCta text="Essayer gratuitement" />
            </div>
        </div>
    )
}

export default Header;