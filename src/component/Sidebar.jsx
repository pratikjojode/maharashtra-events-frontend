import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { FiXCircle } from "react-icons/fi";
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
        <h3>🏆 Maharashtra Education Awards</h3>
        <FiXCircle className="close-icon" onClick={closeSidebar} />
      </div>
      <nav>
        <NavLink to="/admin/dashboard" onClick={closeSidebar}>
          <HiOutlineViewGrid className="icon" /> Dashboard
        </NavLink>
        <NavLink to="/" onClick={closeSidebar}>
          <HiOutlineHome className="icon" /> Home
        </NavLink>
        <button className="logout-btn" onClick={logout}>
          <HiOutlineLogout className="icon" /> Logout Admin
        </button>
      </nav>
      <div className="sidebar-footer">
        <p>© Maharashtra.gov.in</p>
      </div>
    </div>
  );
};

export default Sidebar;
