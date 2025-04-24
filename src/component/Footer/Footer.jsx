import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Maharashtra Education Icon Awards</h3>
            <p>Celebrating excellence in education across Maharashtra</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#categories">Award Categories</a>
              </li>
              <li>
                <a href="/sponsors">Sponsors</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              <a
                href="https://maps.google.com/?q=Sunny's World, Pune"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="footer-icon" /> Sunny's World, Pune
              </a>
            </p>
            <p>
              <a href="tel:+918888181889">
                <FaPhone className="footer-icon" /> +91 8888181889
              </a>
            </p>
            <p>
              <a href="mailto:gaurav@jobizza.com">
                <FaEnvelope className="footer-icon" /> gaurav@jobizza.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Maharashtra Education Icon Awards.
            All rights reserved.
          </p>
          <div className="social-links">
            <a
             href="https://www.facebook.com/share/158xqLpSVY/"
             target="_blank"
             rel="noopener noreferrer"
            >
              <FaFacebook />
              </a>
            <a
             href="https://www.instagram.com/jobizzaa?igsh=MTA0NmhjbzF1aHNkbg=="
             target="_blank"
             rel="noopener noreferrer"
            >
              <FaInstagram />
              </a>
            <a
              href="https://www.linkedin.com/company/jobizza-justice-with-your-innovations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@gauravsharmajobizza2433">
              <FaYoutube/>
            </a>
            <Link to="/admin-login" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
