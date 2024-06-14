import React from "react";

//Assets
import {ArrowRightIcon} from '@heroicons/react/24/outline';

function PrimaryCta({ ...item }) {

    return(
        <button className={`primaryCta ${item.size ? "small" : ""}`}>
            <p className="primaryCta--text">{item.text}</p>
            <ArrowRightIcon className="primaryCta--icon" alt="Flèche"/>
        </button>
    )
}

export default PrimaryCta;