import React from "react";
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="p-3 footer flex j-s a-i">
        <p className="m-0 courier-prime">©2024 All Rights are reserved</p>
        <a href="/forum"><span className="material-symbols-rounded c-1 p-1">forum</span></a>
    </footer>
  );
};

export default Footer;