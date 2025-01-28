import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgbg from "../../Assets/Logo/img-bg1.png"

export default function About() {
    return (
        <div style={{ backgroundColor: "#0f0a13", padding: "3rem 0" }}>
            <section class="why-choose-us active">
                <div class="container">
                    <div className="mb-5">
                        <h1 className="text-white text-center">About Us</h1>
                    </div>

                    <div class="row">
                        <div class="col-lg-6">
                            <div class="finix-text">

                                {/* <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                <img src="https://raw.githubusercontent.com/farazc60/Project-Images/main/why_choose_us.png" alt="" style={{width:"90%"}}/>
                                <div class="ct-btn">
                                    <a href="#" class=""><i class="fas fa-play-circle"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h6 className="text-white">Transparent process</h6>
                            <h2 className="text-white">Why people choose us</h2>
                            <p className="mb-4 text-white">
                                EtherForce is a thriving blockchain-powered community empowering individuals
                                to navigate the decentralized landscape. We foster a collaborative environment
                                where users can learn, connect, and grow through education and knowledge sharing.
                            </p>
                            <h2 className="fw-bold mb-4 text-white">Our Vision</h2>
                            <p className="text-white">
                                To empower a global community of Web3 enthusiasts by fostering innovation, driving
                                the widespread adoption of decentralized technologies, and cultivating a space for
                                learning and growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

