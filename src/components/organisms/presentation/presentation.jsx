import React, { useState, useEffect } from "react";

//Data
import presentationData from "../../../data/presentation";

//Molecules
import PresentationModule from "../../molecules/presentationModule/presentationModule";

function Presentation() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(presentationData)
      }, [])

    return (
        <div className="presentation">
            <h2 className="presentation__title">Combinez vos données pour réaliser des prévisions de trésorerie et des scénarios fiables</h2>
            {data.map((item) => (
                <PresentationModule 
                    key={item.id}
                    position={item.position}
                    img={item.img}
                    title={item.title}
                    list={item.list}
                    alt={item.alt}
                />
            ))}
        </div>
    )
}

export default Presentation;