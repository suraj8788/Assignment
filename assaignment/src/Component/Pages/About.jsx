import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgbg from "../../Assets/Logo/img-bg1.png"

export default function About() {
    return (
        <div style={{ backgroundColor: "#0f0a13", padding: "3rem 0" }}>
            <div className="container text-light">
                <div className="row align-items-center"
                    style={{
                        background: "#1a1a2e",
                        borderRadius: "20px",
                    }}
                >
                    {/* Left Side - Image */}
                    <div className="col-md-6 text-center">
                        <div
                            className="p-3"
                        >
                            <img
                                src={imgbg}
                                alt="Ethereum Logo"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                    {/* Right Side - Content */}
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4">About Us</h2>
                        <p className="mb-4">
                            EtherForce is a thriving blockchain-powered community empowering individuals
                            to navigate the decentralized landscape. We foster a collaborative environment
                            where users can learn, connect, and grow through education and knowledge sharing.
                        </p>
                        <h2 className="fw-bold mb-4">Our Vision</h2>
                        <p>
                            To empower a global community of Web3 enthusiasts by fostering innovation, driving
                            the widespread adoption of decentralized technologies, and cultivating a space for
                            learning and growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

