import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>🏆 Maharashtra Awards Admin Panel</h3>
        <FaTimes className="close-icon" onClick={closeSidebar} />
      </div>
      <nav>
        <NavLink to="/admin/dashboard" onClick={closeSidebar}>
          <FaTachometerAlt /> Dashboard
        </NavLink>

        {/* Logout as a button */}
        <button className="logout-btn" onClick={logout}>
          <FaSignOutAlt /> Logout Admin
        </button>
      </nav>
      <div className="sidebar-footer">
        <p>Maharashtra.gov.in</p>
      </div>
    </div>
  );
};

export default Sidebar;
