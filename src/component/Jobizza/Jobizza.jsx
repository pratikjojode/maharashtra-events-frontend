import React from 'react';
import '../../styles/Jobizza.css';
import jobizzaLogo from '../../assets/jobizza-logo.png';
import barterLogo from '../../assets/anytime-barter-logo.png'; // You'll need to add this image
import { FaArrowRight } from 'react-icons/fa';

const Jobizza = () => {
  return (
    <section className="jobizza">
      <div className="container">
        <div className="companies-grid">
          {/* Jobizza Card */}
          <div className="company-card">
            <div className="company-logo">
              <img src={jobizzaLogo} alt="Jobizza" />
            </div>
            <div className="company-info">
              <h2>About Jobizza</h2>
              <p>
                Jobizza is a leading education and career platform dedicated to connecting talent with 
                opportunities across Maharashtra. As the principal organizer of the Maharashtra Education 
                Icon Awards, Jobizza demonstrates its commitment to recognizing and fostering excellence 
                in education.
              </p>
              
              <a 
                href="https://www.jobizza.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="company-button"
              >
                Learn more <FaArrowRight className="button-icon" />
              </a>
            </div>
          </div>

          {/* Anytime Barter Card */}
          <div className="company-card">
            <div className="company-logo">
              <img src={barterLogo} alt="Anytime Barter" />
            </div>
            <div className="company-info">
              <h2>About Anytime Barter</h2>
              <p>
                Anytime Barter is a revolutionary platform that facilitates trade and exchange of services 
                without monetary transactions. As a co-organizer of the Maharashtra Education Icon Awards, 
                Anytime Barter brings innovative networking solutions to the education sector.
              </p>
             
              <a 
                href="https://anytimebarter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="company-button"
              >
                Learn more <FaArrowRight className="button-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobizza;