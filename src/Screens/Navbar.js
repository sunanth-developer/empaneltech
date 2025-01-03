import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  //<li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  
<nav className="navbar">
      <div className="logo">
       <Link to="/" onClick={toggleMenu}> <img src="http://sidramtech.com/assets/img/logo/logo.png" alt="Company Logo" /></Link>
      </div>
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/salesforce" onClick={toggleMenu}>Salesforce Services</Link></li>
        <li><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>





  );
};

export default Navbar;
