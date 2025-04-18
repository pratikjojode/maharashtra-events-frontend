import React, { useEffect, useRef } from "react";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import EventInfo from "../component/EventInfo/EventInfo";
import Overview from "../component/Overview/Overview";
import ChiefGuest from "../component/Chief-Guest/Chief-Guest";
import Sponsors from "../component/Sponsors/Sponsors";
import Categories from "../component/Categories/Categories";
import Jobizza from "../component/Jobizza/Jobizza";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/Navbar";
import FAQ from "../component/FAQ/FAQ";
import "../index.css";
import "../App.css";
const Home = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const smoothScrollToTop = () => {
      const startPosition = window.scrollY;
      const duration = 1200; // Increased duration for smoother effect (milliseconds)
      const startTime = performance.now();

      // Ultra-smooth easing function
      const easeOutSoft = (t) => {
        return 1 - Math.pow(1 - t, 3); // Cubic easing for smoother deceleration
      };

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutSoft(progress);

        window.scrollTo({
          top: startPosition * (1 - easedProgress),
          behavior: "auto", // We're handling the animation manually
        });

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateScroll);
        }
      };

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    // Only scroll if not already at top
    if (window.scrollY > 0) {
      smoothScrollToTop();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <EventInfo />
      <Overview />
      <ChiefGuest />
      <Sponsors />
      <Categories />
      <Jobizza />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
