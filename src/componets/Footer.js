import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import Link from react-router-dom for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/MenuPage">Menu</a>
          <a href="/AboutPage">About</a>
          <a href="/ContactPage">Contact</a>
          <a className="ai" href="https://al-ai.netlify.app/">ALai</a>
        </div>
        <div className="footer-contact">
          <p>123 Drieziek 4, Orange Farm, Johannesburg South, 1841</p>
          <p>Email: info.learniq@gmail.com</p>
          <p>Phone: 0634414863</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p>&copy; 2024 @BakeOne | created by  <a
            href="https://learniq.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Future 
          </a> using react.</p>
      </div>
    </footer>
  );
};

export default Footer;
