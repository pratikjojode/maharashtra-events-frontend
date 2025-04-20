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
            <h2>Sponsorship Opportunities</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Partner with us to celebrate educational excellence in Maharashtra
            </p>
          </div>

          <div className="sponsorship-tiers">
            <h3 className="tier-header">Main Sponsorship Tiers</h3>
            <div className="sponsorship-table-container">
              <table className="sponsorship-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Logo</th>
                    <th>Video</th>
                    <th>Stall</th>
                    <th>Delegates</th>
                    <th>Standees</th>
                    <th>Souvenir Ad</th>
                    <th>Investment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="platinum-tier">
                    <td>Platinum</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>8</td>
                    <td>01</td>
                    <td>Full Page Color (inside)</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 20 Lakhs
                    </td>
                  </tr>
                  <tr className="gold-tier">
                    <td>Gold</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>6</td>
                    <td>01</td>
                    <td>Full Page Color (inside)</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 15 Lakhs
                    </td>
                  </tr>
                  <tr className="silver-tier">
                    <td>Silver</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>5</td>
                    <td>01</td>
                    <td>Full Page Color (inside)</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 10 Lakhs
                    </td>
                  </tr>
                  <tr>
                    <td>Academic Partner</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaTimes className="icon-times" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>4</td>
                    <td>01</td>
                    <td>Full Page B/W</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 7 Lakhs
                    </td>
                  </tr>
                  <tr>
                    <td>Kit Sponsor</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaTimes className="icon-times" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>0</td>
                    <td>01</td>
                    <td>Full Page B/W</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 5 Lakhs
                    </td>
                  </tr>
                  <tr>
                    <td>Associate Sponsor</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaTimes className="icon-times" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>0</td>
                    <td>01</td>
                    <td>Full Page B/W</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 3 Lakhs
                    </td>
                  </tr>
                  <tr className="dinner-tier">
                    <td>Dinner Sponsor</td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>
                      <FaTimes className="icon-times" />
                    </td>
                    <td>
                      <FaCheck className="icon-check" />
                    </td>
                    <td>0</td>
                    <td>01</td>
                    <td>Full Page Color (inside)</td>
                    <td className="investment-cell">
                      <FaRupeeSign className="rupee-icon" /> 20 Lakhs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="other-sponsorships">
              <h3>
                Other Sponsorships (<FaRupeeSign className="rupee-icon" /> 2
                Lakhs Each)
              </h3>
              <div className="sponsor-categories">
                <div className="category-card">
                  <div className="category-content">
                    <h4>Travel Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Transport Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Corporate Uniform Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Recruitment Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Facility & Housekeeping Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>F & B Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Media Partner Sponsorship</h4>
                  </div>
                </div>
                <div className="category-card">
                  <div className="category-content">
                    <h4>Stationery Partner Sponsorship</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="event-location">
            <div className="location-card">
              <FaMapMarkerAlt className="location-icon" />
              <h3>Event Location</h3>
              <p>Sunny's World, Pune</p>
            </div>
          </div>

          <div className="contact-actions">
            <button onClick={handleSponsorClick} className="btn btn-sponsor">
              Become a Sponsor
              {showContactOptions ? (
                <FaChevronUp className="chevron-icon" />
              ) : (
                <FaChevronDown className="chevron-icon" />
              )}
            </button>

            {showContactOptions && (
              <div className="contact-options">
                <div
                  className={`contact-tab ${
                    activeTab === "email" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("email")}
                >
                  <FaEnvelope className="contact-tab-icon" />
                  <span>Email</span>
                </div>
                <div
                  className={`contact-tab ${
                    activeTab === "phone" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("phone")}
                >
                  <FaPhone className="contact-tab-icon" />
                  <span>Phone</span>
                </div>

                <div className="contact-content">
                  {activeTab === "email" ? (
                    <div className="email-content">
                      <p>Send us an email for sponsorship inquiries</p>
                      <button
                        onClick={handleEmailClick}
                        className="btn btn-contact"
                      >
                        gaurav@jobizza.com
                      </button>
                    </div>
                  ) : (
                    <div className="phone-content">
                      <p>Call us directly for immediate assistance</p>
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
