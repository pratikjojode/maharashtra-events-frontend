// components/Sponsors/Sponsors.jsx
import React from "react";
import "../../styles/Sponsors.css";
import { Link } from "react-router-dom";
import { FaCrown, FaHandshake } from "react-icons/fa";

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-background-pattern"></div>
      <div className="sponsors-container">
        <div className="sponsors-header">
          <div className="crown-icon">
            <FaCrown />
          </div>
          <h2 className="sponsors-title">
            <span className="title-small">Partner With Excellence</span>
            Become a Sponsor
          </h2>
          <div className="golden-divider">
            <div className="divider-diamond left"></div>
            <div className="divider-line"></div>
            <div className="divider-diamond right"></div>
          </div>
          <p className="sponsors-subtitle">
            Join us in celebrating educational excellence and gain visibility
            among Maharashtra's top educators.
          </p>
        </div>

        <div className="sponsors-content">
          <div className="sponsors-card">
            <div className="card-border-glow"></div>
            <div className="card-inner">
              <div className="handshake-icon">
                <FaHandshake />
              </div>
              <p className="sponsors-description">
                Sponsoring the Maharashtra Education Icon Awards provides your
                organization with a unique opportunity to align with educational
                excellence and connect with key decision-makers in Maharashtra's
                education sector.
              </p>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-dot"></span> Brand visibility among
                  education leaders
                </li>
                <li>
                  <span className="benefit-dot"></span> Networking with academic
                  innovators
                </li>
                <li>
                  <span className="benefit-dot"></span> Recognition as an
                  education supporter
                </li>
                <li>
                  <span className="benefit-dot"></span> Access to exclusive
                  award ceremonies
                </li>
              </ul>
              <Link to="/sponsors" className="golden-button">
                <span className="button-text">
                  Learn About Sponsorship Benefits
                </span>
                <span className="button-shine"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
