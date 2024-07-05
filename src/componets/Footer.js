import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Navbar } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa"; // Example icons, you can replace with your own
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

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
      {/* <Navbar.Brand className="ft" as={Link} to="/">
        <FaUtensils />
        Sweet Dreams Bakery SDB
      </Navbar.Brand> */}
    </footer>
  );
};

export default Footer;