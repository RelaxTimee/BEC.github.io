import React from 'react';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaLine } from 'react-icons/fa';

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
          <a className="navbar-link" href="#about">About</a>
          <a className="navbar-link" href="#speakers">Team us</a>
          <a className="navbar-link" href="#agenda">Event</a>
          <a className="navbar-link" href="#sponsors">Sponsors</a>
        </div>

        {/* Social Icons */}
        <div className="navbar-social">
          <a href="https://www.instagram.com/su.beclub/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/bangrak-entrepreneur-club/posts/?feedView=all" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://shorturl.at/MZcVr "><FaLine /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
