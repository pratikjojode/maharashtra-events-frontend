import React, { useState } from "react";
import "../styles/AdminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className="header-title">Maharashtra Awards Admin Panel</div>
        <div className="admin-header-right"></div>
      </header>

      {/* Overlay for small screen when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Main Content */}
      <main className={`admin-main ${isSidebarOpen ? "blurred" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
