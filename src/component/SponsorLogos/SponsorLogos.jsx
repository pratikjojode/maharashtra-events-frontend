import React from "react";
import "../../styles/SponsorLogos.css";
import sponsor_1 from "../../assets/sponsor_1.jpg";
import sponsor_2 from "../../assets/sponor_2.jpg";
import sponsor_4 from "../../assets/sponsor_4.png";
import sponsor_5 from "../../assets/ajinkyadypu.jpg";
import sponsor_7 from "../../assets/aims.png";
import sponsor_8 from "../../assets/ESTD.png";
import AiLogo from "../../assets/Partner.jpg";
import sponsor_6 from "../../assets/image.png";
import sponsor_9 from "../../assets/jagdamba.jpg";
import sponsor_10 from "../../assets/berirboot.png";
import sponsor_11 from "../../assets/pune.png";

const SponsorLogos = () => {
  return (
    <>
      <h3 className="Sponsor-logo-title">Proud Sponsors</h3>
      {/* Title Partner Section */}
      <div className="Title-partner-container">
        <div className="Sponsor-logo-item">
          <img src={sponsor_11} alt="Sponsor 11" />
          <p>Title Partner</p>
        </div>
      </div>

      {/* Other Sponsors Section */}
      <div className="Sponsor-logo-container">
        <div className="Sponsor-logo-item">
          <img src={sponsor_1} alt="Sponsor 1" />
          <p>Community Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_2} alt="Sponsor 2" />
          <p>Academic Partner</p>
        </div>

        <div className="Sponsor-logo-item">
          <img src={sponsor_4} alt="Sponsor 4" />
          <p>Training Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_5} alt="Sponsor 5" />
          <p>Academic Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_6} alt="Sponsor 6" />
          <p>Academic Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_7} alt="Sponsor 7" />
          <p>Community Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_8} alt="Sponsor 7" />
          <p>Academic Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={AiLogo} alt="Sponsor 8" />
          <p>AI Partner</p>
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_10} alt="Sponsor 10" />
          <p>Technology Partner</p>
        </div>
        
        <div className="Sponsor-logo-item">
          <img src={sponsor_9} alt="Sponsor 9" />
          <p>Academic Partner</p>
        </div>
      </div>
    </>
  );
};

export default SponsorLogos;