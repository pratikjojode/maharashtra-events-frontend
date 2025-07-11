import React from "react";
import "../../styles/Jobizza.css";
import jobizzaLogo from "../../assets/jobizza-logo.png";
import barterLogo from "../../assets/anytime-barter-logo.png";
import { FaArrowRight } from "react-icons/fa";

const Jobizza = () => {
  return (
    <section className="golden-section">
      <div className="premium-container">
        <h2 className="premium-title">
          <span className="gold-text">Prestige Partners</span>
          <span className="gold-line"></span>
        </h2>

        <div className="luxury-grid">
          {/* Jobizza Card */}
          <div className="gilded-card">
            <div className="gold-overlay"></div>
            <div className="medallion-frame">
              <img
                src={jobizzaLogo}
                alt="Jobizza"
                className="medallion-image"
              />
            </div>
            <div className="card-body">
              <h3 className="card-heading">
                Jobizza
                <span className="gold-underline"></span>
              </h3>
              <p className="card-text">
                Maharashtra's premier career architect, Jobizza orchestrates
                educational excellence through flagship initiatives like the
                Maharashtra Education Icon Awards, cultivating academic
                distinction across the region.
              </p>
              <a href="https://www.jobizza.com" className="gold-button">
                <span className="button-label">Explore Excellence</span>
                <FaArrowRight className="gold-arrow" />
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Jobizza;
