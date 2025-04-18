import React, { useEffect } from "react";
import "../styles/Insights.css";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";
// Image imports
import featuredImage from "../assets/IMG-20250412-WA0009.jpg";
import eventImg1 from "../assets/IMG-20250412-WA0003.jpg";
import eventImg2 from "../assets/IMG-20250412-WA0032.jpg";
import eventImg3 from "../assets/IMG-20250412-WA0031.jpg";
import eventImg4 from "../assets/IMG-20250412-WA0030.jpg";
import collage1 from "../assets/IMG-20250412-WA0029.jpg";
import collage2 from "../assets/IMG-20250412-WA0028.jpg";
import collage3 from "../assets/IMG-20250412-WA0027.jpg";
import collage4 from "../assets/IMG-20250412-WA0026.jpg";
import collage5 from "../assets/IMG-20250412-WA0025.jpg";
import collage6 from "../assets/IMG-20250412-WA0024.jpg";
import collage7 from "../assets/IMG-20250412-WA0023.jpg";
import collage8 from "../assets/IMG-20250412-WA0022.jpg";
import collage9 from "../assets/IMG-20250412-WA0021.jpg";
import collage10 from "../assets/IMG-20250412-WA0020.jpg";
import collage11 from "../assets/IMG-20250412-WA0019.jpg";
import collage12 from "../assets/IMG-20250412-WA0018.jpg";
import collage13 from "../assets/IMG-20250412-WA0017.jpg";
import collage14 from "../assets/IMG-20250412-WA0016.jpg";
import collage15 from "../assets/IMG-20250412-WA0015.jpg";
import collage16 from "../assets/IMG-20250412-WA0014.jpg";
import collage17 from "../assets/IMG-20250412-WA0013.jpg";
import collage18 from "../assets/IMG-20250412-WA0012.jpg";
import collage19 from "../assets/IMG-20250412-WA0011.jpg";
import collage20 from "../assets/IMG-20250412-WA0010.jpg";

const Insights = () => {
  const featuredEvent = {
    title: "Jobizza Career Conclave 2024",
    date: "March 22, 2024",
    location: "Pune, India",
    image: featuredImage,
    description:
      "Jobizza's flagship event brought together industry leaders, recruiters, and students for a day of learning, networking, and opportunity exploration. From live resume reviews to on-the-spot hiring, it was a game-changer for job seekers.",
  };

  const eventStats = [
    { value: 58, label: "Events Organized" },
    { value: "3,500+", label: "Attendees" },
    { value: "120+", label: "Companies Participated" },
    { value: "92%", label: "Placement Success Rate" },
  ];

  const testimonials = [
    {
      quote:
        "Jobizza helped me land my dream job in data science. Their event was full of learning sessions, real-time feedback, and networking. Truly career-transforming!",
      author: "Aisha N., Data Analyst at TCS",
    },
    {
      quote:
        "As a recruiter, I found Jobizza's events to be a goldmine for discovering passionate, job-ready candidates. We made several successful hires.",
      author: "Rohit S., HR Manager, Infosys",
    },
  ];

  const eventImages = [eventImg1, eventImg2, eventImg3, eventImg4];

  const photoCollageImages = [
    collage1,
    collage2,
    collage3,
    collage4,
    collage5,
    collage6,
    collage7,
    collage8,
    collage9,
    collage10,
    collage11,
    collage12,
    collage13,
    collage14,
    collage15,
    collage16,
    collage17,
    collage18,
    collage19,
    collage20,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const gridItems = document.querySelectorAll(".insights-page .grid-item");
      gridItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="insights-page">
        <header className="insights-header">
          <h1 className="page-title">Jobizza Event Insights</h1>
          <p className="page-subtitle">
            Empowering Careers, Connecting Opportunities: Our Journey of Impact
            and Innovation
          </p>
          <div className="header-decoration">
            <div className="tea-leaf"></div>
            <div className="tea-leaf"></div>
            <div className="tea-leaf"></div>
          </div>
        </header>

        <div className="mosaic-grid">
          {/* Featured Event Block */}
          <div className="grid-item featured-event">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="featured-image"
              loading="lazy"
            />
            <div className="event-overlay">
              <h2>{featuredEvent.title}</h2>
              <div className="event-meta">
                <span className="meta-item">
                  <i className="icon-calendar"></i> {featuredEvent.date}
                </span>
                <span className="meta-item">
                  <i className="icon-location"></i> {featuredEvent.location}
                </span>
              </div>
              <p className="event-description">{featuredEvent.description}</p>
              <button className="cta-button">
                View Highlights <i className="icon-arrow"></i>
              </button>
            </div>
          </div>

          {/* Stats Block */}
          <div className="grid-item stats-block">
            <div className="section-header">
              <i className="icon-stats"></i>
              <h3>By The Numbers</h3>
            </div>
            <div className="stats-grid">
              {eventStats.map((stat, index) => (
                <div key={`stat-${index}`} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="stats-footer">
              <p>Be part of the future of hiring with Jobizza</p>
            </div>
          </div>

          {/* Gallery Block */}
          <div className="grid-item gallery-block">
            <div className="section-header">
              <i className="icon-gallery"></i>
              <h3>Event Moments</h3>
            </div>
            <div className="image-grid">
              {eventImages.map((img, index) => (
                <div key={`gallery-img-${index}`} className="image-container">
                  <img
                    src={img}
                    alt={`Event moment ${index + 1}`}
                    loading="lazy"
                  />
                  <div className="image-hover">
                    <i className="icon-zoom"></i>
                  </div>
                </div>
              ))}
            </div>
            <button className="view-more">
              View Gallery <i className="icon-arrow"></i>
            </button>
          </div>

          {/* Testimonials Block */}
          <div className="grid-item testimonials-block">
            <div className="section-header">
              <i className="icon-quote"></i>
              <h3>Success Stories</h3>
            </div>
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="testimonial-item">
                  <div className="quote-mark">“</div>
                  <blockquote>{testimonial.quote}</blockquote>
                  <cite>- {testimonial.author}</cite>
                </div>
              ))}
            </div>
            <div className="testimonials-footer">
              <p>Share your success story with us</p>
            </div>
          </div>

          {/* Upcoming Events Block */}
          <div className="grid-item upcoming-events">
            <div className="section-header">
              <i className="icon-calendar"></i>
              <h3>Coming Soon</h3>
            </div>
            <div className="event-card">
              <div className="card-header">
                <h4>Jobizza Career Fair 2024</h4>
              </div>
              <div className="event-details">
                <p className="event-date">
                  <i className="icon-calendar"></i> June 15, 2024
                </p>
                <p className="event-description">
                  Join us for our biggest career fair yet with 100+ top
                  companies looking to hire tech talent across all experience
                  levels.
                </p>
              </div>
              <button className="register-button">
                Register Now <i className="icon-arrow"></i>
              </button>
            </div>
          </div>

          {/* Photo Collage Block */}
          <div className="grid-item photo-collage">
            <div className="section-header">
              <i className="icon-collage"></i>
              <h3>Our Event Journey</h3>
              <p className="section-subtitle">
                20 memorable moments from our events
              </p>
            </div>
            <div className="collage-grid">
              {photoCollageImages.map((img, index) => (
                <div key={`collage-${index}`} className="collage-item">
                  <img
                    src={img}
                    alt={`Event moment ${index + 1}`}
                    className="collage-image"
                    loading="lazy"
                  />
                  <div className="collage-overlay">
                    <span>View</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="collage-footer">
              <p>More exciting events coming soon...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Insights;
