import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './header.css';
import Logo from "../../Assets/Logo/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to="/">
                    <img src={Logo} height="60px" style={{ borderRadius: "50%" }} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/notfound">Home</Link> {/* Update to Link */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notfound">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notfound">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/notfound">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;
