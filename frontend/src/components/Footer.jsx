import React from "react";
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="p-3 footer flex j-s a-i">
        <p className="m-0 c-1 courier-prime">©2024 • <Link className="c-1 td-0" to="/about-this-site">About this Site</Link></p>
        <Link to="/forum"><span className="material-symbols-rounded c-1 p-1">forum</span></Link>
    </footer>
  );
};

export default Footer;
