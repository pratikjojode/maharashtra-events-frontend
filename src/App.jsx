import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/HomePage";
import SponsorsPage from "./pages/SponsorsPage";
import Speakers from "./pages/Speakers"; // Adjust path if needed

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import "./index.css";
import NotFound from "./pages/NotFound";
import AdminAttendance from "./admin/AdminAttendance";

const SmoothScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const smoothScroll = () => {
      const startPosition = window.scrollY;
      const duration = 650;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
        const easedProgress = easeOutQuart(progress);

        window.scrollTo(0, startPosition * (1 - easedProgress));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateScroll);
        }
      };

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    const timer = setTimeout(() => {
      if (window.scrollY > 0) {
        smoothScroll();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [pathname]);

  return children || null;
};

function App() {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  return (
    <Router>
      <SmoothScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/speakers" element={<Speakers />} />

          <Route
            path="/admin-login"
            element={<AdminLogin setIsAdmin={setIsAdmin} />}
          />

          {isAdmin ? (
            <Route path="/admin/dashboard" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="attendancedashboard" element={<AdminAttendance />} />
            </Route>
          ) : (
            <Route
              path="/admin/dashboard/*"
              element={<Navigate to="/admin-login" />}
            />
          )}
        </Routes>
      </SmoothScrollToTop>
    </Router>
  );
}

export default App;
