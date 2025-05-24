import React from "react";
import "../../styles/TimeLineSection.css";

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <div className="section-header">
          <h2>Important Dates</h2>
          <div className="divider">
            <span className="dot"></span>
            <span className="line"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon">📝</span>
            </div>
            <div className="timeline-content">
              <h3>Nomination Deadline</h3>
              <div className="date">20 May 2025</div>
              <p>
                Last day to submit your nominations for the Maharashtra
                Education Icon Awards
              </p>
              <a
                href="https://forms.gle/3bEdJeGGKobD3DLr5"
                className="timeline-button"
                target="_blank"
              >
                Nominate Now
              </a>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-icon">
              <span className="icon">⚖️</span>
            </div>
            <div className="timeline-content">
              <h3>Judgment Process Begins</h3>
              <div className="date">25 May 2025</div>
              <p>Our panel of experts will begin evaluating all nominations</p>
            </div>
          </div>
        </div>

        <div className="timeline-note">
          <div className="note-content">
            <h4>Don't Miss Your Chance!</h4>
            <p>
              Submit your nominations before the deadline to ensure
              consideration for the prestigious Maharashtra Education Icon
              Awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
