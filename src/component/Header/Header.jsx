import React from "react";
import logo from "../../assets/logo2.png";
import Navbar from "./Navbar";
import "../../styles/Header.css";
const Header = () => {
  return <div>
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Maharashtra Education Icon Awards" className="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  </div>;
};

export default Header;
