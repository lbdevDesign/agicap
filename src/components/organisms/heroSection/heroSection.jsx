import React from "react";

//Atoms
import PrimaryCta from "../../atoms/primaryCta/primaryCta";
import SecondaryCta from "../../atoms/secondaryCta/secondaryCta";

//Assets
import heroImg from "../../../assets/FR___Scenarios.svg"

function HeroSection() {
    return (
        <div className="hero">
            <div className="hero__infos">
                <h1>Créez et suivez facilement votre prévisionnel de trésorerie</h1>
                <p>Grâce à la consolidation des données depuis vos différentes sources, planifiez votre trésorerie et améliorez vos prévisions en les comparant automatiquement avec vos performances réelles.</p>
                <div className="hero__infos--cta">
                    <PrimaryCta text="Demander une démo" />
                    <SecondaryCta text="Essayer gratuitement"/>
                </div>
            </div>
            <div className="hero__img">
                <img src={heroImg} className="hero__img--img" alt="Dashboard Scenarios" />
            </div>
        </div>
    )
}

export default HeroSection;