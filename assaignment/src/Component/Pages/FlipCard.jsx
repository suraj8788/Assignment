import React from "react";
import "./FlipCard.css";
import Image1 from "../../Assets/Logo/01.593f9751cfa360a67e81.webp"
import Image3 from "../../Assets/Logo/01.c27f313885854ae9ebd7.webp"

const FlipCard = () => {
    const cardData = [
        {
            id: 1,
            title: "Mobile Developer",
            text: "Hover to see the image!",
            image: Image1,
        },
        {
            id: 2,
            title: "Data Base Developer",
            text: "Hover to see the image!",
            image: Image3,
        },
        {
            id: 3,
            title: "iOS Developer",
            text: "Hover to see the image!",
            image: Image3,
        },
        {
            id: 4,
            title: "React Developer",
            text: "Hover to see the image!",
            image: Image3,
        },
    ];
    

    return (
        <div style={{ backgroundColor: "#0f0a13", padding: "4rem 0" }}>
            <div className="container">
             <h2 className="text-white text-center mb-5">Our Best Services</h2>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                {cardData.map((card) => (
                    <div key={card.id} className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div className="card" style={{backgroundColor: "rgb(26, 26, 46)",}}>
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title text-white">{card.title}</h5>
                                        <p className="card-text text-white">{card.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center align-items-center p-0">
                                        <img
                                            src={card.image}
                                            alt={`Back of ${card.title}`}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default FlipCard;
