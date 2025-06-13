import React from 'react';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaCommentDots } from 'react-icons/fa';

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
          <a className="navbar-link" href="/location">Location</a>
          <a className="navbar-link" href="/sponsors">Sponsors</a>
        </div>

        {/* Social Icons */}
        <div className="navbar-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="/contact"><FaCommentDots /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
