import React from "react";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";
import "../../styles/Categories.css";
const Categories = () => {
  const categories = [
    {
      title: "Academic Excellence",
      description:
        "Recognizing exceptional leadership in institutional advancement",
      icon: <FaChalkboardTeacher className="category-icon" />,
    },
    {
      title: "Research Impact",
      description: "Honoring transformative teaching methodologies",
      icon: <FaSchool className="category-icon" />,
    },
    {
      title: "Education Innovation",
      description: "Celebrating groundbreaking educational approaches",
      icon: <FaLightbulb className="category-icon" />,
    },
    {
      title: "Career Success",
      description: "Acknowledging excellence in placements & alumni growth",
      icon: <FaHandsHelping className="category-icon" />,
    },
  ];

  return (
    <section className="awards-categories-section" id="categories">
      <div className="premium-container">
        <div className="luxury-header">
          <div className="ornamental-line left"></div>
          <h2 className="prestige-title">
            <span className="title-accent">Excellence</span>
            <span>Categories</span>
          </h2>
          <div className="ornamental-line right"></div>
        </div>

        <p className="elegant-subtitle">
          Celebrating Visionary Achievements in Maharashtra's Education
          Landscape
        </p>

        <div className="diamond-grid">
          {categories.map((category, index) => (
            <div className="crystal-card" key={index}>
              <div className="shimmer-effect"></div>
              <div className="icon-container">
                <div className="glow-orb"></div>
                {category.icon}
              </div>
              <div className="card-content">
                <h3 className="category-title">{category.title}</h3>
                <div className="title-underline"></div>
                <p className="category-description">{category.description}</p>
              </div>
              <div className="hover-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
