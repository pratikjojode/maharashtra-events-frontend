// components/Overview/Overview.jsx
import React from 'react';
import '../../styles/Overview.css/';

const Overview = () => {
  return (
    <section className="overview">
      <div className="container">
        <div className="section-header">
          <h2>About The Event</h2>
          <div className="divider"></div>
        </div>
        <div className="overview-content">
          <p>
            The Maharashtra Education Icon Awards is a prestigious ceremony that recognizes and honors 
            outstanding contributions to the field of education across Maharashtra. This annual event 
            brings together educators, administrators, policymakers, and innovators who have made 
            significant impacts in shaping the future of education in our state.
          </p>
          <p>
            With categories spanning various educational sectors, the awards celebrate excellence in 
            teaching, administration, innovation, and community service. The ceremony provides a 
            platform to showcase best practices, inspire others in the field, and foster collaboration 
            among educational institutions across Maharashtra.
          </p>
          <p>
            Join us as we celebrate the visionaries who are transforming education and creating 
            opportunities for students throughout our state. The event will feature inspiring talks, 
            networking opportunities, and the much-anticipated awards ceremony.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;