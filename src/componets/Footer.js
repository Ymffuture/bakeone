import React from "react";
<<<<<<< HEAD
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
=======
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import Link from react-router-dom for navigation

>>>>>>> 85fb6f9514566774c59acb1c446fc8ca48f491f8
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/MenuPage">Menu</a>
          <a href="/AboutPage">About</a>
          <a href="/ContactPage">Contact</a>
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
      </div>
    </footer>
  );
};

export default Footer;
