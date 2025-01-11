import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import './Expertise.css';
import { 
  FaCode, 
  FaCogs, 
  FaDatabase, 
  FaBrain, 
  FaRobot, 
  FaMicrochip, 
  FaCloud, 
  FaDocker, 
  FaPencilRuler, 
  FaShieldAlt, 
  FaTools, 
  FaServer, 
  FaGlobe, 
  FaMobile, 
  FaCheckCircle, 
  FaSync, 
  FaChartLine, 
  FaNetworkWired, 
  FaChartBar, 
  FaChartPie, 
  FaMoneyBillWave, 
  FaComments, 
  FaCamera, 
  FaFileAlt, 
  FaSitemap, 
  FaUsers, 
  FaPalette, 
  FaLayerGroup, 
  FaCloudUploadAlt,
  FaChartArea,
  FaLightbulb,
  FaUserTie,
  FaFileContract,
  FaRocket,
  FaPlug,
  FaRoute,
  FaExchangeAlt,
  FaCodeBranch,
  FaBoxOpen,
  FaDesktop,
  FaMobileAlt,
  FaUserCog,
  FaSearch
} from 'react-icons/fa';

const expertiseData = {
  'platform-development': {
    title: 'PLATFORM DEVELOPMENT',
    headerTitle: 'Platform Development',
    headerDescription: 'Time to remodel your technical architecture! Evolve from a rigid legacy core system to an agile, modular ecosystem of connected layers powered by cloud architecture, microservices, and internal + external APIs.',
    subDescription: 'With our platform engineering expertise and your product vision, we can create a thriving ecosystem of integrated solutions and service providers so you can tap into economies of scale without being tied down with high production costs.',
    description: 'Online platforms generally provide a broader range of solutions compared to off-the-shelf products. We assist our clients in positioning themselves as market leaders across multiple sectors by launching innovative and scalable B2B solutions as service offerings.',
    image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=80',
    icon: <FaCode />,
    services: [
      {
        title: 'Digital Platform Design & Development',
        description: 'End-to-end platform development with modern architecture and scalable design',
        icon: <FaCode />
      },
      {
        title: 'API and System Integration',
        description: 'Seamless integration of internal and external systems through robust APIs',
        icon: <FaCogs />
      },
      {
        title: 'Platform Governance',
        description: 'Comprehensive platform management and governance frameworks',
        icon: <FaShieldAlt />
      },
      {
        title: 'Platform Maintenance & Support',
        description: '24/7 platform monitoring, maintenance, and technical support',
        icon: <FaTools />
      },
      {
        title: 'Infrastructure IT Services Optimization',
        description: 'Optimization and automation of IT infrastructure services',
        icon: <FaServer />
      },
      {
        title: 'Data Engineering',
        description: 'Advanced data engineering solutions for platform scalability',
        icon: <FaDatabase />
      }
    ]
  },
  'custom-development': {
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    headerTitle: 'Custom Software Development',
    headerDescription: 'Salesfield is a full-stack, multidisciplinary custom software development company dedicated to creating impactful AI-based solutions for leading companies across various industries. Leveraging our extensive expertise, technological vision, and efficient processes, we offer end-to-end custom software development to transform your use cases into powerful growth enablers. Our developers are highly skilled professionals who align with your business culture and take full responsibility for custom business application development, guiding you from initial ideation and solution discovery to quality control and final deployment.',
    subDescription: 'Our developers are technologically savvy professionals who share your business culture and take full responsibility for custom business application development, supporting you from early ideation and solution discovery through quality control and final deployment.',
    description: 'Our optimized solution is transparent, client-focused, and features streamlined end-to-end processes for custom software application development, enabling us to deliver predictable and measurable results within a defined timeframe.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    icon: <FaCogs />,
    services: [
      {
        title: 'Web Software Development',
        description: 'Custom web applications built with cutting-edge technologies and frameworks to deliver scalable, secure, and high-performance solutions.',
        icon: <FaGlobe />
      },
      {
        title: 'Mobile Software Development',
        description: 'Native and cross-platform mobile applications designed to provide seamless user experiences across all devices.',
        icon: <FaMobile />
      },
      {
        title: 'Quality Assurance & Testing',
        description: 'Comprehensive testing strategies ensuring your software meets the highest quality standards and performs flawlessly.',
        icon: <FaCheckCircle />
      },
      {
        title: 'Legacy System Modernization',
        description: 'Transform outdated systems into modern, efficient applications while preserving critical business logic and data.',
        icon: <FaSync />
      },
      {
        title: 'Custom UI/UX Design',
        description: 'User-centered design approach creating intuitive, engaging, and visually appealing interfaces that enhance user satisfaction.',
        icon: <FaPencilRuler />
      }
    ]
  },
  'big-data': {
    title: 'BIG DATA & ANALYTICS',
    headerTitle: 'Big Data & Analytics',
    headerDescription: 'At AI Labs, we utilize advanced big data and business intelligence tools to help clients extract actionable insights from diverse data sets generated in real time and at scale. This enables businesses to enhance operations and gain a competitive edge. We assist organizations in consolidating vast amounts of structured, semi-structured, and unstructured data from multiple sources into a unified environment, which can be leveraged for modeling and uncovering new market and business opportunities.',
    subDescription: 'Our company provides a complete suite of big data services, from consulting and strategy development to ongoing infrastructure maintenance and support. This enables clients to unlock vital insights from previously untapped data assets tailored to their specific business use cases.',
    description: 'We apply a proprietary big data framework integrated with leading data warehouses such as DataBricks, Snowflake, and Hadoop, while utilizing advanced machine learning, deep learning, and neural network algorithms from Minsky™.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    icon: <FaDatabase />,
    services: [
      {
        title: 'Big Data Consulting',
        description: 'Strategic consulting to help organizations develop and implement comprehensive big data strategies aligned with business objectives.',
        icon: <FaChartLine />
      },
      {
        title: 'Data Infrastructure & Engineering',
        description: 'Design and implementation of scalable data infrastructure using modern technologies and best practices for efficient data processing.',
        icon: <FaNetworkWired />
      },
      {
        title: 'BI and Data Analytics',
        description: 'Advanced analytics solutions leveraging machine learning and AI to transform raw data into actionable business insights.',
        icon: <FaChartBar />
      },
      {
        title: 'Data Visualization',
        description: 'Interactive dashboards and visual analytics tools that make complex data easily understandable and actionable.',
        icon: <FaChartPie />
      },
      {
        title: 'Data Security',
        description: 'Comprehensive data protection solutions ensuring compliance with regulations while maintaining data accessibility.',
        icon: <FaShieldAlt />
      },
      {
        title: 'Data Monetization',
        description: 'Strategies and solutions to help organizations generate value from their data assets through various monetization models.',
        icon: <FaMoneyBillWave />
      }
    ]
  },
  'machine-learning': {
    title: 'Machine Learning and Artificial Intelligence development services at salesfield',
    headerTitle: 'Machine Learning & Artificial Intelligence',
    headerDescription: 'The salesfield team leverages deep technological expertise in machine learning and artificial intelligence to help clients develop complex, scalable solutions tailored to their specific use cases. Our R&D capabilities and AI software development services for rapid prototyping and custom machine learning solutions empower clients to explore untapped market segments, increase efficiency, and achieve measurable business outcomes. We are committed to exceeding customer expectations by delivering AI-driven software solutions and machine learning development services that enhance and transform businesses.',
    subDescription: 'We help organizations harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create innovative solutions that drive business growth.',
    description: 'Our AI solutions are designed to solve complex business challenges through intelligent automation, predictive analytics, and cognitive computing.',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
    icon: <FaBrain />,
    services: [
      {
        title: 'Deep Learning Solutions',
        description: 'Advanced neural networks and deep learning models for complex pattern recognition and prediction tasks.',
        icon: <FaNetworkWired />
      },
      {
        title: 'Natural Language Processing',
        description: 'Text analysis, sentiment analysis, and language understanding systems for automated communication.',
        icon: <FaComments />
      },
      {
        title: 'Computer Vision',
        description: 'Image and video analysis systems for object detection, recognition, and visual inspection.',
        icon: <FaCamera />
      },
      {
        title: 'Predictive Analytics',
        description: 'AI-powered forecasting and prediction systems for business intelligence and decision making.',
        icon: <FaChartLine />
      }
    ]
  },
  'rpa': {
    title: 'ROBOTIC PROCESS AUTOMATION',
    headerTitle: 'Robotic Process Automation',
    headerDescription: 'At Salesfield, we help our clients streamline and automate manual workflows to achieve operational excellence by utilizing software robots to handle a wide range of repetitive, high-volume, rule-based, and trigger-driven tasks. Our team of RPA developers works closely with businesses to identify legacy processes that can be transitioned to a digital automation flow, improving efficiency and reducing the burden on human employees. This creates a strong foundation for scaling intelligent automation across the organization.',
    subDescription: 'Our tailored RPA services: No matter where you are in your RPA journey — from assessing ideas to implementing a long-term vision — our RPA team can assist you each step of the way. We will help you identify the optimal approach to automate your workflow, select an initial use case, and develop a custom solution to accommodate your specific business needs — whether you need basic automation or a sophisticated RPA initiative to pave the way for further digital transformation.',
    description: 'Leverage the power of automation to transform your business processes and achieve operational excellence.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    icon: <FaRobot />,
    useCases: [
      {
        title: 'Document Processing',
        description: 'Automated extraction and processing of data from various document formats',
        icon: <FaFileAlt />
      },
      {
        title: 'Front-office Support',
        description: 'Streamlined customer service and front-office operations',
        icon: <FaUserTie />
      },
      {
        title: 'Paperless Reporting',
        description: 'Automated report generation and distribution',
        icon: <FaFileContract />
      },
      {
        title: 'Regulatory Compliance',
        description: 'Automated compliance monitoring and reporting',
        icon: <FaShieldAlt />
      }
    ],
    services: [
      {
        title: 'RPA Consulting',
        description: 'Strategic guidance for RPA implementation and optimization',
        icon: <FaLightbulb />
      },
      {
        title: 'Automation Design',
        description: 'Custom design of automated workflows and processes',
        icon: <FaSitemap />
      },
      {
        title: 'RPA Development',
        description: 'Development and deployment of RPA solutions',
        icon: <FaRobot />
      },
      {
        title: 'Infrastructure and Automation Support',
        description: 'Comprehensive support for RPA infrastructure and operations',
        icon: <FaCogs />
      },
      {
        title: 'Managed RPA Services',
        description: 'End-to-end management of RPA solutions and processes',
        icon: <FaTools />
      }
    ]
  },
  'iot': {
    title: 'INTERNET OF THINGS',
    headerTitle: 'Internet of Things',
    headerDescription: 'At AI Labs, we collaborate with IoT providers to deliver enterprise solutions across industries such as automotive, transportation, real estate, retail, agriculture, manufacturing, energy, water, and more. We help unlock the business value of connected devices and enable clients to monetize the vast amounts of data already being collected. Our cross-functional team of experts assists organizations in selecting the right IoT technology stack to build data-rich software solutions that perfectly align with their specific use cases.',
    subDescription: 'We help businesses leverage IoT technology to create connected ecosystems that drive efficiency, innovation, and growth.',
    description: 'AI-enabled IoT creates intelligent machines that simulate smart behavior and support decision-making with minimal to no human intervention. While IoT focuses on data acquisition from remote devices and sensors, AI-based analytics through Salesfield allows devices to learn from their data and experience. We offer custom IoT development services that enable businesses to enhance operational efficiency, streamline processes, and provide data visibility. By integrating IoT applications, sensors, mobile devices, cloud services, and physical objects, we build a hyper-connected ecosystem using Salesfield that empowers businesses to operate smarter and more effectively.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
    icon: <FaMicrochip />,
    services: [
      {
        title: 'IoT Consulting',
        description: 'Strategic guidance on IoT implementation, architecture design, and technology selection to align with your business objectives.',
        icon: <FaLightbulb />
      },
      {
        title: 'Full Cycle IoT Development',
        description: 'End-to-end IoT solution development from concept to deployment, including hardware integration and software development.',
        icon: <FaCogs />
      },
      {
        title: 'IoT Software Enhancement',
        description: 'Optimization and enhancement of existing IoT solutions to improve performance, scalability, and functionality.',
        icon: <FaRocket />
      },
      {
        title: 'IoT Application Implementation & Analytics',
        description: 'Development of custom IoT applications with advanced analytics capabilities for real-time monitoring and insights.',
        icon: <FaChartArea />
      },
      {
        title: 'IoT Integration with Salesfield',
        description: 'Seamless integration of IoT solutions with Salesfield platform for enhanced data management and business intelligence.',
        icon: <FaPlug />
      }
    ]
  },
  'cloud': {
    title: 'CLOUD SERVICES',
    headerTitle: 'Cloud Services',
    headerDescription: 'Salesfield cloud computing consultants help organizations streamline cloud implementation and transformation through in-depth analysis of potential risks and opportunities. Whether cloud computing is central to your IT ecosystem or youre just beginning to explore its potential, we can guide you in developing and executing a customized strategy to drive growth and innovation. Our expertise spans a wide range of cloud platforms, including AWS, Azure, Google Cloud, and more, ensuring that we provide the best solutions tailored to your specific needs.',
    subDescription: 'We help organizations leverage cloud technologies to optimize costs, improve performance, and enhance security while ensuring seamless integration with existing systems.',
    description: 'Transform your IT infrastructure with our modern cloud solutions that provide scalability, flexibility, and innovation. Our expert team guides you through every step of your cloud journey, from strategy development to implementation and ongoing management.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    icon: <FaCloud />,
    services: [
      {
        title: 'Cloud Consulting Strategy Road-map',
        description: 'Develop a comprehensive cloud strategy aligned with your business objectives and digital transformation goals.',
        icon: <FaRoute />
      },
      {
        title: 'Cloud Cost Optimization',
        description: 'Optimize cloud spending through efficient resource allocation, right-sizing, and implementation of cost management best practices.',
        icon: <FaMoneyBillWave />
      },
      {
        title: 'Cloud Migration Preparation',
        description: 'Thorough assessment and planning for seamless migration of applications and infrastructure to the cloud.',
        icon: <FaExchangeAlt />
      },
      {
        title: 'Cloud Performance Monitoring',
        description: 'Continuous monitoring and optimization of cloud resources to ensure optimal performance and reliability.',
        icon: <FaChartLine />
      },
      {
        title: 'Cloud Operational Activities',
        description: 'Day-to-day management and maintenance of cloud infrastructure to ensure smooth operations.',
        icon: <FaCogs />
      },
      {
        title: 'Cloud Security Assurance',
        description: 'Implementation of robust security measures and compliance frameworks to protect cloud infrastructure and data.',
        icon: <FaShieldAlt />
      }
    ]
  },
  'devops': {
    title: 'DEVOPS',
    headerTitle: 'DevOps Services',
    headerDescription: 'Accelerate your software development to match the pace of your business with Salesfield DevOps services. We enable continuous deployment of optimized code at greater speed and with fewer failures. This is achieved by dividing teams into smaller, more agile groups across engineering, development, quality, and security functions. Our approach shifts traditional collaboration between development and operations teams to the cloud, leveraging stackable virtual development tools to automate many processes and ensure efficiency.',
    subDescription: 'Regardless of where clients are in their DevOps journey, we assist them in advancing sustainably to meet their KPIs. We work closely with our clients to develop a DevOps strategy tailored to their specific requirements, providing clear visibility into their current application development lifecycle.',
    description: 'Our DevOps team helps clients achieve three key scalable software development goals: Faster software deployments,Universal code security, and Top-level predictability for new functionality. Regardless of where clients are in their DevOps journey, we assist them in advancing sustainably to meet their KPIs. We work closely with our clients to develop a DevOps strategy tailored to their specific requirements, providing clear visibility into their current application development lifecycle. Our business practices empower clients to step away from daily operational chaos and transition to a structured development environment. This environment is optimized for frequent, automated deployments of fully tested releases with scalable, domain-agnostic code.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    icon: <FaDocker />,
    services: [
      {
        title: 'Continuous Feedback',
        description: 'Implement feedback loops throughout the development lifecycle to ensure continuous improvement and quality.',
        icon: <FaComments />
      },
      {
        title: 'Continuous Integration',
        description: 'Automate code integration processes to detect and address integration issues early in development.',
        icon: <FaCodeBranch />
      },
      {
        title: 'Continuous Deployment',
        description: 'Streamline and automate the deployment process for faster and more reliable software delivery.',
        icon: <FaRocket />
      },
      {
        title: 'Code Development Infrastructure',
        description: 'Set up and maintain robust development environments with modern tools and practices.',
        icon: <FaCode />
      },
      {
        title: 'Configuration Management',
        description: 'Implement version control and automation for infrastructure and application configurations.',
        icon: <FaCogs />
      },
      {
        title: 'Continuous Monitoring & Testing',
        description: 'Establish comprehensive monitoring and automated testing frameworks for quality assurance.',
        icon: <FaChartLine />
      },
      {
        title: 'Release Management',
        description: 'Coordinate and automate the software release process for consistent and reliable deployments.',
        icon: <FaBoxOpen />
      },
      {
        title: 'DevSecOps',
        description: 'Integrate security practices throughout the development lifecycle for enhanced application security.',
        icon: <FaShieldAlt />
      }
    ]
  },
  'ui-ux': {
    title: 'UI/UX DESIGN',
    headerTitle: 'UI/UX Design',
    headerDescription: 'At Salesfield we believe that great design creates a powerful first impression. Businesses and brands increasingly recognize the critical role of user experience (UX) in their growth strategies. Augmenting product and service innovation with strong UI/UX capabilities is no longer optional—it is essential.  We help our clients achieve digital excellence by crafting memorable experiences, whether for launching a new product, revamping an existing solution, or prototyping a fresh idea. At AI Labs, we offer a comprehensive range of UI/UX services designed to build efficient customer retention strategies and enable brands to create authentic, human-centered identities that engage, excite, and earn trust.  Our approach encourages organizations to define their image through impactful UI design and inspire users with thoughtful UX design. By offering a wide spectrum of services, we can significantly reduce delivery times—often by a third or even half.  Our expertise encompasses prototyping, wireframing, user flows, and mockups using tools like Adobe XD, Illustrator, and more. Showcase your brand and exceed user expectations with our tailored UI/UX design services.',
    subDescription: 'We help organizations design intuitive and engaging digital experiences that delight users and drive business results.',
    description: 'Transform user experiences with modern design solutions.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    icon: <FaPencilRuler />,
    services: [
      {
        title: '',
        description: '',
        icon: <FaUsers />
      },
      {
        title: '',
        description: '',
        icon: <FaPalette />
      },
      {
        title: 'UX Design',
        description: 'Design of seamless and engaging user experiences.',
        icon: <FaPencilRuler />
      },
      {
        title: 'Prototyping',
        description: 'Development of interactive prototypes for user testing.',
        icon: <FaLayerGroup />
      }
    ]
  }
};

// Update the header styles for better presentation
const customHeaderStyles = {
  'custom-development': {
    backgroundImage: 'url("https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1920&q=80")',
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    accentColor: '#4a90e2'
  }
};

export default function Expertise() {
  const { expertiseId } = useParams();
  const navigate = useNavigate();
  const [activeExpertise, setActiveExpertise] = React.useState(expertiseId || 'platform-development');

  useEffect(() => {
    if (expertiseId && expertiseData[expertiseId]) {
      setActiveExpertise(expertiseId);
    }
  }, [expertiseId]);

  const handleExpertiseChange = (newExpertise) => {
    setActiveExpertise(newExpertise);
    navigate(`/expertise/${newExpertise}`);
  };

  const currentExpertise = expertiseData[activeExpertise];

  if (!currentExpertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <div className="expertise-container">
      <Header 
        title={currentExpertise.headerTitle}
        description={currentExpertise.headerDescription}
        subDescription={currentExpertise.subDescription}
        styles={customHeaderStyles[activeExpertise]}
      />

      <section className="expertise-content">
        <div className="expertise-main">
          <div className="expertise-text">
            <h2>{currentExpertise.title}</h2>
            <p>{currentExpertise.description}</p>
          </div>
          <div className="expertise-image">
            <img src={currentExpertise.image} alt={currentExpertise.title} />
          </div>
        </div>

        {activeExpertise === 'machine-learning' && (
          <img 
            src="https://www.idexcel.com/img/AWS-AI-&-ML-Services.jpg"
            alt="AWS AI & ML Services"
            style={{
              width: '100%',
              maxWidth: '800px',
              margin: '2rem auto',
              display: 'block'
            }}
          />
        )}

        {activeExpertise === 'ui-ux' && (
          <div className="uiux-intro">
            <h2>We Make UI/UX Simple & Easy!</h2>
            
            <div className="uiux-description">
              <p>Our design experts apply proven approaches to design, prototyping, product validation and offer UI design services to create applications that are user-friendly. We can create an impact with a great deal of experience in different types of industries such as Finance, Healthcare, Manufacturing, Power & Energy, Oil & Gas Retail and Distribution etc.</p>
              <p>We help our clients' businesses to build strong relationship with their customers through attractive visual designs and memorable brand experiences. Ultra-personalization designs are shaping the behavior of today's consumers, which is why we apply human-centric user experience services to build brand loyalty to match the specific business goals.</p>
            </div>

            <div className="design-services-grid">
              <div className="design-service">
                <div className="design-icon">
                  <FaDesktop />
                </div>
                <h3>Web Design</h3>
              </div>
              <div className="design-service">
                <div className="design-icon">
                  <FaMobileAlt />
                </div>
                <h3>Mobile App Design</h3>
              </div>
              <div className="design-service">
                <div className="design-icon">
                  <FaPalette />
                </div>
                <h3>Graphic Design</h3>
              </div>
              <div className="design-service">
                <div className="design-icon">
                  <FaUserCog />
                </div>
                <h3>High Quality Human Machine Interface Design</h3>
              </div>
            </div>
            
            <div className="approach-section">
              <h2>Our Approach</h2>
              <div className="approach-phases">
                <div className="phase-card">
                  <div className="phase-number">01</div>
                  <div className="phase-icon">
                    <FaSearch />
                  </div>
                  <h3>Discovery and Research Phase</h3>
                  <div className="phase-line"></div>
                </div>

                <div className="phase-card">
                  <div className="phase-number">02</div>
                  <div className="phase-icon">
                    <FaChartBar />
                  </div>
                  <h3>Design Analysis Phase</h3>
                  <div className="phase-line"></div>
                </div>

                <div className="phase-card">
                  <div className="phase-number">03</div>
                  <div className="phase-icon">
                    <FaPencilRuler />
                  </div>
                  <h3>Prototype Build Phase</h3>
                  <div className="phase-line"></div>
                </div>

                <div className="phase-card">
                  <div className="phase-number">04</div>
                  <div className="phase-icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Validation & Delivery Phase</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeExpertise !== 'ui-ux' && (
          <div className="platform-development">
            <h2>Platform Development Services</h2>
            <div className="services-grid">
              {currentExpertise.services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeExpertise === 'rpa' && (
          <div className="rpa-use-cases">
            <h2>RPA Use Cases</h2>
            <div className="use-cases-grid">
              {currentExpertise.useCases.map((useCase, index) => (
                <div className="use-case-card" key={index}>
                  <div className="use-case-icon">
                    {useCase.icon}
                  </div>
                  <h4>{useCase.title}</h4>
                  <p>{useCase.description}</p>
                </div>
              ))}
            </div>

            <div className="rpa-services-intro">
              <h2>Our Tailored RPA Services</h2>
              <p>Our tailored RPA services are designed to support you at every stage of your automation journey, whether you're just starting with an idea or looking to implement a long-term vision. Our RPA team will guide you in identifying the most effective approach to automate your workflows, select an initial use case, and develop a custom solution that meets your unique business requirements. Whether you need simple automation or a complex RPA initiative to drive broader digital transformation, we are here to help you achieve your goals.</p>
            </div>

            <div className="process-section">
              <h2>Our 5-Step Process</h2>
              <div className="process-timeline">
                {currentExpertise.services.map((service, index) => (
                  <div className="process-step" key={index}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <div className="step-icon">{service.icon}</div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        
      </section>
    </div>
  );
}
