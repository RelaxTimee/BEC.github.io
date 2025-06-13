import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">BEC</a>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a className="navbar-link" href="/about">About</a>
          <a className="navbar-link" href="/speakers">Speakers</a>
          <a className="navbar-link" href="/agenda">Agenda</a>
          <a className="navbar-link" href="/location">Location</a>
          <a className="navbar-link" href="/sponsors">Sponsors</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;