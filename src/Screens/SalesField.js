import React from 'react';
import Header from './Header';
import './SalesField.css';

const SalesField = () => {
  return (
    <div className="salesfield">
      <Header 
        title="SalesField - AI-Powered Sales Network Solution"
        description="Revolutionizing corporate sales through intelligent networking"
      />
      
      <section className="salesfield-hero">
        <div className="salesfield-content">
          <div className="salesfield-text">
            <h2>Transform Your Sales Network</h2>
            <p>
              Salesfield is a revolutionary tool developed using AI and it's a networking 
              system that helps increasing sales to many corporations. It's a solution 
              to corporations which are entirely depended on sales team. We bridge the 
              gap of training, talent and cost in a smart way.
            </p>
          </div>
          <div className="salesfield-image">
            <img 
              src="https://easytalent.it/wpeasy/wp-content/uploads/2017/07/Creare_rete_vendita-930x472.jpg" 
              alt="Sales Network Solution" 
            />
          </div>
        </div>
      </section>

      <section className="salesfield-features">
        <div className="features-content">
          <h3>Key Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>AI-Powered Training</h4>
              <p>Advanced training modules powered by artificial intelligence</p>
            </div>
            <div className="feature-card">
              <h4>Talent Management</h4>
              <p>Smart talent acquisition and development system</p>
            </div>
            <div className="feature-card">
              <h4>Cost Optimization</h4>
              <p>Efficient cost management through intelligent automation</p>
            </div>
            <div className="feature-card">
              <h4>Network Building</h4>
              <p>Comprehensive sales network development tools</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesField; 