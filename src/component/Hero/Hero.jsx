import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "../../styles/Hero.css";
import heroBg1 from "../../assets/Picture1.jpg";
import heroBg2 from "../../assets/Picture3.jpg";
import heroBg3 from "../../assets/Picture7.jpg";
import heroBg4 from "../../assets/Picture10.jpg";
import heroBg5 from "../../assets/Picture9.jpg";
import heroBg6 from "../../assets/Education Panelists Flyer_Final.png";
import heroBg7 from "../../assets/DSC04978.jpg";
import heroBg8 from "../../assets/DSC05002.jpg";
import heroBg9 from "../../assets/DSC05024.jpg";
import heroBg10 from "../../assets/DSC05032.jpg";
import heroBg11 from "../../assets/DSC05034.jpg";
import heroBg12 from "../../assets/DSC05043.jpg";
import heroBg13 from "../../assets/DSC05051.jpg";
import heroBg14 from "../../assets/DSC05053.jpg";
import heroBg15 from "../../assets/DSC05067.jpg";
import heroBg16 from "../../assets/DSC07419.jpg";
import heroBg17 from "../../assets/DSC07484.jpg";
import heroBg18 from "../../assets/_DSC0671.jpg";

import jobizzaLogo from "../../assets/jobizza-logo.png";

import { FaAward } from "react-icons/fa";

const Hero = () => {
  const heroImages = [
    heroBg1,
    heroBg2,
    heroBg3,
    heroBg4,
    heroBg5,
    heroBg6,
    heroBg7,
    heroBg8,
    heroBg9,
    heroBg10,
    heroBg11,
    heroBg12,
    heroBg13,
    heroBg14,
    heroBg15,
    heroBg16,
    heroBg17,
    heroBg18,
  ];
  const [isFlipped, setIsFlipped] = useState(false);
  const [initialFlipDone, setInitialFlipDone] = useState(false);

  // Auto-flip the card after component mounts with a 2-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
      setInitialFlipDone(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    // Only allow manual flipping after initial auto-flip
    if (initialFlipDone) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    // Only allow manual flipping after initial auto-flip
    if (initialFlipDone) {
      setIsFlipped(false);
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <Carousel
          autoplay
          autoplaySpeed={3000}
          effect="fade"
          dots
          arrows
          className="antd-carousel"
        >
          {heroImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="bg-image"
              />
            </div>
          ))}
        </Carousel>
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <div className="presented-by">
          <span className="presented-text">Presented by</span>
          <div className="sponsor-logos">
            <img src={jobizzaLogo} alt="Jobizza" className="presenter-logo" />
           
          </div>
        </div>

        <div className="award-title">
          <FaAward className="award-icon gold-accent" />
          <h1>
            <span className="title-line-1">Maharashtra Education</span>
            <span className="title-line-2 gold-accent">Icon Awards</span>
          </h1>
        </div>

        <p className="hero-subtitle">Celebrating Excellence in Education</p>

        <div className="flip-card-container">
          <div
            className={`flip-card ${isFlipped ? "flipped" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-content">
                  <FaAward className="card-icon gold-accent" />
                  <h3 className="gold-accent">Our Motive</h3>
                  <p>Hover to discover our mission</p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="card-content">
                  <h3 className="gold-accent">Excellence in Education</h3>
                  <p>
                    The Maharashtra Education Icon Awards aims to recognize and
                    celebrate outstanding contributions to education across the
                    state, fostering innovation, research excellence, and
                    academic leadership that shapes our future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <a
            href="https://forms.gle/3bEdJeGGKobD3DLr5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Nominate Now
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTSoYtTleWyn4DjXruwa7PkHxJiz98onKhEAI7Ff5BnDBTiQ/viewform"
            className="btn btn-secondary"
          >
            Join as Attendee
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
