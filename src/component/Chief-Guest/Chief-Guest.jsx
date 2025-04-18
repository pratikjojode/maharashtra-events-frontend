import React from "react";
import "../../styles/Chief-Guest.css";
import chiefGuestImage1 from "../../assets/chief-guest.jpg";
import chiefGuestImage2 from "../../assets/chief-guest-2.jpg";
import chiefGuestImage3 from "../../assets/chief-guest-3.jpg"; 
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
  }
 
];

const ChiefGuest = () => {
  return (
    <section className="chief-guest">
      <div className="container">
        <div className="section-header">
          <h2>Our Chief Guests</h2>
          <div className="divider"></div>
        </div>
        <div className="guest-container">
          {guests.map((guest, index) => (
            <div className="guest-card" key={index}>
              <div className="image-container">
                <img src={guest.image} alt={guest.name} />
                <div className="overlay">
                  <div>
                    <p className="description">{guest.description}</p>
                    <div className="linkedin-section">
                      {guest.linkedin && (
                        <a
                          href={guest.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-icon"
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
                          className="linkedin-icon"
                          aria-label="X Profile"
                        >
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="guest-info">
                <h3>
                  <strong>{guest.name}</strong>
                </h3>
                <p className="guest-title">{guest.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChiefGuest;