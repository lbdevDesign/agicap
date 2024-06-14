import React from "react";

//Atoms
import TextCta from "../../atoms/textCta/textCta";

//Asstets
import consolidationSVG from "../../../assets/FR___Consolidation.svg";
import scenariosSVG from "../../../assets/FR___Scenarios.svg";
import lSVG from "../../../assets/P_L.svg";
import debtSVG from "../../../assets/FR___Debt_management.svg";
import customSVG from "../../../assets/FR___Debt_management.svg";

function PresentationModule({ ...item }) {

    console.log(item.position);

    // Map des noms d'images aux importations d'assets correspondants
    const imageMap = {
        "FR___Consolidation.svg": consolidationSVG,
        "FR___Scénarios.svg": scenariosSVG,
        "P_L.svg": lSVG,
        "FR___Debt_management.svg": debtSVG,
        "FR___Custom_dashboards.svg": customSVG,
    };

    // Sélection de l'image correspondante 
    const image = imageMap[item.img];

    // Vérification si l'ID de l'élément est pair ou impair
    const isEven = item.position % 2 === 0;

    return (
        <div className={`presModule ${isEven ? 'background' : ''}`}>
            <div className={`${isEven ? 'second' : 'first'}`}>
                <img src={image} alt={item.alt} />
            </div>
            <div className={`presModule__infos ${isEven ? 'first' : 'second'}`}>
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