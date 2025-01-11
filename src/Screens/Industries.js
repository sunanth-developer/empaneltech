import React, { useState } from 'react';
import Header from './Header';
import { 
  FaIndustry, 
  FaMedkit, 
  FaUsers,
  FaChartLine, 
  FaShoppingCart, 
  FaShieldAlt,
  FaSeedling,
  FaLeaf,
  FaHandHoldingHeart,
  FaCar,
  FaRobot,
  FaMobileAlt
} from 'react-icons/fa';
import './Industries.css';

export default function Industries() {
  const [selectedCard, setSelectedCard] = useState(null);

  const industries = [
    {
      id: 1,
      icon: <FaIndustry />,
      title: "Manufacturing & IoT",
      dataIndustry: "manufacturing",
      description: "AI-powered manufacturing solutions enable automation, transforming operations into smarter, more efficient systems that reduce costs and minimize downtime.",
      fullDescription: "AI-powered manufacturing solutions enable automation, transforming operations into smarter, more efficient systems that reduce costs and minimize downtime. By leveraging predictive analytics and human intelligence, AI can accurately forecast product demand and pricing trends. Additionally, our AI engine supports equipment predictive maintenance, utilizing machine learning to analyze historical and live data to identify failure patterns. AI enhances IoT capabilities by processing sensor and device data through machine learning-based analytics. This allows companies to monitor internal operations effectively, gaining valuable, accurate insights from their data."
    },
    {
      id: 2,
      icon: <FaMedkit />,
      title: "Healthcare/Medical",
      dataIndustry: "healthcare",
      description: "In the evolving field of healthcare, AI facilitates faster and more accurate disease diagnosis, accelerates drug discovery, and streamlines processes.",
      fullDescription: "In the evolving field of healthcare, AI facilitates faster and more accurate disease diagnosis, accelerates drug discovery, and streamlines processes. Virtual nursing assistants monitor patients, while big data analytics enable more personalized care experiences. Beyond traditional healthcare, our AI engine can predict diseases by analyzing patient medical history and user-reported symptoms. It also provides recommendations for physicians and nutritional supplements when necessary."
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "IT/Human Capital Management",
      dataIndustry: "human-capital",
      description: "Our AI platform helps enhance employee retention by predicting attrition, enabling companies to identify valuable employees and determine priorities.",
      fullDescription: "Our AI platform helps enhance employee retention by predicting attrition, enabling companies to identify valuable employees and determine which ones should be prioritized for retention due to their contribution to the organization. Additionally, the platform uncovers the key factors influencing an employee's decision to resign, providing valuable insights for HR departments to act upon."
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Fintech",
      dataIndustry: "fintech",
      description: "Our AI solutions empower fintech companies to streamline and optimize processes, from credit decision-making to quantitative trading and risk management.",
      fullDescription: "Our AI solutions empower fintech companies to streamline and optimize processes, from credit decision-making to quantitative trading and financial risk management. By analyzing past behaviors, our AI engine predicts future scenarios, enabling banks to forecast outcomes and trends. This predictive capability aids in identifying fraud, detecting anti-money laundering patterns, and providing personalized customer recommendations."
    },
    {
      id: 5,
      icon: <FaShoppingCart />,
      title: "ERP/Retail/Supply Chain",
      dataIndustry: "retail",
      description: "Our AI solutions assist retail companies in enhancing demand forecasting, optimizing pricing decisions, and improving product placement.",
      fullDescription: "Our AI solutions assist retail companies and organizations using ERP systems in enhancing demand forecasting, optimizing pricing decisions, and improving product placement. This ensures that customers are connected with the right products, in the right location, at the right time. Predictive analytics helps determine the ideal stock levels, preventing stores from having excess or insufficient inventory. Integrating AI into supply chain management brings significant benefits, supporting digital transformation efforts."
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Insurance",
      dataIndustry: "insurance",
      description: "Our AI engine utilizes proprietary algorithms to transform the insurance industry through fraud detection, streamlined underwriting, and enhanced service.",
      fullDescription: "By leveraging historical data from insurance companies, our AI engine utilizes a proprietary algorithm with the potential to transform the insurance industry in several key areas. It can be used to detect and differentiate between fraudulent and genuine claims, streamline the underwriting process, and enhance customer service. Our AI-driven bots can assist with application processing through Robotic Process Automation (RPA) or provide support for technical and general inquiries, improving efficiency and customer satisfaction."
    },
    {
      id: 7,
      icon: <FaSeedling />,
      title: "Agriculture",
      dataIndustry: "agriculture",
      description: "Our customized AI-powered solution enhances crop yield by improving harvest quality, detecting diseases, and addressing pest control.",
      fullDescription: "Our customized AI-powered solution enhances crop yield by improving harvest quality, detecting crop diseases, and addressing pest control and poor crop nutrition on farms. Leveraging AI-enabled IoT sensors, we target weeds and take proactive actions to determine the optimal herbicides and fertilizers to apply within the right buffer zones. This approach prevents the over-application of herbicides and minimizes the presence of excessive toxins in our food, promoting healthier, more sustainable farming practices."
    },
    {
      id: 8,
      icon: <FaLeaf />,
      title: "Climate Change",
      dataIndustry: "climate",
      description: "Salesfield offers custom AI solutions aimed at reducing carbon footprints and creating more energy-efficient buildings.",
      fullDescription: "Salesfield offers custom AI solutions aimed at reducing carbon footprints and creating more energy-efficient buildings by predicting greenhouse gases (GHG) and hazardous gas emissions such as carbon monoxide, nitrogen gases, and others. Using advanced AI and machine learning, we analyze large volumes of environmental data to provide insights. Our AI/ML engine employs a proprietary algorithm to predict hazardous gas emissions from power generation plants."
    },
    {
      id: 9,
      icon: <FaHandHoldingHeart />,
      title: "Charitable Contributions",
      dataIndustry: "charitable",
      description: "Our customized AI solution utilizes powerful algorithms to enhance fundraising efforts by identifying patterns and targeting the right donors.",
      fullDescription: "Our customized AI solution utilizes powerful algorithms to enhance fundraising efforts by identifying patterns in data and targeting the right donors for specific donation campaigns. This approach streamlines the process, reducing time and labor costs by focusing on individuals most likely to support your cause, ultimately maximizing the effectiveness of your fundraising initiatives."
    },
    {
      id: 10,
      icon: <FaCar />,
      title: "Automotive",
      dataIndustry: "automotive",
      description: "Our AI-powered solution assists vehicle manufacturers in design, production, supply chain efficiency, and ADAS features integration.",
      fullDescription: "Our AI-powered solution assists vehicle manufacturers in designing and improving production processes, enhancing supply chain efficiency, and integrating advanced driver assistance systems (ADAS) features. Additionally, our solutions contribute to driver safety, fleet management, and automobile predictive maintenance, ensuring a more efficient and secure driving experience while optimizing operational performance for manufacturers and fleet operators."
    }
  ];

  const handleCardClick = (industry) => {
    setSelectedCard(industry);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="industries-page">
      <Header 
        title="Industries" 
        description="You can only profit from what you manage, and you can only manage what you measure." 
      />
      <div className="animated-title-container">
        <h2 className="animated-title">
          Explore How Salesfield Solves Complex Business Challenges for the World's Biggest Industries!
        </h2>
      </div>

      <div className="industries-grid">
        {industries.map((industry) => (
          <div 
            key={industry.id} 
            className="industry-card"
            data-industry={industry.dataIndustry}
            onClick={() => handleCardClick(industry)}
          >
            <div className="card-content">
              <div className="icon-container">
                {industry.icon}
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>&times;</button>
            <div className="popup-header">
              <div className="popup-icon">{selectedCard.icon}</div>
              <h2>{selectedCard.title}</h2>
            </div>
            <div className="popup-body">
              <p>{selectedCard.fullDescription}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
