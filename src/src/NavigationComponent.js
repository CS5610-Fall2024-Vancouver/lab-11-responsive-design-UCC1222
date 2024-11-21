import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavigationComponent.css";

const NavigationComponent = ({ isAuthenticated, handleLogin, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Toggle menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navigation">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {(isMenuOpen || screenWidth > 576) && (
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/responsiveForm">Responsive Form</Link>
        </div>
      )}
      <div className="auth-buttons">
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default NavigationComponent;