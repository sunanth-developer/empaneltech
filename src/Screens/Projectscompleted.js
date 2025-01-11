import React from 'react'
import Header from './Header'
import { FaCheckCircle, FaChartLine, FaShoppingCart, FaExclamationTriangle } from 'react-icons/fa'
import projectImage from '../assets/reba.png'
import './Projectscompleted.css'

export default function ProjectsCompleted() {
  return (
    <div className="projects-page">
      <Header title="ReBate Instant Project"/>
      
      <div className="project-content">
        <div className="project-intro">
          <h2>Project Overview</h2>
          <p className="intro-text">
            "ReBate Instant Project" is a marketing strategy where companies offer immediate discounts at the point of purchase, 
            eliminating the traditional rebate waiting period and paperwork. This innovative approach provides instant value to 
            customers while streamlining the purchasing process.
          </p>
          <div className="project-image-container">
            <img 
              src={projectImage} 
              alt="ReBate Instant Project Overview" 
              className="project-overview-image"
            />
          </div>
        </div>

        <div className="key-points-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>Immediate Savings</h3>
              <p>Direct price reduction applied at checkout, eliminating the need for mail-in rebates or waiting periods.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine />
              </div>
              <h3>Increased Sales</h3>
              <p>Boost in sales during promotional events due to visible immediate savings and customer incentivization.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShoppingCart />
              </div>
              <h3>Streamlined Process</h3>
              <p>No post-purchase steps required, creating a seamless shopping experience for customers.</p>
            </div>
          </div>
        </div>

        <div className="examples-section">
          <h2>Implementation Examples</h2>
          <div className="example-cards">
            <div className="example-card">
              <h3>Electronics Store Sale</h3>
              <p>TV advertised with an instant $100 rebate applied directly at checkout, showing immediate savings.</p>
            </div>
            <div className="example-card">
              <h3>Grocery Store Promotion</h3>
              <p>$2 instant rebate on specific cereal brands, automatically deducted at the register.</p>
            </div>
          </div>
        </div>

        <div className="considerations-section">
          <h2>Important Considerations</h2>
          <div className="considerations-grid">
            <div className="consideration-card">
              <div className="consideration-content">
                <h3>Data Collection Limitations</h3>
                <p>Reduced customer data collection due to elimination of post-purchase submission process.</p>
              </div>
            </div>
            <div className="consideration-card">
              <div className="consideration-content">
                <h3>Customer Behavior Impact</h3>
                <p>May primarily attract price-sensitive customers rather than building long-term brand loyalty.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
