import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/tdubey27/shopping_app"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="footer-icon" />
          GitHub
        </a>
        <a
          href="http://linkedin.com/in/tanyadubey27"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin className="footer-icon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;