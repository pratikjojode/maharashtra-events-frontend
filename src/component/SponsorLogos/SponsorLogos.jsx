import React from "react";
import "../../styles/SponsorLogos.css";
import sponsor_1 from "../../assets/sponsor_1.jpg";
import sponsor_2 from "../../assets/sponor_2.jpg";
import sponsor_4 from "../../assets/sponsor_4.png";
import sponsor_5 from "../../assets/sponsor_5.jpg";
import sponsor_6 from "../../assets/dypatil.jpg";
import sponsor_3 from "../../assets/anytimeSponsor.png";

const SponsorLogos = () => {
  return (
    <>
      <h3 className="Sponsor-logo-title">Proud Sponsors</h3>
      <div className="Sponsor-logo-container">
        <div className="Sponsor-logo-item">
          <img src={sponsor_1} alt="Sponsor 1" />
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_2} alt="Sponsor 2" />
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_3} alt="Sponsor 3" />
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_4} alt="Sponsor 4" />
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_5} alt="Sponsor 5" />
        </div>
        <div className="Sponsor-logo-item">
          <img src={sponsor_6} alt="Sponsor 6" />
        </div>
      </div>
    </>
  );
};

export default SponsorLogos;
