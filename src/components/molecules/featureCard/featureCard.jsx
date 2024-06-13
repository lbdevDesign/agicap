import React from "react";

//Assets
import fileShieldSVG from '../../../assets/file-shield-02.svg';
import refreshSVG from '../../../assets/refresh-ccw-02_1.svg';
import coinHandSVG from '../../../assets/coins-hand_1.svg';

function FeatureCard({ ...item }) {

    const imageMap = {
        "refresh-ccw-02_1.svg": refreshSVG,
        "file-shield-02.svg": fileShieldSVG,
        "coins-hand_1.svg": coinHandSVG
    };

    const image = imageMap[item.img];
    
    return(
        <div className="featureCard">
            <img src={image} className="featureCard__img" alt={`${item.title} icon`} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
        </div>
    )
}

export default FeatureCard;