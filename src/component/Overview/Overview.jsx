// components/Overview/Overview.jsx
import React from "react";
import "../../styles/Overview.css";
import { FaStar, FaTrophy } from "react-icons/fa";

const Overview = () => {
  return (
    <section className="overview-section">
      <div className="ornament-top"></div>
      <div className="overview-container">
        <div className="overview-header">
          <div className="header-decoration">
            <div className="decoration-line left"></div>
            <div className="decoration-star">
              <FaStar />
            </div>
            <div className="decoration-line right"></div>
          </div>
          <h2 className="overview-title">About The Event</h2>
          <div className="golden-separator">
            <div className="separator-circle left"></div>
            <div className="separator-line"></div>
            <div className="separator-circle right"></div>
          </div>
        </div>

        <div className="overview-content">
          <div className="trophy-decoration">
            <div className="trophy-icon">
              <FaTrophy />
            </div>
            <div className="trophy-glow"></div>
          </div>

          <div className="overview-text">
            <p className="text-paragraph first">
              The Maharashtra Education Icon Awards is a prestigious ceremony
              that recognizes and honors outstanding contributions to the field
              of education across Maharashtra. This annual event brings together
              educators, administrators, policymakers, and innovators who have
              made significant impacts in shaping the future of education in our
              state.
            </p>

            <p className="text-paragraph">
              With categories spanning various educational sectors, the awards
              celebrate excellence in teaching, administration, innovation, and
              community service. The ceremony provides a platform to showcase
              best practices, inspire others in the field, and foster
              collaboration among educational institutions across Maharashtra.
            </p>

            <p className="text-paragraph last">
              Join us as we celebrate the visionaries who are transforming
              education and creating opportunities for students throughout our
              state. The event will feature inspiring talks, networking
              opportunities, and the much-anticipated awards ceremony.
            </p>
          </div>
        </div>

        <div className="overview-highlight">
          <div className="highlight-item">
            <span className="highlight-number">5</span>
            <span className="highlight-text">Award Categories</span>
          </div>
          <div className="highlight-divider"></div>
          <div className="highlight-item">
            <span className="highlight-number">100+</span>
            <span className="highlight-text">Educational Institutions</span>
          </div>
          <div className="highlight-divider"></div>
          <div className="highlight-item">
            <span className="highlight-number">10+</span>
            <span className="highlight-text">Years of Excellence</span>
          </div>
        </div>
      </div>
      <div className="ornament-bottom"></div>
    </section>
  );
};

export default Overview;
