import React from "react";
import "../../styles/Chief-Guest.css";
import chiefGuestImage1 from "../../assets/chief-guest.jpg";
import chiefGuestImage2 from "../../assets/chief-guest-2.jpg";
import chiefGuestImage3 from "../../assets/chief-guest-3.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

const guests = [
  {
    name: "Chandrakant Patil",
    title: "Higher and technical education minister of Maharashtra state",
    image: chiefGuestImage2,
    description: `Chandrakant Bacchu Patil is an Indian politician and the Higher and technical education minister of Maharashtra state in the present Government of Maharashtra.`,
    xTwitter: "https://x.com/ChDadaPatil",
  },
  {
    name: "Harshwardhan Patil",
    title: "Former member of Maharashtra Assembly",
    image: chiefGuestImage3,
    description: `Harshwardhan Patil is a respected political figure who served as a member of the Maharashtra Legislative Assembly. He has contributed significantly to the development of the state through various initiatives.`,
    xTwitter: "https://x.com/Harshvardhanji",
  },
  {
    name: "Dr. Parag Kalkar",
    title: "Pro Vice Chancellor at Savitribai Phule Pune University",
    image: chiefGuestImage1,
    description: `Dr. Parag Kalkar is Director of Sinhgad Institute of Management... and the role educators play in shaping the nation's destiny.`,
    linkedin: "https://www.linkedin.com/in/dr-parag-kalkar-1b80b924/",
  },
];

const ChiefGuest = () => {
  return (
    <section className="chief-guest-section">
      <div className="marquee-banner">
        <div className="marquee-content">
          <span>Distinguished Speakers</span>
          <span className="marquee-divider">•</span>
          <span>Visionary Leaders</span>
          <span className="marquee-divider">•</span>
          <span>Education Champions</span>
          <span className="marquee-divider">•</span>
        </div>
      </div>

      <div className="chief-guest-container">
        <div className="section-heading">
          <div className="heading-decoration left"></div>
          <h2 className="guest-heading">Our Chief Guests</h2>
          <div className="heading-decoration right"></div>
        </div>

        <div className="guests-showcase">
          {guests.map((guest, index) => (
            <div className="guest-profile" key={index}>
              <div className="profile-frame">
                <div className="golden-accent top-left"></div>
                <div className="golden-accent top-right"></div>
                <div className="golden-accent bottom-left"></div>
                <div className="golden-accent bottom-right"></div>

                <div className="profile-image-container">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="profile-image"
                  />
                  <div className="image-overlay">
                    <div className="quote-icon">
                      <FaQuoteLeft />
                    </div>
                    <p className="guest-description">{guest.description}</p>

                    <div className="social-links">
                      {guest.linkedin && (
                        <a
                          href={guest.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link linkedin"
                          aria-label="LinkedIn Profile"
                        >
                          <FaLinkedin />
                        </a>
                      )}
                      {guest.xTwitter && (
                        <a
                          href={guest.xTwitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link twitter"
                          aria-label="X Profile"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="profile-details">
                  <h3 className="guest-name">{guest.name}</h3>
                  <div className="title-separator"></div>
                  <p className="guest-title">{guest.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;
