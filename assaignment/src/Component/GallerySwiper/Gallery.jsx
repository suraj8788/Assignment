import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../Assets/Logo/bg.jpg";
import About from "../Pages/About";
import Feature from "../Pages/Feature";
import Map from "../Pages/Map"
import FAQ from "../Pages/FAQ";

const HomePage = () => {

  return (
    <>
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "85vh",
      }}
    >
      <div
        className="container text-center text-light d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "85vh" }}
      >
        <motion.h1
          className="display-4 fw-bold text-uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Discover the Future of <span style={{ color: "#746bff" }}>Innovation</span>
        </motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Uniting the World Through Decentralized Power
        </motion.p>

        <motion.div
          className="d-flex justify-content-center gap-3 mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <button className="btn gradient-btn">Explore Resources</button>
          <button className="btn gradient-btn">Join the Community</button>
        </motion.div>
      </div>
    </div>
    <About/>
    <Feature/>
    <Map/>
    <FAQ/>
    </>
  );
};

export default HomePage;

