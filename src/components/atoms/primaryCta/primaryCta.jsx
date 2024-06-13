import React from "react";

//Assets
import {ArrowRightIcon} from '@heroicons/react/24/outline';

function PrimaryCta({ text }) {
    return(
        <button className="primaryCta">
            <p className="primaryCta--text">{text}</p>
            <ArrowRightIcon className="primaryCta--icon" alt="Flèche"/>
        </button>
    )
}

export default PrimaryCta;