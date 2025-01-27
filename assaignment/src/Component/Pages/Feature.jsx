import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Feature1 from "../../Assets/Logo/feature1.png";
import Feature2 from "../../Assets/Logo/feature2.png";
import Feature3 from "../../Assets/Logo/feature3.png";
import { Carousel } from "react-responsive-carousel";

const features = [
  {
    id: 1,
    imgSrc: Feature1,
    title: "100% Decentralized",
    description: "EtherForce is 100% decentralized via an immutable smart contract.",
  },
  {
    id: 2,
    imgSrc: Feature2,
    title: "Transparency",
    description:
      "All transactions are transparent on the blockchain with verifiable mechanics.",
  },
  {
    id: 3,
    imgSrc: Feature3,
    title: "Equal Rights",
    description: "EtherForce ensures equal rights with no centralized control.",
  },
  {
    id: 4,
    imgSrc: Feature3,
    title: "Equal Rights",
    description: "EtherForce ensures equal rights with no centralized control.",
  },
  {
    id: 5,
    imgSrc: Feature3,
    title: "Equal Rights",
    description: "EtherForce ensures equal rights with no centralized control.",
  },
  {
    id: 6,
    imgSrc: Feature3,
    title: "Equal Rights",
    description: "EtherForce ensures equal rights with no centralized control.",
  },
];

export default function Feature() {
  return (
    <div style={{ backgroundColor: "#0f0a13", padding: "4rem 0" }}>
      <div className="container text-light text-center">
        <h2 className="fw-bold mb-3">Features</h2>
        <h3 className="mb-5" style={{ fontWeight: "600" }}>
          Why Choose Us?
        </h3>
        <Carousel
          showThumbs={false} // Disable thumbnails
          showArrows={false} // Disable navigation arrows
          showIndicators={false} // Disable pagination dots
          showStatus={false} // Disable status bar
          infiniteLoop
          autoPlay
          interval={1500}
          swipeable
          emulateTouch
          centerMode
          centerSlidePercentage={33} // Show 3 items on large screens
        >
          {features.map((feature) => (
            <div key={feature.id} className="p-4">
              <div
                className="feature-card"
                style={{
                  background: "#1a1a2e",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  padding: "2rem",
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <div className="mb-3">
                  <img src={feature.imgSrc} alt={feature.title} style={{width:"60px"}} />
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <style>
        {`
          .feature-card:hover {
            transform: scale(1.05);
            transition: transform 0.3s ease;
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
          }
        `}
      </style>
    </div>
  );
}
