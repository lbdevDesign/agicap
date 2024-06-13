import React from "react";

//Assets
import {ArrowRightIcon} from '@heroicons/react/24/outline';

function TextCta({ text }) {
    return(
        <button className="textCta">
            <p className="textCta--text">{text}</p>
            <ArrowRightIcon className="textCta--icon" alt="Flèche"/>
        </button>
    )
}

export default TextCta;