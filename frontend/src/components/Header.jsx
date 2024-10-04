import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const location = useLocation();

  // Handle scroll event
  const handleScroll = useCallback(() => {
    const scrollYValue = window.scrollY || document.documentElement.scrollTop;
    setScrollYValue(scrollYValue);
  }, []);

  // Handle resize event
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 600);
  }, []);

  // Close the menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add/remove scroll and resize event listeners
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu on link click (only for mobile)
  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`header ${scrollYValue > 50 ? "scrolled" : ""}`}>
      <NavLink className="t-7 logo text-grad" to="/">{isMobile ? "is" : "ishushreyas"}</NavLink>
      <div 
        className="toggle-button" 
        onClick={toggleMenu} 
        aria-expanded={isOpen} 
        aria-controls="navigation"
      >
        <span className="material-symbols-rounded c-1 p-1">
          {isOpen ? "close" : "menu"}
        </span>
      </div>
      <nav id="navigation" onClick={handleNavClick} className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active-link">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contents" activeClassName="active-link">Content</NavLink>
          </li>
          <li>
            <NavLink to="/about-me" activeClassName="active-link">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact-me" activeClassName="active-link">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
