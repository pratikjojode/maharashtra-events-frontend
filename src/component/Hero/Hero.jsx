import React from "react";
import { Carousel } from "antd";
import "../../styles/Hero.css";
import heroBg1 from "../../assets/hero-bgg3.jpg";
import heroBg2 from "../../assets/hero-bgg2.jpg";
import jobizzaLogo from "../../assets/jobizza-logo.png";
import anytimeBarterLogo from "../../assets/anytime-barter-logo.png";
import { FaAward } from "react-icons/fa";

const Hero = () => {
  const heroImages = [heroBg1, heroBg2];

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
            <img
              src={anytimeBarterLogo}
              alt="Anytime Barter"
              className="presenter-logo"
            />
          </div>
        </div>

        <div className="award-title">
          <FaAward className="award-icon" />
          <h1>
            <span className="title-line-1">Maharashtra Education</span>
            <span className="title-line-2">Icon Awards</span>
          </h1>
        </div>

        <p className="hero-subtitle">Celebrating Excellence in Education</p>

        <div className="hero-buttons">
          <a
            href="https://forms.gle/3bEdJeGGKobD3DLr5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Nominate Now
          </a>
          <a href="#categories" className="btn btn-secondary">
            View Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
