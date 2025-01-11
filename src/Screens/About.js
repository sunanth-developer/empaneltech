import React from 'react';
import './About.css';
import Header from './Header';
export default function AboutUs  ()  {
  return (
    <div className="about-us-container">
      <Header title="About Us" description="You can only profit from what you manage, and you can only manage what you measure." />
      {/* Company Description Section */}
      <section className="company-section">
        <p className='aboutusheadtext'>You can only profit from what you manage, and you can only manage what you measure.</p>
        
        <div className="about-us-text-container">
          <p className='about-us-text'>Traditionally, customers and utility companies have relied on conventional utility meter data provided through billing statements, often weeks or a month after usage. This data, based solely on load consumption, offers limited actionable insight. However, with smart devices and advanced monitoring tools, utility companies and consumers can now gain real-time insights into energy usage, site health, and equipment performance. This empowers them to actively manage operations and make adjustments before potential savings are lost.</p>
          <p className='about-us-text'>Rebates are often undervalued by companies and perceived as a cumbersome process by consumers. Our Instant Rebate solutions simplify the process, enabling businesses to focus on driving sales and increasing revenue instead of managing rebate complexities.</p>
          <p className='about-us-text'>Empaneltech, in collaboration with Empaneltech, delivers innovative smart technology solutions and services that revolutionize energy efficiency. Together, we provide advanced platforms and tools to utility companies, retail providers, and consumers, helping them enhance energy savings and streamline sales using optimized rebate programs. Our partnership aims to transform how the world perceives and achieves energy efficiency.</p>
        </div>
      </section>

      {/* Founders Section */}
      <div className="info-cards-container">
        {/* First Card - Image Left */}
        <div className="info-card">
          <img 
            src="https://www.nesbedcollege.org/images/mision.png"
            alt="Mission"
            className="info-card-image"
          />
          <div className="info-card-content">
            <h3 className="info-card-title">Mission</h3>
            <p className="info-card-text"> 
             Energy consumption, along with repair and maintenance budgets, represent significant expenses for both businesses and individuals. However, there is often a lack of clear visibility into how these funds are being utilized or how costs may vary depending on the performance of equipment or systems. By leveraging advanced visibility and optimization tools, it becomes possible to predict, identify, and address unnecessary repair, maintenance, and energy expenditures. This enables utility companies to achieve energy savings on a broader scale, contributing not only to cost efficiency but also to a reduced carbon footprint and a more sustainable future.
            </p>
          </div>
        </div>

        {/* Second Card - Image Right */}
        <div className="info-card">
          <div className="info-card-content">
            <h3 className="info-card-title">Vision</h3>
            <p className="info-card-text">
            "Energy saved is energy earned, and data saved is money generated."  

At Empaneltech , our vision is to harness the power of technology to support nations in achieving carbon neutrality while empowering companies to focus on their core business operations without the burden of managing complex data tracking processes.

We think long-term. Our mission is to build enduring partnerships with our clients, ensuring we avoid costly mistakes and consistently exceed expectations. At Empaneltech , every client matters equally. While organizational needs may vary, our commitment to delivering exceptional service remains the same for all.

As a forward-thinking company, we are committed to staying at the forefront of technology innovation. We combine our expertise and passion for cutting-edge solutions with your industry knowledge to elevate your organization to new heights. Through our Staff Augmentation and Quality Assurance Services, we aim to drive excellence and deliver transformative results.

To realize our vision, we have assembled a team of dedicated professionals who are passionate about providing top-tier consulting and management services. Together, we strive to make a meaningful impact on your success and the future of sustainable technology.
            </p>
          </div>
          <img 
            src="https://www.ictesolutions.com.au/media/1953/vision.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132396685480000000"
            alt="Vision"
            className="info-card-image"
          />
        </div>
      </div>
    </div>
  );
};


