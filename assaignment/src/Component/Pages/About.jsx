import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imgbg from "../../Assets/Logo/img-bg1.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // You can adjust the duration for animations
    }, []);

    return (
        <div style={{ backgroundColor: "#0f0a13", padding: "3rem 0" }}>
            <section className="why-choose-us active">
                <div className="container">
                    <div className="mb-5">
                        <h1 className="text-white text-center" data-aos="fade-up">About Us</h1>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="finix-text">
                                <img 
                                    src="https://raw.githubusercontent.com/farazc60/Project-Images/main/why_choose_us.png" 
                                    alt="" 
                                    style={{ width: "90%" }} 
                                    data-aos="zoom-in"
                                />
                                <div className="ct-btn" data-aos="fade-up">
                                    <a href="#" class=""><i className="fas fa-play-circle"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-left">
                            <h6 className="text-white">Transparent process</h6>
                            <h2 className="text-white">Why people choose us</h2>
                            <p className="mb-4 text-white">
                                EtherForce is a thriving blockchain-powered community empowering individuals
                                to navigate the decentralized landscape. We foster a collaborative environment
                                where users can learn, connect, and grow through education and knowledge sharing.
                            </p>
                            <h2 className="fw-bold mb-4 text-white" data-aos="fade-up">Our Vision</h2>
                            <p className="text-white" data-aos="fade-up">
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
