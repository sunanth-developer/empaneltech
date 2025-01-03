import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { FaLinkedin } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState('careers');

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, 'jobs'));
      const jobsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(jobsList);
    };

    fetchJobs();
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'careers':
        return (
          <div className="careers-content">
            <div className="careers-hero">
              <h1>Careers at Sidram  Technologies</h1>
              <p>Join our team and be part of something extraordinary</p>
            </div>

            <section className="careers-main">
              <div className="intro-section">
                <p>
                  Sidram  is dedicated for improving the workplace experience and needs people who will add to our own workforce. We require IT professionals and business innovators who are willing to commit to a strong cooperative infrastructure, which is built on the basis of creativity and commitment. If you fit our description please submit your resume and we will surely contact within the next few business days. At Sidram , we put our client at first priority and ensure that our consultants get the opportunity to feel involved. We seek highly focused, committed and result-driven Consultants to work with us.
                </p>
              </div>

              <div className="guidance-section">
                <h2>Career Guidance Services</h2>
                <p>
                  Here at Sidram , our team of experienced career advisors counsel the students from IT field to help find the right jobs for them. Through this service, we facilitate both the graduates and clients connect with each other.
                </p>
              </div>

              <div className="quote-section">
                <h2>"We Will Shape Up Your Dreams with Value"</h2>
              </div>

              <div className="challenges-section">
                <p>One common problem that almost every candidate might face is choosing platform/ tool in IT field. Some common confusion:</p>
                <ul className="challenges-list">
                  <li>Can I Make the Best Career in Java, .Net or Devops?</li>
                  <li>Should I go for Programming?</li>
                  <li>Is QA Capable of Offering Promising career?</li>
                  <li>Testing Job is Easy, but Cannot Make Good Money.</li>
                </ul>
              </div>

              <div className="solution-section">
                <h3>We Can Solve Your Problem</h3>
                <p>
                  You must have heard questions mentioned above, or maybe being bothered with them as well. The truth is there is no technology or market trend that can perfectly fit everyone's interest and need. Each individual is different, and has different career goals. So, it is your academic background and passion for any specific field that will help you to determine your career path.
                </p>
                <p>
                  This is why; we always start the process with student counseling to understand what they learnt, and what they want to be, and then, we advise the best career choices. We let people choose their interest and guide them to achieve their career goals with the help of our systematic counseling, training and placement process.
                </p>
              </div>

              <div className="contact-section">
                <p>Now is the time to secure your career and future. Get in touch with us now!</p>
                <p>Email us at: <a href="mailto:info@Sidram .com">info@Sidram .com</a></p>
              </div>

              <div className="graduates-section">
                <h2>Fresh College Graduates</h2>
                <p>
                  Irrespective of your location, Sidram  offers remarkable opportunities for graduates who want to step in the consulting career. As a growing company, we provide an excellent platform to graduates and student to explore and learn 'core' consulting skills.
                </p>
                <p>
                  In an addition to consulting, we provide IT training to help students get real-life experience working on client projects. Our experienced consultants will help you to get an opportunity to play multiple roles, apply theoretical learning practically on live projects, and be part of a team that delivers excellent value to clients across the United States.
                </p>
              </div>

              <div className="career-development">
                <p>
                  At Sidram , we ensure you that your success will be well-equipped with the skills and experience we provide. We have 'The Core' Consulting practice group for all campus hires, including graduates and undergraduates. As part of our 'The Core' group, you will have access to detailed training curriculum, career advisers and many more to shape up your career.
                </p>
                <p>
                  With our structured career and performance Management framework, we will work with you to create a custom learning and development plan. You can build upon your natural skills and academic qualification to develop additional skills and manage your career in the direction.
                </p>
              </div>

              <div className="submit-resume-section">
                <p>During our selection process, students get an opportunity to learn more about the work, and find out their potential. We only hire the best, so make sure you look at our openings:</p>
                <button className="submit-button">Submit Resume and become a part of Sidram 's awesome team!</button>
              </div>
            </section>
          </div>
        );

      case 'experienced':
        return (
          <div className="careers-content">
            <section className="experienced-hire">
              <div className="intro-section">
                <p>
                  You've spent enough time in the industry, gaining experience and knowledge to share and apply that learning in today's fast paced environment to bring substantial difference. At Sidram , we hire seasoned professional like you, but first, you need to join our team as a member. So, sign up for a platform where your skills, knowledge and talent are valued and required.
                </p>
                <p>
                  We offer you the opportunity to utilize all your learning, expertise and experience, while continuing to improve your skills and career. We indeed are not a large consulting centre, but we are reputable, and while we continue to grow, all team members have the opportunity to contribute to our success, and build their career path as well.
                </p>
              </div>

              <div className="requirements-section">
                <h3>Sidram  is the right workplace for you in case you:</h3>
                <ul>
                  <li>Want drive scalable value and bring sustainable changes for your clients.</li>
                  <li>Want to speed up your career while gaining experience.</li>
                  <li>Want to work in a collaborative team environment.</li>
                  <li>Want to help your other team members and company to huge success.</li>
                </ul>
                <p>
                  We have team of qualified consultants who are trained to embed industry-specific best practices in different project, and have thorough understanding of industry verticals, operations, management, and IT.
                </p>
              </div>

              <div className="consulting-section">
                <h3>Management Consulting</h3>
                <p>
                  At Sidram , our skilled management consultants facilitate business process, and have extensive industry and functional experience to help clients drive measurable results. No matter whether it is improving operational efficiency, designing a new organizational structure or implement new technology, our management consultants are here to help!
                </p>

                <h3>Technology Consulting</h3>
                <p>
                  Java, Oracle, PLM, HP, Selenium, SAP and Microsoft are primary technology engines. Our technology consultants have remarkable expertise over latest technologies, and therefore, enable them to stay ahead of the competition with terrific knowledge, skills and capabilities. We are also experts at strategic technologies such as mobile, cloud and big data, and can provide solutions to address niche business requirement of clients.
                </p>
              </div>

              <div className="culture-section">
                <h3>Culture @ Sidram </h3>
                <p>
                  The first and foremost reason behind why our team members and clients stay with us is our unique culture. We uphold a perfect blend of energy and innovation of a startup with a vision and infrastructure of Fortune Global 500 company. Innovation is our culture, and we always encourage professionals who think out of the box. We firmly believe in taking good care of our clients, each other, and the healthy environment in which we work.
                </p>
              </div>

              <div className="career-cta-section">
                <p>Are you ready for a challenging self-directed career?</p>
                <button className="link-button" onClick={() => setActiveTab('openings')}>
                  Check our experienced hire openings
                </button>
              </div>

              <div className="positions-section">
                <h3>We always look for Talent in</h3>
                <p>Think you have what it takes in the following fields? Submit your resume</p>
                <ul>
                  <li>Senior Network Engineers</li>
                  <li>Senior Programmer Analyst</li>
                  <li>Agile Coach/Scrum Master</li>
                  <li>Senior Software Programmer</li>
                  <li>Senior Software Engineer</li>
                  <li>IT Project Lead/ Managers</li>
                  <li>Senior Business Analysts</li>
                  <li>Senior QA Engineers (Software Testing)</li>
                  <li>Senior Data Analyst</li>
                </ul>
              </div>

              <div className="submit-resume-section">
                <button className="submit-button">
                  Submit Resume and become a part of Sidram 's awesome team!
                </button>
              </div>
            </section>
          </div>
        );

      case 'openings':
        return (
          <section className="current-openings">
            <h2>Current Openings</h2>
            <div className="jobs-grid">
              {jobs.length === 0 ? (
                <p className="no-jobs">No job openings available at the moment.</p>
              ) : (
                jobs.map(job => (
                  <div key={job.id} className="job-card">
                    <h3>{job.title}</h3>
                    <p className="job-location">Location: {job.location}</p>
                    <h4>Responsibilities:</h4>
                    <ul className="job-requirements">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                    <h4>Requirements:</h4>
                    <ul className="job-requirements">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
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
                ))
              )}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="careers-page">
      <div className="career-tabs">
        <button 
          className={`tab-button ${activeTab === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveTab('careers')}
        >
          Careers
        </button>
        <button 
          className={`tab-button ${activeTab === 'experienced' ? 'active' : ''}`}
          onClick={() => setActiveTab('experienced')}
        >
          Experienced Hire
        </button>
        <button 
          className={`tab-button ${activeTab === 'openings' ? 'active' : ''}`}
          onClick={() => setActiveTab('openings')}
        >
          Current Openings
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default Careers;
