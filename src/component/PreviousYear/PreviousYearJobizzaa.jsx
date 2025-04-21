import React from "react";
import { Card, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../styles/PreviousYearJobizzaa.css";

// Import images from assets folder
import jobizzaa2024 from "../../assets/IMG-20250412-WA0006.jpg";
import jobizzaa2023 from "../../assets/IMG-20250412-WA0005.jpg";
import jobizzaa2022 from "../../assets/IMG-20250412-WA0004.jpg";
import jobizzaa2021 from "../../assets/IMG-20250412-WA0003.jpg";

const PreviousYearJobizzaa = () => {
  const carouselRef = React.useRef();

  // Updated data with imported images
  const previousYearImages = [
    {
      id: 1,
      year: "2024",
      title: "Jobizzaa 2024",
      imageUrl: jobizzaa2024,
      description: "Highlights from our 2024 event",
    },
    {
      id: 2,
      year: "2023",
      title: "Jobizzaa 2023",
      imageUrl: jobizzaa2023,
      description: "Memorable moments from 2023",
    },
    {
      id: 3,
      year: "2022",
      title: "Jobizzaa 2022",
      imageUrl: jobizzaa2022,
      description: "The best of 2022 event",
    },
    {
      id: 4,
      year: "2021",
      title: "Jobizzaa 2021",
      imageUrl: jobizzaa2021,
      description: "Looking back at 2021",
    },
  ];

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="previous-year-container">
      <h2 className="previous-year-title">Previous Year Highlights</h2>

      <div className="carousel-container">
        <Button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          icon={<LeftOutlined />}
        />

        <Carousel
          ref={carouselRef}
          dots={true}
          className="previous-year-carousel"
        >
          {previousYearImages.map((item) => (
            <div key={item.id}>
              <Card
                className="year-card"
                cover={
                  <img
                    alt={item.title}
                    src={item.imageUrl}
                    className="card-image"
                  />
                }
              >
                <div className="card-content">
                  <h3 className="card-year">{item.year}</h3>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-description">{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>

        <Button
          className="carousel-arrow carousel-arrow-right"
          onClick={nextSlide}
          icon={<RightOutlined />}
        />
      </div>
    </div>
  );
};

export default PreviousYearJobizzaa;
