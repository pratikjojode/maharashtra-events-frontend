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
import "../index.css";
import "../App.css";
import CurrentAwardees from "../component/CurrentYear/CurrentAwardees";
import PreviousYearJobizzaa from "../component/PreviousYear/PreviousYearJobizzaa";
import LastYearAwardees from "../component/LastYearAwards/LastYearAwardies";
import TimelineSection from "../component/TimeLineSection/TimeLineSection";
import SponsorLogos from "../component/SponsorLogos/SponsorLogos";
const Home = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const smoothScrollToTop = () => {
      const startPosition = window.scrollY;
      const duration = 1200;
      const startTime = performance.now();

      // Ultra-smooth easing function
      const easeOutSoft = (t) => {
        return 1 - Math.pow(1 - t, 3);
      };

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutSoft(progress);

        window.scrollTo({
          top: startPosition * (1 - easedProgress),
          behavior: "auto",
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
      {/* <EventInfo /> */}
      <TimelineSection />
      <CurrentAwardees />
      <PreviousYearJobizzaa />
      <SponsorLogos />
      <LastYearAwardees />
      <Overview />
      <ChiefGuest />
      <Sponsors />
      <Categories />
      <Jobizza />
      <Footer />
    </div>
  );
};

export default Home;
