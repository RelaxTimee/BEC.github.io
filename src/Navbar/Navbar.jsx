import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Scroll to section smoothly
  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    closeMenu();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">BEC</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <button
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionClick('about')}
          >
            About
          </button>
          <button
            className={`navbar-link ${activeSection === 'speakers' ? 'active' : ''}`}
            onClick={() => handleSectionClick('speakers')}
          >
            Team us
          </button>
          <button
            className={`navbar-link ${activeSection === 'agenda' ? 'active' : ''}`}
            onClick={() => handleSectionClick('agenda')}
          >
            Event
          </button>
          <button
            className={`navbar-link ${activeSection === 'sponsors' ? 'active' : ''}`}
            onClick={() => handleSectionClick('sponsors')}
          >
            Sponsors
          </button>
        </div>

        {/* Desktop Social Icons */}
        <div className="navbar-social">
          <a href="https://www.instagram.com/su.beclub/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/bangrak-entrepreneur-club/posts/?feedView=all" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://shorturl.at/MZcVr" target="_blank" rel="noreferrer">
            <SiLine />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? null : <FaBars />}
        </button>
      </div> 

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">BEC</div>
          {isOpen && (
            <button className="close-btn" onClick={closeMenu}>
              <FaTimes />
            </button>
          )}
        </div>

        <div className="mobile-links">
          <button
            className={`mobile-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => handleSectionClick('about')}
          >
            About
          </button>
          <button
            className={`mobile-link ${activeSection === 'speakers' ? 'active' : ''}`}
            onClick={() => handleSectionClick('speakers')}
          >
            Team us
          </button>
          <button
            className={`mobile-link ${activeSection === 'agenda' ? 'active' : ''}`}
            onClick={() => handleSectionClick('agenda')}
          >
            Event
          </button>
          <button
            className={`mobile-link ${activeSection === 'sponsors' ? 'active' : ''}`}
            onClick={() => handleSectionClick('sponsors')}
          >
            Sponsors
          </button>
        </div>

        <div className="mobile-social">
          <a href="https://www.instagram.com/su.beclub/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/bangrak-entrepreneur-club/posts/?feedView=all" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://shorturl.at/MZcVr" target="_blank" rel="noreferrer">
            <SiLine />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
