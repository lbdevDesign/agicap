import React, {useState, useEffect} from "react";

//Data
import featuresData from "../../../data/features";

//Molécules
import FeatureCard from "../../molecules/featureCard/featureCard";

function Features() {
    const [data, setData] = useState([])

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