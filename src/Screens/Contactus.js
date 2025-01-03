import React, { useState } from 'react';
import './Contactus.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-section">
            <h2>Phone</h2>
            <p><a href="tel:470-907-5510">470-907-5510</a></p>
          </div>

          <div className="contact-section">
            <h2>Address</h2>
            <p>2450 Atlanta Highway, Suite 1802,<br />Cumming GA 30040</p>
          </div>

          <div className="contact-section">
            <h2>Mail</h2>
            <div className="email-list">
              <div className="email-item">
                <span>For Immigrations:</span>
                <a href="mailto:Immigrations@EmpanelTechtech.com">Immigrations@EmpanelTechtech.com</a>
              </div>
              <div className="email-item">
                <span>For Queries:</span>
                <a href="mailto:Gary@EmpanelTechtech.com">Gary@EmpanelTechtech.com</a>
              </div>
              <div className="email-item">
                <span>For Info:</span>
                <a href="mailto:Info@EmpanelTechtech.com">Info@EmpanelTechtech.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


