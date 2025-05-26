import React, { useState, useEffect } from "react";
import "../../styles/LastYearAwardies.css";

import GaneshRao from "../../assets/Gr1.jpg";
import SandeepPachpande from "../../assets/SP1.jpg";
import RavikumarChitnis from "../../assets/RavikumarChitnis.jpg";
import JayeshKatkar from "../../assets/JayeshKatkar.jpg";
import SantoshBorde from "../../assets/SantoshBorde.jpg";
import AnshulSharma from "../../assets/MrAnshulSharma.jpg";
import GirishDesai from "../../assets/GirishDesai.jpg";
import ShitalWatile from "../../assets/ShitalWatile.jpg";
import EknathKhedkar from "../../assets/EknathKhedkar.jpg";
import RajveerBhardwaj from "../../assets/RajveerBhardwaj.jpg";
import AtulkumarJain from "../../assets/Atul_Kumar2.png";
import MangeshKarad from "../../assets/Mangeshkarad.jpg";
import AnitaDiwakar from "../../assets/AnitaDiwarkar2.jpg";
import BharatAgarwal from "../../assets/BharatAgarwal.jpg";
import RamakrishnanRaman from "../../assets/RamakrishnanRaman1.jpg";
import SurajSharma from "../../assets/SurajSharma.jpg";
import ChetanChaudhari from "../../assets/Chetan-Chaudhari.png";
import VirajBarge from "../../assets/VirajBarge.jpg";
import ArjunKale from "../../assets/ArjunKale.jpg";
import TusharBadhe from "../../assets/Tusharbadhe.jpg";
import TusharRamSangole from "../../assets/TusharRamSanghole.jpg";
import FaisalKhan from "../../assets/FaisalKhan.jpg";
import ShitalKumarRawandale from "../../assets/ShitalKumarRawandale.jpg";
import TauheedMujawar from "../../assets/TouheedMujawar.jpg";
import AshishJawake from "../../assets/AshishJawake.jpg";
import DyaneshwarRao from "../../assets/DyaneshwarRao.jpg";
import NileshUke from "../../assets/NileshUke.jpg";
import Zahir from "../../assets/Zahir.jpg";
import AshutoshMisal from "../../assets/AshutoshMisal.jpg";
import SudharshanSutar from "../../assets/SS.jpg";
import PramodDastoorkar from "../../assets/Pramod.jpg";
import SanjeevWagh from "../../assets/SanjeevWagh.jpg";
import MaheshGudar from "../../assets/MaheshGoudar.jpg";
import MinakshiTyagi from "../../assets/MinakshiTyagi.jpg";
import ShivajiraoKadam from "../../assets/ShivajiraoKadam.png";

const LastYearAwardees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const awardees = [
    { name: "Dr Ganesh Rao", designation: "PBS", image: GaneshRao },
    {
      name: "Dr.Sandeep Pachpande",
      designation: "IBMR",
      image: SandeepPachpande,
    },
    {
      name: "Dr. Ravikumar Chitnis",
      designation: "MIT",
      image: RavikumarChitnis,
    },
    { name: "Dr. Jayesh Katkar", designation: "PCU", image: JayeshKatkar },
    { name: "Dr. Santosh Borde", designation: "DY Patil", image: SantoshBorde },
    { name: "Mr.Anshul Sharma", designation: "MIT", image: AnshulSharma },
    { name: "Dr. Girish Desai", designation: "PCET", image: GirishDesai },
    { name: "Dr.Shital Watile", designation: "IBMR", image: ShitalWatile },
    {
      name: "Dr. Eknath Khedkar",
      designation: "DR. DY Patil School of management Ambi",
      image: EknathKhedkar,
    },
    {
      name: "Dr. Rajveer Bhardwaj",
      designation: "PCU",
      image: RajveerBhardwaj,
    },
    {
      name: "Dr. Atulkumar Jain",
      designation: "DY patil",
      image: AtulkumarJain,
    },
    { name: "Dr. Mangesh Karad", designation: "MITADT", image: MangeshKarad },
    { name: "Dr.Anita Diwakar", designation: "VJTI", image: AnitaDiwakar },
    { name: "Dr. Bharat Agarwal", designation: "VIT", image: BharatAgarwal },
    {
      name: "Dr. Ramakrishnan Raman",
      designation: "SIBM",
      image: RamakrishnanRaman,
    },
    { name: "Dr. Suraj Sharma", designation: "RIMS", image: SurajSharma },
    {
      name: "Dr. Chetan Chaudhari",
      designation: "DY patil",
      image: ChetanChaudhari,
    },
    {
      name: "Prof. Viraj Barge",
      designation: "Zeal education society",
      image: VirajBarge,
    },
    { name: "Mr. Arjun Kale", designation: "MIT", image: ArjunKale },
    {
      name: "Mr. Tushar Badhe",
      designation: "Mauli College",
      image: TusharBadhe,
    },
    {
      name: "Dr. Tushar Ram Sangole",
      designation: "JSPM",
      image: TusharRamSangole,
    },
    { name: "Mr.Faisal Khan", designation: "DY Patil", image: FaisalKhan },
    {
      name: "Dr. Shital Kumar Rawandale",
      designation: "MITADT",
      image: ShitalKumarRawandale,
    },
    {
      name: "Prof. Touheed Mujawar",
      designation: "CCDPs",
      image: TauheedMujawar,
    },
    { name: "Mr. Ashish Jawake", designation: "DYP", image: AshishJawake },
    { name: "Mr. Dynaneshwar Rao", designation: "MIT", image: DyaneshwarRao },
    { name: "Dr. Nilesh Uke", designation: "KJEI", image: NileshUke },
    {
      name: "Dr. Zahir Alam",
      designation: "Thakur college of engineering",
      image: Zahir,
    },
    { name: "Dr. Ashutosh Misal", designation: "DYP", image: AshutoshMisal },
    { name: "Mr.Sudarshan Sutar", designation: "DYP", image: SudharshanSutar },
    {
      name: "Prof. Pramod Dastoorkar",
      designation: "MIT",
      image: PramodDastoorkar,
    },
    { name: "Dr. Sanjeev Wagh", designation: "KBPCOE", image: SanjeevWagh },
    { name: "Dr.Mahesh Goudar", designation: "DY Patil", image: MaheshGudar },
    { name: "Ms. Minakshi Tyagi", designation: "DYP", image: MinakshiTyagi },
    { name: "Dr.Shivajirao Kadam", designation: "MIT", image: ShivajiraoKadam },
  ];

  const awardeesPerPage = 15;
  const totalPages = Math.ceil(awardees.length / awardeesPerPage);

  const currentAwardees = awardees.slice(
    currentPage * awardeesPerPage,
    (currentPage + 1) * awardeesPerPage
  );

  const nextPage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
  };

  const prevPage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <section className="last-year-awardees-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Past Awardees</h2>
        </div>

        <div className="awardees-subtitle">Maharashtra Education Icons</div>

        <div className={`awardees-grid ${isAnimating ? "animating" : ""}`}>
          {currentAwardees.map((awardee, index) => (
            <div
              className={`awardee-card ${
                hoveredCard === index ? "hovered" : ""
              }`}
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="awardee-image-container">
                <img
                  src={awardee.image}
                  alt={awardee.name}
                  className="awardee-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="awardee-info">
                <h3 className="awardee-name">{awardee.name}</h3>
                <p className="awardee-designation">{awardee.designation}</p>
                <div className="underline-animation"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="page-indicator">
          {currentPage + 1} / {totalPages}
        </div>
      </div>

      <div className="navigation-controls">
        <button
          className="nav-button prev"
          onClick={prevPage}
          disabled={isAnimating}
          aria-label="Previous page"
        >
          <span className="arrow">&#8249;</span>
        </button>
        <button
          className="nav-button next"
          onClick={nextPage}
          disabled={isAnimating}
          aria-label="Next page"
        >
          <span className="arrow">&#8250;</span>
        </button>
      </div>

      {/* Background effects */}
      <div className="background-effects">
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="bg-glow bg-glow-3"></div>
      </div>
    </section>
  );
};

export default LastYearAwardees;
