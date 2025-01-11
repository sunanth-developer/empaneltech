import React from 'react';
import './SalesforceServices.css';
import customer from '../assets/Customer-Support.jpg'
import marketing from '../assets/marketing.jpg'
import sales from '../assets/sales.jpg'
import platform from '../assets/platform-development.jpg'
import appexchange from '../assets/app_exchange.jpg'

export default function SalesforceServices() {
  const services = [
    {
      id: 'marketing-pr',
      mainTitle: "MARKETING & PR",
      mainTitleSubheading: "CONNECT WITH YOUR AUDIENCE AND FOSTER A THRIVING COMMUNITY",
      image: marketing,
      heading: "MARKETING & PR IMPLMENTATIONS",
      subheading: "We go beyond the basics of marketing and PR tools, empowering you to harness the cloud for deeper customer insights and impactful messaging. Discover how to leverage cloud technology to connect with your audience, nurture leads, and foster meaningful relationships.",
      description: [
        "Tailored platforms, solutions, and adaptations to meet your unique needs.",
        "Collaborative consultations at every stage: planning, development, and implementation.",
        "Optimized workflows with fewer clicks and streamlined processes.",
        "Comprehensive training offered both onsite and remotely.",
      ]
    },
    {
      id: 'sales-management',
      mainTitle: "SALES MANAGEMENT",
      mainTitleSubheading: "Streamline Your Workflow and Empower Your Sales Team",
      image: sales,
      heading: "SALES CLOUD IMPLEMENTATION",
      subheading: "Maximize the potential of Sales Cloud with our expertise. We understand the dynamic sales environment and how to integrate process, technology, and mobility to meet the evolving demands of your sales organization.",
      description: [
        " Customized to fit your specific business needs.",
        " Engage with us throughout planning, development, and implementation.",
        " Minimize clicks and optimize procedures for a seamless experience.",
        " Delivered both onsite and remotely to empower your team.",
      ]
    },
    {
      id: 'customer-service',
      mainTitle: "CUSTOMER SERVICE",
      mainTitleSubheading: "Revolutionize Customer Experience and Set a New Standard",
      image: customer,
      heading: "SERVICE CLOUD IMPLEMENTATION",
      subheading: "Transform your customer service into a proactive, revenue-generating powerhouse. We align processes and implement technology to elevate customer service from a basic support function to a key driver of customer satisfaction and business growth.",
      description: [
        "Designed to meet your unique customer service needs.",
        "Partner with us throughout planning, development, and implementation.",
        "Reduce clicks and simplify processes for maximum efficiency.",
        "Delivered onsite or remotely to equip your team with the skills they need.",
      ]
    },
    {
      id: 'platform-development',
      mainTitle: "PLATFORM DEVELOPMENT",
      mainTitleSubheading: "Enrich and Customize Your CRM with Tailored Adaptations and Integration Services",
      image: platform,
      heading: "OPERATIONAL EFFICIENCY WITH FORCE.COM DEVELOPMENT",
      subheading: "Boost efficiency and streamline your business operations with tailored Force.com solutions. Our expert training and development team can design a customized platform perfectly aligned with your business needs, ensuring you get the most out of Force.com while eliminating unnecessary features.",
      description: [
        "PLATFORM DEVELOPMENT TOOLS INCLUDE:",
        "Tailored to fit the unique contours of your business.",
        "Work with us throughout the planning, development, and implementation phases.",
        "Simplify workflows with reduced clicks and optimized procedures.",
        "Available onsite or remotely to empower your team with the knowledge they need."
      ]
    },
    {
      id: 'app-exchange',
      mainTitle: "APP EXCHANGE & CUSTOM APP",
      mainTitleSubheading: "",
      image: appexchange,
      heading: "APP EXCHANGE & CUSTOM APP",
      subheading: "Unlock New Business Possibilities by Leveraging the Creative Potential of AppExchange  Discover how to tap into the vast opportunities within the AppExchange ecosystem to expand and enhance your business in ways you never imagined. We'll guide you on how to use and create custom apps to:",
      description: [
        "Unlock new channels and audiences for greater exposure.",
        "Enhance flexibility and access by enabling mobile solutions.",
        "Gain deeper understanding of customer needs and build stronger relationships.",
      ]
    }
  ];

  return (
    <div className="salesforce-services">
      <div className="page-header" id="salesforce-services-header">
        <h1 className="main-title">Salesforce Services</h1>
      </div>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="service-section">
            <div className="service-container">
              <div className="service-header" id={`${service.id}-header`}>
                <h2 className="service-title" id={`${service.id}-title`}>{service.mainTitle}</h2>
                <p className="service-subtitle" id={`${service.id}-subtitle`}>{service.mainTitleSubheading}</p>
              </div>
              <div className={`service-content ${index % 2 === 1 ? 'reverse' : ''}`} id={`${service.id}-content`}>
                <div className="service-text" id={`${service.id}-text`}>
                  <h3 className="service-heading" id={`${service.id}-heading`}>{service.heading}</h3>
                  <p className="service-subheading" id={`${service.id}-subheading`}>{service.subheading}</p>
                  <ul className="service-list" id={`${service.id}-list`}>
                    {service.description.map((point, idx) => (
                      <li key={idx} id={`${service.id}-point-${idx + 1}`}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-image" id={`${service.id}-image`}>
                  <img src={service.image} alt={service.mainTitle} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
