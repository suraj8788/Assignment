import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../../Assets/Logo/light sweep.gif";


export default function Footer() {
  return (
    <footer className="text-light py-4" style={{backgroundColor:" #0f0a13"}}>
      <div className="container text-center">
        <div className="mb-4">
        <img src={Logo} height="80px" style={{ borderRadius: "50%" }} alt="Logo" />
        </div>
        <div className="mb-4">
          <a
            href="#"
            className="text-light mx-2"
            aria-label="Telegram"
            style={{ fontSize: "1.7rem" }}
          >
            <i className="fab fa-telegram" style={{color:"#5b4ae0"}}></i>
          </a>
          <a
            href="#"
            className="text-light mx-2"
            aria-label="Facebook"
            style={{ fontSize: "1.7rem" }}
          >
            <i className="fab fa-facebook" style={{color:"#5b4ae0"}}></i>
          </a>
          <a
            href="#"
            className="text-light mx-2"
            aria-label="Instagram"
            style={{ fontSize: "1.7rem" }}
          >
            <i className="fab fa-instagram" style={{color:"#5b4ae0"}}></i>
          </a>
          <a
            href="#"
            className="text-light mx-2"
            aria-label="YouTube"
            style={{ fontSize: "1.7rem" }}
          >
            <i className="fab fa-youtube" style={{color:"#5b4ae0"}}></i>
          </a>
          <a
            href="#"
            className="text-light mx-2"
            aria-label="Twitter"
            style={{ fontSize: "1.7rem" }}
          >
            <i className="fab fa-twitter" style={{color:"#5b4ae0"}}></i>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mb-3">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#home" className="text-light text-decoration-none">
                Home
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#about" className="text-light text-decoration-none">
                About
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#features" className="text-light text-decoration-none">
                Features
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#how-it-works" className="text-light text-decoration-none">
                How it works
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#roadmap" className="text-light text-decoration-none">
                Roadmap
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#faqs" className="text-light text-decoration-none">
                FAQs
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p>&copy; {new Date().getFullYear()} Delicious Recipes. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="btn btn-purple position-fixed bottom-0 end-0 m-4 rounded-circle"
        style={{
          backgroundColor: "#6c63ff",
          color: "#fff",
          fontSize: "1.2rem",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
}