import React from 'react';
import './Contact.css';
import mobile from '../assets/mobile.png';
import email from '../assets/gmail.png';
import insta from '../assets/insta.png';
import whatsapp from '../assets/whatsapp.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const Contactus = () => {
  return (
    <div className='contact' id="contact">
      <div className="contact-us">
        <div className="contact-info">
          <a className="info-item" href="tel:+919959019781">
            <img src={mobile} className='contacticon' alt="Mobile"/>
            <span>+91 9959019781</span>
          </a>
          
          <a className="info-item" href="mailto:contact@driverspot.in">
            <img src={email} className='contacticon' alt="Email"/>
            <span>sunanthsamala@shawavetechnologies.com</span>
          </a>
          
          <a href='https://www.instagram.com/shawave_technologies_pvt_ltd' className="info-item" target="_blank" rel="noopener noreferrer">
            <img src={insta} className='contacticon' alt="Instagram"/>
            <span>@shawave_technologies_pvt_ltd</span>
          </a>

          <a className="info-item" href="https://wa.me/919959019781" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} className='contacticon' alt="WhatsApp"/>
            <span>+91 9959019781</span>
          </a>
          
          <a className="info-item" href="https://www.linkedin.com/company/shawave-technologies" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} className='contacticon' alt="LinkedIn"/>
            <span>Shawave Technologies</span>
          </a>

         
        </div>
      </div>
    </div>
  );
};

export default Contactus;
