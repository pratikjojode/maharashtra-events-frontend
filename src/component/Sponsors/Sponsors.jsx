// components/Sponsors/Sponsors.jsx
import React from "react";
import "../../styles/Sponsors.css";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <section className="sponsors home-sponsor-section">
      <div className="container home-sponsor-container">
        <div className="section-header home-sponsor-header">
          <h2 className="home-sponsor-title">Become a Sponsor</h2>
          <div className="divider home-sponsor-divider"></div>
          <p className="section-subtitle home-sponsor-subtitle">
            Join us in celebrating educational excellence and gain visibility
            among Maharashtra's top educators.
          </p>
        </div>
        <div className="sponsor-cta home-sponsor-cta">
          <p className="home-sponsor-description">
            Sponsoring the Maharashtra Education Icon Awards provides your
            organization with a unique opportunity to align with educational
            excellence and connect with key decision-makers in Maharashtra's
            education sector.
          </p>
          <Link to="/sponsors" className="btn btn-sponsor home-sponsor-btn">
            Learn About Sponsorship Benefits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
