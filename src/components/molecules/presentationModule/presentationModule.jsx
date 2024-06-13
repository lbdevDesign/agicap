import React from "react";

//Atoms
import TextCta from "../../atoms/textCta/textCta";

//Asstets
import consolidationSVG from "../../../assets/FR___Consolidation.svg";
import scenariosSVG from "../../../assets/FR___Scenarios.svg";

function PresentationModule({ ...item }) {

    // Map des noms d'images aux importations d'assets correspondants
    const imageMap = {
        "FR___Consolidation.svg": consolidationSVG,
        "FR___Scénarios.svg": scenariosSVG
    };

    // Sélection de l'image correspondante 
    const image = imageMap[item.img];

    return (
        <div className="presModule">
            <div className="presModule__img">
                <img src={image} className="presModule__img--img" alt={item.alt} />
            </div>
            <div className="presModule__infos">
                <h3>{item.title}</h3>
                <ul>
                    {item.list.map((item) => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
                <TextCta text="Demander une démo"/>
            </div>
        </div>
    )
}

export default PresentationModule;