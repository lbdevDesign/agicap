import React from "react";

//Assets
import {ArrowRightIcon} from '@heroicons/react/24/outline';

function SecondaryCta({ text }) {
    return(
        <button className="secondaryCta">
            <p className="secondaryCta--text">{text}</p>
            <ArrowRightIcon className="secondaryCta--icon" alt="Flèche"/>
        </button>
    )
}

export default SecondaryCta;