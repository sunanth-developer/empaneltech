import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import './Admin.css';

// Separate LoginForm Component
const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(loginData);
  };

  return (
    <div className="admin-container">
      <div className="login-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

// Separate JobPostingForm Component
const JobPostingForm = ({ onLogout }) => {
  const [jobData, setJobData] = useState({
    title: '',
    location: '',
    responsibilities: '',
    requirements: '',
    linkedinUrl: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create the job object with the exact structure
      const formattedJob = {
        title: jobData.title,
        location: jobData.location,
        responsibilities: jobData.responsibilities.split('\n').filter(item => item.trim()),
        requirements: jobData.requirements.split('\n').filter(item => item.trim()),
        linkedinUrl: jobData.linkedinUrl || null
      };

      // Add document to Firestore
      await addDoc(collection(db, 'jobs'), formattedJob);
      
      alert('Job posted successfully!');
      
      // Clear the form
      setJobData({
        title: '',
        location: '',
        responsibilities: '',
        requirements: '',
        linkedinUrl: ''
      });

    } catch (error) {
      console.error("Error posting job: ", error);
      alert('Error posting job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <div className="job-posting-card">
        <div className="header-with-logout">
          <h2>Post a New Job</h2>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>
        <form onSubmit={handleJobSubmit}>
          <div className="form-group">
            <label>Job Title*</label>
            <input
              type="text"
              name="title"
              value={jobData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter job title"
            />
          </div>
          
          <div className="form-group">
            <label>Location*</label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleInputChange}
              required
              placeholder="Enter job location"
            />
          </div>

          <div className="form-group">
            <label>Responsibilities* (Enter each point in new line)</label>
            <textarea
              name="responsibilities"
              value={jobData.responsibilities}
              onChange={handleInputChange}
              required
              placeholder="Enter responsibilities (one per line)"
              rows="5"
            />
          </div>

          <div className="form-group">
            <label>Requirements* (Enter each point in new line)</label>
            <textarea
              name="requirements"
              value={jobData.requirements}
              onChange={handleInputChange}
              required
              placeholder="Enter requirements (one per line)"
              rows="5"
            />
          </div>

          <div className="form-group">
            <label>LinkedIn Job URL (Optional)</label>
            <input
              type="url"
              name="linkedinUrl"
              value={jobData.linkedinUrl}
              onChange={handleInputChange}
              placeholder="Enter LinkedIn job posting URL"
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Main Admin Component
const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize state from localStorage
    return localStorage.getItem('isAdminLoggedIn') === 'true';
  });

  // Handle Login
  const handleLogin = (loginData) => {
    if (loginData.email === 'admin@Empaneltech.com' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
      localStorage.setItem('isAdminLoggedIn', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
  };

  return isLoggedIn ? 
    <JobPostingForm onLogout={handleLogout} /> : 
    <LoginForm onLogin={handleLogin} />;
};

export default Admin;