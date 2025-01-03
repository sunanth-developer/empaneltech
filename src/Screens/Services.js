import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Utility Services",
      content: `At Sidram , we empower utility service providers, businesses, and individuals with advanced tools and technology to enhance energy consumption visibility. Our solutions are designed to promote energy conservation, contributing to the nation's carbon neutrality goals. We offer utility solutions in the following sectors:`,
      list: ["Electricity", "Water", "Gas"],
      image: "https://www.vert-age.com/media/img/Utility-Services.png"
    },
    {
      title: "Business Services",
      content: `Rebates are often underestimated by companies and seen as a complex process by consumers. Our Instant Rebate Solutions simplify this process, making it seamless and immediate at the point of purchase. This enables companies to focus on sales promotion, revenue growth, and collecting valuable customer data for future marketing.`,
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/BusinessServices3.png"
    },
    {
      title: "IT Staff Augmentation",
      content: `We leverage our expertise to connect you with top-tier talent that aligns with your company's niche and culture. Say goodbye to screening countless resumes—let us handle recruitment, so you can focus on what truly matters.`,
      features: {
        services: ["Staff Augmentation", "Direct Recruitment", "Training & Management", "Integrated Team Building Across Locations"],
        benefits: [
          "Skill-Specific Recruiting: Domain-focused recruitment",
          "Extensive Network: Access to a vast database of vendors and resumes",
          "Affordable Direct Hire Model: Flat 15% fee compared to industry standard of 30%",
          "High-Quality Resources: Expertise in IT, technical, and management roles",
          "Rigorous Talent Evaluation: Robust processes for selecting top talent"
        ],
        models: [
          "Direct Placement: A 15% finder's fee with a 30-day guarantee",
          "Contract-to-Hire: Evaluate contract employees before direct hiring",
          "Contract Placement: Hire temporary or project-based resources"
        ]
      },
      image: "https://fortitude-nicsa.com/wp-content/uploads/2023/11/Staff-Augmentation-2.jpg",
      contact: "678-606-9026 EXT 404"
    },
    {
      title: "Custom Application Development",
      content: `Sidram  offers application development services to empower your business with highly functional, user-friendly solutions. We specialize in developing applications across platforms, including Java, .Net, iOS, and Android.

Our flagship products, CryptoSurvey360 and Clidiem, are a testament to our vision, clarity, and expertise in delivering exceptional quality and innovative solutions.`,
      list: ["Java", ".Net", "iOS", "Android"],
      image: "https://geeksforless.com/wp-content/uploads/2023/08/Custom-Application-Development.jpg"
    },
    {
      title: "Outsourcing",
      content: null,
      features: {
        sections: [
          {
            title: "Business Process Outsourcing (BPO)",
            content: "At Sidram  Tech, our aim is to make the company function smoother for our clients at affordable costs. Through our proficient Business Process Outsourcing (BPO), we help you in reducing the costs along with increasing shareholder value and improving the service quality while you focus on expanding your business for a long-term growth."
          },
          {
            title: "Recruitment Process Outsourcing (RPO)",
            content: "Entrust your Recruitment Process to us and we will ensure the hiring of field experts through the latest technology platforms put into application. In this era of ultimate competition, what you need is to focus on your business growth we deliver the workforce.",
            link: {
              text: "Know about our Placement Services process",
              url: "/services/staffing"
            }
          }
        ],
        location: "We are located in the heart of HiTech City MindSpace adjacent to Westin Hotel, CTS e.t.c in a spacious professional office with full corporate facilities."
      },
      image: "https://bairesdev.mo.cloudinary.net/blog/2023/12/IT-Outsourcing-Services.jpg"
    },
    {
      title: "Quality Assurance & Testing Services",
      content: "At Sidram , we understand that maintaining quality is paramount, leaving no room for errors. Robust testing is essential, and we provide comprehensive quality assurance and testing services to help businesses worldwide save time and effort.",
      features: {
        sections: [
          {
            title: "Our Expertise",
            list: [
              "Software Quality Excellence",
              "Strategic Test Consulting & Strategy",
              "Performance & Automation Engineering",
              "Innovative Test Solutions & Frameworks",
              "Dedicated Testing Centers of Excellence (TCoEs): Proven processes, strategies, and governance models",
              "Specialized Testing Services: Expertise in Mobile, Business Intelligence, and Agile environments"
            ]
          },
          {
            title: "Benefits of Choosing Sidram ",
            list: [
              "Cost-Effective Global Delivery Model: 24/7 support for seamless operations",
              "Certified Test Professionals: Accredited in ISTQB, SCRUM, ISEB, CSQA, CSTE, and HP certifications",
              "Strategic Alliances: Collaborations with leading global brands",
              "Domain Leadership: Extensive expertise across industries and technologies"
            ]
          }
        ],
        additionalContent: "Our QA and testing services uniquely combine quality with cost-effectiveness, incorporating value-driven strategies, streamlined processes, and robust governance to deliver innovative solutions that exceed client expectations."
      },
      image: "https://www.beyondkey.com/BkNew/images/QAservices/qa-service-banner.jpg",
      contact: "678-606-9026 EXT 404"
    }
  ];

  return (
    <div className="services-page">
      <h1 className="services-title">Services</h1>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div key={service.title} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            
            <div className={`service-content ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-text">
                {service.content && <p>{service.content}</p>}
                
                {service.list && (
                  <ul className="service-list">
                    {service.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {service.features?.sections && (
                  <div className="service-sections">
                    {service.features.sections.map((section, idx) => (
                      <div key={idx} className="service-section">
                        <h3>{section.title}</h3>
                        {section.content && <p>{section.content}</p>}
                        {section.list && (
                          <ul className="service-list">
                            {section.list.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {service.features?.services && (
                  <div className="service-features">
                    <h3>Our Services Include:</h3>
                    <ul>
                      {service.features.services.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <h3>Why Choose Us?</h3>
                    <ul>
                      {service.features.benefits.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <h3>Hiring Models:</h3>
                    <ul>
                      {service.features.models.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
