import React, { useState } from 'react';
import '../styles/Speakers.css';
import paragImage from '../assets/chief-guest.jpg';
import chandrakantImage from '../assets/chief-guest-2.jpg';
import { FaLinkedin, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";

const speakers = [
  {
    name: 'Dr. Parag Kalkar',
    title: 'Pro Vice Chancellor, Savitribai Phule Pune University',
    image: paragImage,
    description: 'Dr. Parag Kalkar is a distinguished academic leader serving as the Pro Vice Chancellor at Savitribai Phule Pune University. With over 25 years of experience in higher education, he has been instrumental in driving academic excellence and innovation across the university.',
    bio: 'Dr. Kalkar holds a Ph.D. in Management Sciences and has published numerous research papers in prestigious international journals. Prior to his current role, he served as the Dean of the Faculty of Management at SPPU. His vision for education combines traditional academic rigor with modern technological advancements.',
    achievements: [
      'Recipient of the Maharashtra Academic Excellence Award (2021)',
      'Led the university\'s digital transformation initiative',
      'Established international collaborations with 15+ global universities'
    ],
    quote: 'Education is not just about degrees; it\'s about empowering students to become thoughtful leaders who can solve real-world problems.',
    linkedin: 'https://linkedin.com/in/example1',
    socialType: 'linkedin'
  },
  {
    name: 'Shri Chandrakant Patil',
    title: 'Minister of Higher and Technical Education, Maharashtra',
    image: chandrakantImage,
    description: 'Shri Chandrakant Patil serves as the Minister of Higher and Technical Education for Maharashtra. A visionary leader, he has been at the forefront of revolutionizing the educational landscape of the state through policy reforms and innovative initiatives.',
    bio: 'With a strong background in public administration and policy making, Minister Patil has dedicated his career to improving educational standards across Maharashtra. He has been pivotal in implementing the National Education Policy 2020 within the state, ensuring that institutions adapt to the changing educational paradigm.',
    achievements: [
      'Launched the Maharashtra Skill Development Program',
      'Established 50+ new educational institutions in rural areas',
      'Pioneered the Digital Education Initiative across state universities'
    ],
    quote: 'Our aim is to make Maharashtra a global hub for quality education that produces not just graduates, but future-ready professionals and innovators.',
    xTwitter: 'https://twitter.com/Cristiano',
    socialType: 'x'
  }
];

const Speakers = () => {
  const [activeProfile, setActiveProfile] = useState(null);

  const toggleProfile = (index) => {
    setActiveProfile(activeProfile === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div className="speakers-page">
      <section className="speakers-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Distinguished Speakers</h2>
            <p className="section-subtitle">Meet the visionaries shaping the future of education in Maharashtra</p>
          </div>
          
          <div className="speakers-grid">
            {speakers.map((speaker, index) => (
              <div className="speaker-card" key={index}>
                <div className="speaker-img">
                  <img src={speaker.image} alt={speaker.name} />
                  <div className="speaker-overlay">
                    {speaker.socialType === 'linkedin' ? (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin-link" 
                        aria-label={`LinkedIn of ${speaker.name}`}
                      >
                        <FaLinkedin />
                      </a>
                    ) : (
                      <a
                        href={speaker.xTwitter}
                        target="_blank"
                        rel="noreferrer"
                        className="Twitter-link" // using same class for styling consistency
                        aria-label={`X (Twitter) of ${speaker.name}`}
                      >
                        <FaXTwitter />
                      </a>
                    )}
                  </div>
                </div>
                <div className="speaker-info">
                  <h3>{speaker.name}</h3>
                  <p className="title">{speaker.title}</p>
                  <p className="desc">{speaker.description}</p>
                  
                  <button 
                    className="read-more-btn" 
                    onClick={() => toggleProfile(index)}
                    aria-expanded={activeProfile === index}
                  >
                    {activeProfile === index ? 'Show Less' : 'Read More'} 
                    <FaArrowRight className={activeProfile === index ? 'arrow-rotated' : ''} />
                  </button>
                  
                  {activeProfile === index && (
                    <div className="speaker-expanded">
                      <div className="speaker-bio">
                        <h4>Biography</h4>
                        <p>{speaker.bio}</p>
                      </div>
                      
                      <div className="speaker-achievements">
                        <h4>Key Achievements</h4>
                        <ul>
                          {speaker.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="speaker-quote">
                        <FaQuoteLeft className="quote-icon" />
                        <p>{speaker.quote}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="conference-info">
            <h3>About MyMaharashtra Educational Awards</h3>
            <p>
              The MyMaharashtra Educational Awards recognize excellence in education across the state.
              Our distinguished speakers bring valuable insights and vision to this prestigious event,
              celebrating innovation and achievement in Maharashtra's educational landscape.
            </p>
            <p>
              Join us to hear from these thought leaders and be part of the conversation
              that will shape the future of education in our state.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Speakers;