import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkedAlt,
  FaInstagram,
} from "react-icons/fa";
import "../../styles/EventInfo.css";

const EventInfo = () => {
  // UPDATED EVENT DATE: 28th June 2025, 6:30 PM
  const eventDate = new Date("2025-06-28T18:30:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [animate, setAnimate] = useState(false);

  // Event details
  const eventName = "Event at Sunny's World";
  const eventLocation = "Sunny's World, Pune";
  const eventDescription = "Join us for an amazing event!";
  const eventLatLng = "18.5204,73.8567";
  const instagramPage = "https://www.instagram.com/yourusername";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeUnit = (value) => (value < 10 ? `0${value}` : value);

  const calculateProgress = () => {
    const totalDuration = eventDate - new Date("2025-01-01T00:00:00");
    const elapsed = new Date() - new Date("2025-01-01T00:00:00");
    return Math.min((elapsed / totalDuration) * 100, 100);
  };

  // Sharing functions remain exactly the same
  const shareOnFacebook = () =>
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}&quote=${encodeURIComponent(eventDescription)}`,
      "_blank",
      "width=600,height=400"
    );

  const shareOnTwitter = () =>
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        eventName
      )}&url=${encodeURIComponent(window.location.href)}`,
      "_blank",
      "width=600,height=400"
    );

  const shareOnWhatsapp = () =>
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        eventName + " - " + eventDescription + " " + window.location.href
      )}`,
      "_blank"
    );

  const openInstagram = () => window.open(instagramPage, "_blank");
  const openInMaps = () =>
    window.open(`https://www.google.com/maps?q=${eventLatLng}`, "_blank");

  const addToCalendar = () => {
    const startDate = eventDate.toISOString().replace(/-|:|\.\d+/g, "");
    const endDate = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventName
      )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
        eventDescription
      )}&location=${encodeURIComponent(eventLocation)}`,
      "_blank"
    );
  };

  return (
    <section className="event-info">
      <div className="container">
        <div className="info-box">
          <div className="countdown-container">
            <h3 className="countdown-title">Event Countdown</h3>

            <div className="info-container">
              <div className="info-item date-item">
                <FaCalendarAlt className="info-icon" />
                <div className="info-content">
                  <h3>Date & Time</h3>
                  <p>28 June 2025, 6:30 PM</p>
                </div>
              </div>
            </div>

            <button className="add-to-calendar-btn" onClick={addToCalendar}>
              ADD TO CALENDAR
            </button>

            <div className="countdown-timer">
              <div className="time-unit">
                <div className={`time-card ${animate ? "flip" : ""}`}>
                  <span className="time-value">
                    {formatTimeUnit(timeLeft.days || 0)}
                  </span>
                </div>
                <span className="time-label">Days</span>
              </div>
              <div className="time-separator">:</div>

              <div className="time-unit">
                <div className={`time-card ${animate ? "flip" : ""}`}>
                  <span className="time-value">
                    {formatTimeUnit(timeLeft.hours || 0)}
                  </span>
                </div>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-separator">:</div>

              <div className="time-unit">
                <div className={`time-card ${animate ? "flip" : ""}`}>
                  <span className="time-value">
                    {formatTimeUnit(timeLeft.minutes || 0)}
                  </span>
                </div>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-separator">:</div>

              <div className="time-unit">
                <div className={`time-card ${animate ? "flip" : ""}`}>
                  <span className="time-value">
                    {formatTimeUnit(timeLeft.seconds || 0)}
                  </span>
                </div>
                <span className="time-label">Seconds</span>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
              <p className="progress-text">
                TIME IS RUNNING OUT! RESERVE YOUR SPOT NOW
              </p>
            </div>
          </div>

          <div className="info-container location-container">
            <div className="info-item location-item">
              <FaMapMarkerAlt className="info-icon" />
              <div className="info-content">
                <h3>Location</h3>
                <p>Sunny's World, Pune</p>
                <button className="view-map-btn" onClick={openInMaps}>
                  <FaMapMarkedAlt className="btn-icon" /> View on Map
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="share-event">
          <p>Excited? Share this event with friends!</p>
          <div className="share-buttons">
            <button className="share-btn facebook" onClick={shareOnFacebook}>
              <FaFacebookF className="share-icon" /> Facebook
            </button>
            <button className="share-btn twitter" onClick={shareOnTwitter}>
              <FaTwitter className="share-icon" /> Twitter
            </button>
            <button className="share-btn whatsapp" onClick={shareOnWhatsapp}>
              <FaWhatsapp className="share-icon" /> WhatsApp
            </button>
            <button className="share-btn instagram" onClick={openInstagram}>
              <FaInstagram className="share-icon" /> Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
