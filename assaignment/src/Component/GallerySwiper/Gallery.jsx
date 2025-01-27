import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';
import bgImage from "../../Assets/Logo/bg.jpg";

const Gallery = () => (
  <div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "84vh",
    }}
  >
    <div className="container text-center text-light d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="mb-5">
        <span className="text-wrap w-100">
          EtherForce Contract Address -
          <a href="#" className="custom-link">
            0x0715264b6daecff9fa2ea2e579919e4a8016f5fc
          </a>

        </span>
        <span className="ms-2">
          <i class="fa fa-clone" aria-hidden="true"></i>
        </span>
      </div>
      <h1 className="display-4 fw-bold text-uppercase">
        Level Up Your <span className="" style={{color:"#746bff"}}>Financial Future</span>
      </h1>
      <p className="lead">One World, One Force, Etherforce</p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn gradient-btn">Brand Library</button>
        <button className="btn gradient-btn">Branding Box</button>
      </div>

    </div>
  </div>
);

export default Gallery;
