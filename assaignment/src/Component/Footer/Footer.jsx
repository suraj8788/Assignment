// Component/Footer.js
import React from 'react';
import './Footer.css'; // Optional: Create a CSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Delicious Recipes. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;
