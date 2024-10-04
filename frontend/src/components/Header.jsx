import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrollYValue, setScrollYValue] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY || document.documentElement.scrollTop;
      setScrollYValue(scrollYValue);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header className={`header ${ scrollYValue > 1  ? "scrolled" : ""}`}>
      <Link className="t-7 logo text-grad" to="/">{isMobile ? "is" : "ishushreyas"}</Link>
      <div className="toggle-button" onClick={toggleMenu}>
        <span className="material-symbols-rounded c-1 p-1">{isOpen ? "close" : "menu"}</span>
      </div>
    </header>
      <nav onClick={toggleMenu} className={`nav glass ${isOpen ? "open" : ""}`}>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
            <Link to="/services">Services</Link>
          </li>
            <li>
              <Link to="/contents">Content</Link>
            </li>
            <li>
              <Link to={`/about-me`}>About</Link>
            </li>
            <li>
              <Link to={`/contact-me`}>Contacts</Link>
            </li>
          </ul>
      </nav>
    </>
  );
};

export default Header;
