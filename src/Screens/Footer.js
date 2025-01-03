import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Description */}
        <div className="footer-section">
          <h3>Sidram Technologies</h3>
          <p>
            Sidramthinks long-term! We serve clients with the goal to create 
            partnerships which is why it is our fundamental focus to avoid mistakes by all 
            costs and exceed client goals! To Sidram, all our clients are equal.
          </p>
          <div className="social-links">
            <h4>Follow us</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/salesforce">Salesforce</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services/utility">Utility Services</Link></li>
            <li><Link to="/services/business">Business Services</Link></li>
            <li><Link to="/services/staffing">IT Staff Augmentation</Link></li>
            <li><Link to="/services/outsourcing">Outsourcing</Link></li>
            <li><Link to="/services/qa">Quality Assurance</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sidram. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
