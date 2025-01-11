import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import './Contactus.css';

export default function ContactUs() {
  const [contactInfo, setContactInfo] = useState({
    phone: '',
    address: '',
    immigrationEmail: '',
    infoEmail: '',
    queriesEmail: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        // Get all documents from 'contact' collection
        const querySnapshot = await getDocs(collection(db, 'phone'));
        
        // Log the number of documents found
        console.log("Number of documents:", querySnapshot.size);
        
        querySnapshot.forEach((doc) => {
          // Log each document's data
          console.log("Document ID:", doc.id);
          console.log("Document data:", doc.data());
          
          const data = doc.data();
          setContactInfo({
            phone: data.phone || '',
            address: data.address || '',
            immigrationEmail: data.immigrationEmail || '',
            infoEmail: data.infoEmail || '',
            queriesEmail: data.queriesEmail || ''
          });
        });

      } catch (error) {
        console.error("Error fetching contact info:", error);
        console.error("Error details:", {
          message: error.message,
          code: error.code,
          stack: error.stack
        });
      }
    };

    fetchContactInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', formData);
      // Add form submission logic here if needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-section">
            <h2>Phone</h2>
            <p>
              <a href={`tel:${contactInfo.phone}`}>
                {contactInfo.phone || 'Loading...'}
              </a>
            </p>
          </div>

          <div className="contact-section">
            <h2>Address</h2>
            <p>{contactInfo.address || 'Loading...'}</p>
          </div>

          <div className="contact-section">
            <h2>Mail</h2>
            <div className="email-list">
              <div className="email-item">
                <span>For Immigrations:</span>
                <a href={`mailto:${contactInfo.immigrationEmail}`}>
                  {contactInfo.immigrationEmail || 'Loading...'}
                </a>
              </div>
              <div className="email-item">
                <span>For Queries:</span>
                <a href={`mailto:${contactInfo.queriesEmail}`}>
                  {contactInfo.queriesEmail || 'Loading...'}
                </a>
              </div>
              <div className="email-item">
                <span>For Info:</span>
                <a href={`mailto:${contactInfo.infoEmail}`}>
                  {contactInfo.infoEmail || 'Loading...'}
                </a>
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


