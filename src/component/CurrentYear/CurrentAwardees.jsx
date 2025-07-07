import React from "react";
import { Card, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../styles/CurrentAwardees.css"; // New CSS file for current awardees

// Import images for current awardees
import Prof_Sunita_Venkat_Awards from "../../assets/Prof.Sunita.png";
import Prof_Anil_Kashyap_Awards from "../../assets/Prof.Anil.png";
import Prof_Yashodhan_Soman_Awards from "../../assets/Prof.YashodhanSoman.png";
import Ramkrishna_Raman_Awards from "../../assets/RamkrishnaRaman.png";
import Shital_pavankumar_Sharma_award from "../../assets/Shital.png";
import Siddharth_Jabade_Awards from "../../assets/Siddharth.png";
import Somnath_Patil_Awards from "../../assets/Somnath.png";
import Vikrant_Sukhtankar_Awards from "../../assets/Vikrant.png";
import ZEAL_College_of_Engineering_awards from "../../assets/ZEAL.png";
import Best_team_award_training_and_development from "../../assets/Best.png";
import Dr_ashish_lambat_award from "../../assets/Dr_ashish.png";
import Dr_Chetan_Chaudhari_Awards from "../../assets/DrChetan.png";
import Dr_Nidhi_Amit_Medhekar_Awards from "../../assets/DrNidhi.png";
import Dr_Shittal_Watile_Awards from "../../assets/DrShittalWatile.png";
import Dr_Sunil_Brijmohan_Kapoor_award from "../../assets/DrSunil1.png";
import Dr_Sushil_Raut from "../../assets/DrSushil.png";
import Dr_Girish_Desai_Awards from "../../assets/DrGirish.png";
import Dr_Kamaljeet_Kaur_Awards from "../../assets/DrKamaljeet.png";
import Dr_Sunil_Bhirud_Awards from "../../assets/DrSunil.png";
import DY_Patil_Bussiness_School_award from "../../assets/DY_Patil.png";
import Ganesh_Kakandikar_Awards from "../../assets/GaneshKakandikar.png";
import Ganesh_Shirsath_award from "../../assets/Ganesh.png";
import Geniehe_ai_awards from "../../assets/Geniehire.png";
import Harshada_Vinod_Jadhav from "../../assets/Harshada.png";
import Jitendra_Sharma_award from "../../assets/Jitendra.png";
import Madhuri_Khambete_Awards from "../../assets/Madhuri.png";
import Mr_Sanjeev_Bajaj_Awards from "../../assets/MrSanjeev.png";
import Niraj_Vyawahare_Awards from "../../assets/Niraj.png";

const CurrentAwardees = () => {
  const carouselRef = React.useRef();

  const currentAwardeeData = [
    {
      id: 1,
      name: "Prof. Sunita Venkat",
      award: " Remarkable achievements in academic leadership",
      imageUrl: Prof_Sunita_Venkat_Awards,
      description:
        "Recognized for outstanding contributions to academic research.",
    },
    {
      id: 2,
      name: "Prof. Anil Kashyap",
      award: " Academic leadership award construction management",
      imageUrl: Prof_Anil_Kashyap_Awards,
      description:
        "For exceptional contributions to construction management education.",
    },
    {
      id: 3,
      name: "Prof. Yashodhan Soman",
      award: " Groundbreaking collaborations between Academy and industry",
      imageUrl: Prof_Yashodhan_Soman_Awards,
      description: "Honoring years of dedicated service and leadership.",
    },
    {
      id: 4,
      name: "Ramkrishna Raman",
      award: " Academic leadership award organizational excellence",
      imageUrl: Ramkrishna_Raman_Awards,
      description: "Acknowledged for promising new research in the field.",
    },
    {
      id: 5,
      name: "Shital Pavankumar Sharma",
      award: " Leadership in education award",
      imageUrl: Shital_pavankumar_Sharma_award,
      description: "For exceptional commitment to student success.",
    },
    {
      id: 6,
      name: "Siddharth Jabade",
      award: " Academic leadership award innovation",
      imageUrl: Siddharth_Jabade_Awards,
      description: "Recognizing inspiring new talent in education.",
    },
    {
      id: 7,
      name: "Somnath Patil",
      award: " Academic leadership award rising star",
      imageUrl: Somnath_Patil_Awards,
      description:
        "For exceptional contributions to academic leadership and innovation.",
    },
    {
      id: 8,
      name: "Vikrant Sukhtankar",
      award: "Excellence in Online Learning",
      imageUrl: Vikrant_Sukhtankar_Awards,
      description: "Pioneering effective online educational strategies.",
    },
    {
      id: 9,
      name: "ZEAL College of Engineering",
      award: " Rising beacon in education award",
      imageUrl: ZEAL_College_of_Engineering_awards,
      description: "For outstanding contributions to engineering education.",
    },
    {
      id: 10,
      name: "Best Team Award Training and Development",
      award: " Career connect and corporate relation award",
      imageUrl: Best_team_award_training_and_development,
      description: "For exceptional performance in training and development.",
    },
    {
      id: 11,
      name: "Dr. Ashish Lambat",
      award: " The research excellence award",
      imageUrl: Dr_ashish_lambat_award,
      description:
        "Recognizing outstanding contributions to academic research.",
    },
    {
      id: 12,
      name: "Dr. Chetan Chaudhari",
      award: " Academic director of the Year award",
      imageUrl: Dr_Chetan_Chaudhari_Awards,
      description:
        "Honoring extensive and impactful service to the institution.",
    },
    {
      id: 13,
      name: "Dr. Nidhi Amit Medhekar",
      award: " Excellence in educational research award",
      imageUrl: Dr_Nidhi_Amit_Medhekar_Awards,
      description: "Recognizing research with significant societal impact.",
    },
    {
      id: 14,
      name: "Dr. Shittal Watile",
      award: " Best academic institute in the Vidharbha region",
      imageUrl: Dr_Shittal_Watile_Awards,
      description: "quality education and research in the Vidharbha region.",
    },
    {
      id: 15,
      name: "Dr. Sunil Brijmohan Kapoor",
      award: " Academic visionary award",
      imageUrl: Dr_Sunil_Brijmohan_Kapoor_award,
      description:
        "For visionary contributions to the future of education and academic leadership.",
    },
    {
      id: 16,
      name: "Dr. Sushil Raut",
      award: " Young achiever award in Academy and research",
      imageUrl: Dr_Sushil_Raut,
      description:
        "For outstanding achievements in academic research at a young age.",
    },
    {
      id: 17,
      name: "Dr. Girish Desai",
      award: " Academic leadership award visionary",
      imageUrl: Dr_Girish_Desai_Awards,
      description:
        "For visionary leadership in academic innovation and excellence.",
    },
    {
      id: 18,
      name: "Dr. Kamaljeet Kaur",
      award: " Stellar achievements that illuminate academia",
      imageUrl: Dr_Kamaljeet_Kaur_Awards,
      description:
        "For exceptional contributions that have significantly advanced academic excellence.",
    },
    {
      id: 19,
      name: "Dr. Sunil Bhirud",
      award: " Academic leadership award governance",
      imageUrl: Dr_Sunil_Bhirud_Awards,
      description:
        "For exceptional leadership in academic governance and administration.",
    },
    {
      id: 20,
      name: "DY Patil Bussiness School",
      award: " Young visionary institution award",
      imageUrl: DY_Patil_Bussiness_School_award,
      description:
        "For innovative approaches in business education and student development.",
    },
    {
      id: 21,
      name: "Ganesh Kakandikar",
      award: " Award for shaping futures",
      imageUrl: Ganesh_Kakandikar_Awards,
      description:
        "For exceptional contributions to shaping the future of education.",
    },
    {
      id: 22,
      name: "Ganesh Shirsath",
      award: " Abroad Educational Visionary award",
      imageUrl: Ganesh_Shirsath_award,
      description:
        "For visionary contributions to international education and student mobility.",
    },
    {
      id: 23,
      name: "Geniehe.ai",
      award: " NextGen recruitment innovation award",
      imageUrl: Geniehe_ai_awards,
      description: "For pioneering advancements in recruitment technology.",
    },
    {
      id: 24,
      name: "Harshada Vinod Jadhav",
      award: "Educational Visionary award",
      imageUrl: Harshada_Vinod_Jadhav,
      description: "For visionary contributions to the future of education.",
    },
    {
      id: 25,
      name: "Jitendra Sharma",
      award: "Legacy Leader in Global Academia Award",
      imageUrl: Jitendra_Sharma_award,
      description:
        "For significant contributions to global academic leadership and collaboration.",
    },
    {
      id: 26,
      name: "Madhuri Khambete",
      award: "Exemplary Leadership in Engineering Education",
      imageUrl: Madhuri_Khambete_Awards,
      description:
        "For outstanding leadership in engineering education and research.",
    },
    {
      id: 27,
      name: "Mr. Sanjeev Bajaj",
      award: "Academic Leadership Award Security Management",
      imageUrl: Mr_Sanjeev_Bajaj_Awards,
      description:
        "Recognizing leadership in security management education and research.",
    },
    {
      id: 28,
      name: "Niraj Vyawahare",
      award: "Academic Leadership Award Pharmacy",
      imageUrl: Niraj_Vyawahare_Awards,
      description: "Recognizing leadership in pharmacy education and research.",
    },
  ];

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="current-awardees-container">
      <h2 className="current-awardees-title">Current Awardees</h2>

      <div className="carousel-container">
        <Button
          className="carousel-arrow carousel-arrow-left"
          onClick={prevSlide}
          icon={<LeftOutlined />}
        />

        <Carousel
          ref={carouselRef}
          dots={true}
          className="current-awardees-carousel"
        >
          {currentAwardeeData.map((item) => (
            <div key={item.id}>
              <Card
                className="current-awardee-card" // Changed class name
                cover={
                  <div className="current-awardee-image-container">
                    {" "}
                    {/* Changed class name */}
                    <img
                      alt={item.name}
                      src={item.imageUrl}
                      className="current-awardee-card-image" // Changed class name
                    />
                  </div>
                }
              >
                <div className="current-awardee-card-content">
                  {" "}
                  {/* Changed class name */}
                  <h3 className="current-awardee-card-name">
                    {item.name}
                  </h3>{" "}
                  {/* Changed class name */}
                  <h4 className="current-awardee-card-award-title">
                    {item.award}
                  </h4>{" "}
                  {/* Changed class name */}
                  <p className="current-awardee-card-description">
                    {item.description}
                  </p>{" "}
                  {/* Changed class name */}
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

export default CurrentAwardees;
