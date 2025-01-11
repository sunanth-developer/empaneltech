import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaProjectDiagram, FaBuilding, FaMicrochip, FaUsers, FaBriefcase } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';

const Footer = () => {
  const navigate = useNavigate();
  const [jobCount, setJobCount] = useState(0);
  useEffect(() => {
    const fetchJobCount = async () => {
      const querySnapshot = await getDocs(collection(db, 'jobs'));
      setJobCount(querySnapshot.docs.length);
    };

    fetchJobCount();
  }, []);
  const handleJobClick = () => {
    // First navigate to careers page
    navigate('/careers');
    
    // Then set a small timeout to ensure navigation completes before setting state
    setTimeout(() => {
      // Update the state and scroll after navigation
    navigate('/careers');
      
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <footer className="footer">
      {/* Stats Banner at Top */}
      <div className="stats-banner">
        <div className="stats-container">
          <div className="stat-item clickable" onClick={handleJobClick}>
            <FaBriefcase className="stat-icon" />
            <div className="stat-number">{jobCount}</div>
            <div className="stat-text">Job Openings</div>
          </div>
          
          <div className="stat-item">
            <FaBuilding className="stat-icon" />
            <div className="stat-number">1760</div>
            <div className="stat-text">World Wide Branch</div>
          </div>
          
          <div className="stat-item">
            <FaMicrochip className="stat-icon" />
            <div className="stat-number">2738</div>
            <div className="stat-text">Digital Instruments</div>
          </div>
          
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <div className="stat-number">500+</div>
            <div className="stat-text">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Company Description */}
        <div className="footer-section">
          <h3>Empanel Technologies</h3>
          <p>
            Empaneltech thinks long-term! We serve clients with the goal to create 
            partnerships which is why it is our fundamental focus to avoid mistakes by all 
            costs and exceed client goals! To Empaneltech, all our clients are equal.
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
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">Utility Services</Link></li>
            <li><Link to="/services">Business Services</Link></li>
            <li><Link to="/services">IT Staff Augmentation</Link></li>
            <li><Link to="/services">Outsourcing</Link></li>
            <li><Link to="/services">Quality Assurance</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2019 Empaneltech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
