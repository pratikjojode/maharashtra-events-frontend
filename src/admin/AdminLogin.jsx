import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiLogIn, FiAlertCircle } from "react-icons/fi";
import "../styles/AdminLogin.css";
import Navbar from "../component/Header/Navbar";
import Footer from "../component/Footer/Footer";
import { message } from "antd";

function AdminLogin({ setIsAdmin }) {
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      navigate("/admin/dashboard");
      message.success("Welcome to the admin dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      if (secret === import.meta.env.VITE_ADMIN_SECRET) {
        localStorage.setItem("isAdmin", "true");
        setIsAdmin(true);
        navigate("/admin/dashboard");
        message.success("Welcome to the admin dashboard");
      } else {
        setError("Invalid access credentials");
        setSecret("");
      }
    } finally {
      setIsLoading(false);
      message.error("Something  went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div className="admin-login-container">
        <div className="admin-login-card">
          <div className="brand-section">
            <h1 className="company-name">Maharashtra Education Awards</h1>
            <p className="company-tagline">Excellence in Education</p>
          </div>

          <div className="login-content">
            <div className="login-header">
              <FiLock className="login-icon" />
              <h2 className="login-title">Admin Portal</h2>
              <p className="login-subtitle">Enter your secure access key</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  placeholder="••••••••••••"
                  value={secret}
                  onChange={(e) => {
                    setSecret(e.target.value);
                    setError("");
                  }}
                  className="login-input"
                  autoComplete="off"
                />
              </div>

              {error && (
                <div className="error-message">
                  <FiAlertCircle className="error-icon" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !secret.trim()}
                className={`login-button ${isLoading ? "loading" : ""}`}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Authenticating...
                  </>
                ) : (
                  <>
                    <FiLogIn className="button-icon" />
                    Sign In
                  </>
                )}
              </button>
            </form>
          </div>

          <footer className="login-footer">
            <small>
              © {new Date().getFullYear()} Maharashtra Education Awards. All
              rights reserved.
            </small>
            <div className="security-badge">
              <span>🔒 Secure Admin Portal</span>
            </div>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLogin;
