import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../../Assets/Logo/light sweep.gif";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // AOS initialization
  }, []);

  return (
    <>
      <footer className="text-light py-5" style={{ backgroundColor: "#0f0a13" }}>
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Company Section */}
            <div className="col-md-3 mb-4" data-aos="fade-up">
              <h5 className="fw-bold">COMPANY NAME</h5>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            {/* Products Section */}
            <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="100">
              <h5 className="fw-bold">PRODUCTS</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">MDBootstrap</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">MDWordPress</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">BrandFlow</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">Bootstrap</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">Angular</a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
              <h5 className="fw-bold">USEFUL LINKS</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">Your Account</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">Shipping Rates</a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">Help</a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
              <h5 className="fw-bold">CONTACT</h5>
              <p className="mb-1">
                <i className="fas fa-home me-2"></i> New York, NY 10012, US
              </p>
              <p className="mb-1">
                <i className="fas fa-envelope me-2"></i> info@gmail.com
              </p>
              <p className="mb-1">
                <i className="fas fa-phone me-2"></i> +01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-2"></i> +01 234 567 89
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <img src={Logo} height="80px" style={{ borderRadius: "50%" }} alt="Logo" />
            <p className="mt-3">&copy; {new Date().getFullYear()} Copyright: MDBootstrap.com</p>
            <div>
              <a href="#" className="text-light mx-2" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-light mx-2" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light mx-2" aria-label="Google">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-light mx-2" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
