// pages/SponsorsPage.jsx
import React, { useState } from "react";
import {
  FaRupeeSign,
  FaCheck,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaAward,
  FaStar,
  FaTable,
  FaUsers,
  FaVideo,
  FaImage,
  FaBookOpen,
} from "react-icons/fa";
import "../styles/SponsorsPage.css";
import Navbar from "../component/Header/Navbar.jsx";
import Footer from "../component/Footer/Footer.jsx";

const SponsorsPage = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  const handleSponsorClick = () => {
    setShowContactOptions(!showContactOptions);
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:gaurav@jobizza.com?subject=Sponsorship Inquiry - Maharashtra Education Icon Awards";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918888181889";
  };

  return (
    <>
      <Navbar />
      <div className="sponsors-page">
        <div className="container">
          <div className="section-header">
            <span className="pre-title">PARTNER WITH EXCELLENCE</span>
            <h2>Sponsorship Opportunities</h2>
            <div className="header-divider"></div>
            <p className="section-subtitle">
              Join us in celebrating educational excellence and gain
              unparalleled visibility among Maharashtra's elite educators and
              educational institutions
            </p>
          </div>

          <div className="sponsorship-cards">
            <h3 className="tier-header">
              <span className="tier-text">Premium</span> Sponsorship Tiers
            </h3>
            <div className="sponsorship-grid">
              {/* Platinum Tier */}
              <div className="sponsorship-card platinum-card">
                <div className="card-badge">Most Visibility</div>
                <div className="card-header">
                  <div className="tier-icon-wrapper">
                    <FaStar className="tier-icon" />
                  </div>
                  <h4>Platinum</h4>
                  <div className="investment">
                    <FaRupeeSign /> <span className="amount">20 Lakhs</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="benefits-list">
                    <li>
                      <span className="benefit-icon">
                        <FaImage />
                      </span>
                      Premium Logo Placement
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaVideo />
                      </span>
                      Exclusive Video Presentation
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaTable />
                      </span>
                      Premium Exhibition Stall
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaUsers />
                      </span>
                      8 VIP Delegates Access
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaImage />
                      </span>
                      01 Custom Branded Standee
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <button className="btn-view-details">View Details</button>
                </div>
              </div>

              {/* Gold Tier */}
              <div className="sponsorship-card gold-card">
                <div className="card-header">
                  <div className="tier-icon-wrapper">
                    <FaStar className="tier-icon" />
                  </div>
                  <h4>Gold</h4>
                  <div className="investment">
                    <FaRupeeSign /> <span className="amount">15 Lakhs</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="benefits-list">
                    <li>
                      <span className="benefit-icon">
                        <FaImage />
                      </span>
                      Featured Logo Placement
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaVideo />
                      </span>
                      Extended Video Placement
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaTable />
                      </span>
                      Featured Exhibition Stall
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaUsers />
                      </span>
                      6 Distinguished Delegates
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaImage />
                      </span>
                      01 Branded Standee
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <button className="btn-view-details">View Details</button>
                </div>
              </div>

              {/* Silver Tier */}
              <div className="sponsorship-card silver-card">
                <div className="card-header">
                  <div className="tier-icon-wrapper">
                    <FaStar className="tier-icon" />
                  </div>
                  <h4>Silver</h4>
                  <div className="investment">
                    <FaRupeeSign /> <span className="amount">10 Lakhs</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="benefits-list">
                    <li>
                      <span className="benefit-icon">
                        <FaImage />
                      </span>
                      Prominent Logo Placement
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaVideo />
                      </span>
                      Standard Video Placement
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaTable />
                      </span>
                      Standard Exhibition Stall
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaUsers />
                      </span>
                      5 Delegate Passes
                    </li>
                    <li>
                      <span className="benefit-icon">
                        <FaImage />
                      </span>
                      01 Branded Standee
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <button className="btn-view-details">View Details</button>
                </div>
              </div>

              {/* Academic Partner */}
              {/* <div className="sponsorship-card bronze-card">
                <div className="card-header">
                  <div className="tier-icon-wrapper">
                    <FaAward className="tier-icon" />
                  </div>
                  <h4>Academic Partner</h4>
                  <div className="investment">
                    <FaRupeeSign /> <span className="amount">7 Lakhs</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="benefits-list">
                    <li><span className="benefit-icon"><FaImage /></span>Strategic Logo Placement</li>
                    <li><span className="benefit-icon"><FaVideo /></span>No Video Showcase</li>
                    <li><span className="benefit-icon"><FaTable /></span>Dedicated Exhibition Stall</li>
                    <li><span className="benefit-icon"><FaUsers /></span>4 Delegate Passes</li>
                    <li><span className="benefit-icon"><FaImage /></span>01 Branded Standee</li>
                    
                  </ul>
                </div>
                <div className="card-footer">
                  <button className="btn-view-details">View Details</button>
                </div>
              </div> */}
            </div>

            <div className="additional-tiers">
              {/* <h3 className="tier-header">
                <span className="tier-text">Specialized</span> Sponsorships
              </h3> */}
              <div className="sponsorship-grid secondary-grid">
                {/* Kit Sponsor */}
                {/* <div className="sponsorship-card secondary-card">
                  <div className="card-header">
                    <h4>Kit Sponsor</h4>
                    <div className="investment">
                      <FaRupeeSign /> <span className="amount">5 Lakhs</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="benefits-list compact">
                      <li><FaCheck className="icon-check" /> Branded Logo Placement</li>
                      <li><FaTimes className="icon-times" /> No Video Showcase</li>
                      <li><FaCheck className="icon-check" /> Compact Exhibition Stall</li>
                      <li>No Delegate Passes</li>
                      <li>01 Branded Standee</li>
                      
                    </ul>
                  </div>
                </div> */}

                {/* Associate Sponsor */}
                {/* <div className="sponsorship-card secondary-card">
                  <div className="card-header">
                    <h4>Associate Sponsor</h4>
                    <div className="investment">
                      <FaRupeeSign /> <span className="amount">3 Lakhs</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="benefits-list compact">
                      <li>
                        <FaCheck className="icon-check" /> Standard Logo
                        Placement
                      </li>
                      <li>
                        <FaTimes className="icon-times" /> No Video Showcase
                      </li>
                      <li>
                        <FaCheck className="icon-check" /> Standard Exhibition
                        Stall
                      </li>
                      <li>No Delegate Passes</li>
                      <li>01 Branded Standee</li>
                    </ul>
                  </div>
                </div> */}

                {/* Dinner Sponsor */}
                {/* <div className="sponsorship-card secondary-card dinner-card">
                  <div className="card-header">
                    <h4>Dinner Sponsor</h4>
                    <div className="investment">
                      <FaRupeeSign /> <span className="amount">20 Lakhs</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="benefits-list compact">
                      <li>
                        <FaCheck className="icon-check" /> Exclusive Dinner
                        Branding
                      </li>
                      <li>
                        <FaTimes className="icon-times" /> No Video Showcase
                      </li>
                      <li>
                        <FaCheck className="icon-check" /> Premium Exhibition
                        Stall
                      </li>
                      <li>Special Dinner Recognition</li>
                      <li>01 Premium Standee</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="other-sponsorships">
              <h3>
                <span className="category-text">Category</span> Sponsorships
                <span className="price-tag">
                  <FaRupeeSign className="rupee-icon" /> 2 Lakhs Each
                </span>
              </h3>
              <div className="sponsor-categories">
                <div className="category-card">
                  <div className="category-content">
                    <h4>Travel Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Transport Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Corporate Uniform Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Recruitment Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Facility & Housekeeping Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>F & B Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Media Partner</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Stationery Partner</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="event-location">
            <div className="location-card">
              <div className="location-icon-wrapper">
                <FaMapMarkerAlt className="location-icon" />
              </div>
              <h3>Event Location</h3>
              <p>Sunny's World, Pune</p>
            </div>
          </div>

          <div className="contact-actions">
            <button onClick={handleSponsorClick} className="btn btn-sponsor">
              <span className="btn-text">Become a Sponsor Today</span>
              {showContactOptions ? (
                <FaChevronUp className="chevron-icon" />
              ) : (
                <FaChevronDown className="chevron-icon" />
              )}
            </button>

            {showContactOptions && (
              <div className="contact-options">
                <div className="contact-tabs">
                  <div
                    className={`contact-tab ${
                      activeTab === "email" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("email")}
                  >
                    <FaEnvelope className="contact-tab-icon" />
                    <span>Email Us</span>
                  </div>
                  <div
                    className={`contact-tab ${
                      activeTab === "phone" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("phone")}
                  >
                    <FaPhone className="contact-tab-icon" />
                    <span>Call Us</span>
                  </div>
                </div>

                <div className="contact-content">
                  {activeTab === "email" ? (
                    <div className="email-content">
                      <p>
                        Reach out to us with your sponsorship inquiries and
                        secure your spot today!
                      </p>
                      <button
                        onClick={handleEmailClick}
                        className="btn btn-contact"
                      >
                        gaurav@jobizza.com
                      </button>
                    </div>
                  ) : (
                    <div className="phone-content">
                      <p>
                        Speak directly with our sponsorship team for
                        personalized assistance
                      </p>
                      <button
                        onClick={handlePhoneClick}
                        className="btn btn-contact"
                      >
                        Call Now: 8888181889
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponsorsPage;
