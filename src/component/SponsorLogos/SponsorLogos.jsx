import React from "react";
import "../../styles/SponsorLogos.css";
import sponsor_1 from "../../assets/sponsor_1.jpg";
import sponsor_2 from "../../assets/sponor_2.jpg";
import sponsor_4 from "../../assets/sponsor_4.png";
import sponsor_5 from "../../assets/ajinkyadypu.jpg";
import sponsor_6 from "../../assets/dypatil.jpg";
import sponsor_7 from "../../assets/aims.png";
import sponsor_8 from "../../assets/ESTD.png";
import AiLogo from "../../assets/Partner.jpg";
import sponsor_9 from "../../assets/jagdamba.jpg";

const SponsorLogos = () => {
  return (
    <>
      <h3 className="Sponsor-logo-title">Proud Sponsors</h3>
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
      </div>
    </>
  );
};

export default SponsorLogos;
