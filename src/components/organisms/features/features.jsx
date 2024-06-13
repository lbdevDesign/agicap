import React, {useState, useEffect} from "react";

//Data
import featuresData from "../../../data/features";

//Molécules
import FeatureCard from "../../molecules/featureCard/featureCard";

function Features() {
    // Déclaration d'un état local pour stocker les données
    const [data, setData] = useState([])

    // useEffect pour mettre à jour l'état avec les données
    useEffect(() => {
      setData(featuresData)
    }, [])
    
    return (
        <div className="features">
            {data.map((item) => (
                <FeatureCard 
                    key={item.id} 
                    title={item.title} 
                    text={item.text} 
                    img={item.img} 
                />
            ))}
        </div>
    )
}

export default Features;