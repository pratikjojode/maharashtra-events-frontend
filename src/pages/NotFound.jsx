import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaEnvelope } from "react-icons/fa";
import "../styles/NotFound.css";
import jobizzaLogo from "../assets/logo.png";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-header">
            <img src={jobizzaLogo} alt="Jobizza Logo" className="error-logo" />
            <h1>Maharashtra Education Icon Awards</h1>
            <h3 className="jobizza-text">Presented by Jobizza</h3>
          </div>

          <div className="error-main">
            <div className="error-code">
              <span>4</span>
              <div className="error-icon">
                <FaSearch className="search-icon" />
              </div>
              <span>4</span>
            </div>
            <h2>Page Not Found</h2>
            <p className="error-message">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="error-actions">
              <Link to="/" className="error-btn">
                <FaHome className="btn-icon" />
                Return Home
              </Link>
              <a
                href="mailto:contact@educationawards.com"
                className="error-btn"
              >
                <FaEnvelope className="btn-icon" />
                Contact Support
              </a>
            </div>
          </div>

          <div className="error-footer">
            <p>
              © {new Date().getFullYear()} Maharashtra Education Icon Awards |
              Powered by Jobizza
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
