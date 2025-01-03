import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import './Careers.css';

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsCollection = collection(db, 'jobs');
        const jobSnapshot = await getDocs(jobsCollection);
        const jobList = jobSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setJobs(jobList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs: ", err);
        setError("Failed to load jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="careers-container">
        <div className="loading">Loading jobs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="careers-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="careers-container">
      <h1 className="careers-title">Career Opportunities</h1>
      
      {jobs.length === 0 ? (
        <p className="no-jobs">No job openings available at the moment.</p>
      ) : (
        <div className="jobs-grid">
          {jobs.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p className="job-location">Location: {job.location}</p>
              <h4>Responsibilities:</h4>
              <ul className="job-requirements">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
              {job.requirements && (
                <>
                  <h4>Requirements:</h4>
                  <ul className="job-requirements">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </>
              )}
              <div className="apply-buttons">
                <button className="apply-button">Apply Now</button>
                {job.linkedinUrl && (
                  <a 
                    href={job.linkedinUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="linkedin-apply-button"
                  >
                    <FaLinkedin className="linkedin-icon" />
                    Apply with LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
