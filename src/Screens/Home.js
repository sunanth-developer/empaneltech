import React from 'react';
import Header from './Header';
import './Home.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate('/services');
  };

  const handleSalesforceClick = () => {
    navigate('/salesforce');
  };

  const products = [
    {
      title: "Water Gold",
      description: "Smart water management solution"
    },
    {
      title: "CRM",
      description: "Customer relationship management system"
    },
    {
      title: "HCG-Smart Technology",
      description: "Healthcare management solution"
    },
    {
      title: "Rebate Instant",
      description: "Instant rebate processing system"
    }
  ];
  return (
    <div className='home'>
      <Header />
     

<div class="container">
        <h2>Our Services</h2>
        <p>Consulting Services refers to the delivery of specialized expertise or strategic guidance to assist in informed decision-making and problem-solving.</p>
    </div>


<div className="cards-container" onClick={handleServiceClick}>
  <div className="card">
    <img src={require('../assets/Utility.png')} alt="Card 1" className="card-image" />
    <h3 className="card-title">Utility services</h3>
    <p className="card-description">
    We offer solutions for utility service providers, businesses, and individuals through advanced tools and technology, enhancing energy consumption visibility and promoting processes that encourage energy savings, contributing to the nation’s carbon neutrality goals.</p>
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/Business.png')} alt="Card 2" className="card-image" />
    <h3 className="card-title">Business services</h3>
    <p className="card-description">Rebates are often undervalued by companies and perceived as a complex process by consumers. Our Instant Rebate Solutions simplify this by streamlining the process at the point of purchase, enabling companies to focus on boosting sales, increasing revenue, and gathering valuable customer data for future marketing efforts.</p>
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/it-staff.png')} alt="Card 3" className="card-image" />
    <h3 className="card-title">IT Staff Augmentation</h3>
    <p className="card-description">We leverage our expertise to connect you with top talent tailored to your company’s niche and culture. Say goodbye to sorting through countless resumes and focus on what matters most while we handle your recruitment needs through our Placement Services. We understand the importance of hiring skilled and experienced professionals, and our team excels at delivering the best candidates for your business.</p>
  </div>
  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/application-development.png')} alt="Card 1" className="card-image" />
    <h3 className="card-title">Application Development</h3>
    <p className="card-description">We offer application development services to empower your business with highly functional and user-friendly applications built on platforms such as Java, .Net, iOS, and Android. Our flagship products, **CryptoSurvey360** and **Clidiem**, reflect our vision, clarity, and commitment to delivering exceptional quality and innovation.</p>
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/outsourcing.png')} alt="Card 2" className="card-image" />
    <h3 className="card-title">Outsourcing</h3>
    <p className="card-description">Business Process Outsourcing & Recruitment Process Outsourcing</p>
    
    
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/Quality.png')} alt="Card 3" className="card-image" />
    <h3 className="card-title">Quality Assurance</h3>
    <p className="card-description">Maintaining quality leaves no room for errors, which is why robust testing is essential. At Empaneltech, we provide quality assurance and testing services that help businesses worldwide minimize testing time and effort. Our approach emphasizes industry-specific domains and technology-driven testing to deliver reliable results.</p>
  </div>
</div>





<div className="container" >
        <h2>Salesforce Services</h2>
        <p>Salesforce, Inc. is a cloud computing and social enterprise software-as-a-service (SaaS) provider based in San Francisco.</p>
    </div>
     

    <div className="blog-cards-container">
    <div className="blog-card">
        <img 
            src="https://www.intandemcommunications.co.uk/wp-content/uploads/2019/08/What-is-marketing.jpg" 
            alt="Marketing" 
            className="blog-card-image" 
        />
        <div className="blog-card-content">
            <h3 className="blog-card-title">Marketing & PR</h3>
            <p className="blog-card-description">
            We take you beyond the mechanics of these marketing & PR tools to help you leverage the cloud to gain customer insight and voice effective messaging.....
            </p>
            <a href="#" className="blog-read-more" onClick={handleSalesforceClick}>Read More</a>
        </div>
    </div>

    <div className="blog-card">
        <img 
            src="https://www.mbaskool.com/2019_images/stories/jul_images/sales_management.jpg" 
            alt="Sales Management" 
            className="blog-card-image" 
        />
        <div className="blog-card-content">
            <h3 className="blog-card-title">Sales Management</h3>
            <p className="blog-card-description">
                Discover effective techniques and strategies for managing sales teams and improving business performance through strategic sales approaches.
            </p>
            <a href="#" className="blog-read-more" onClick={handleSalesforceClick}>Read More</a>
        </div>
    </div>

    <div className="blog-card">
        <img 
            src="https://simplycontact.com/wp-content/uploads/2023/03/Customer-Support-Outsourcing-Department-1024x576.png" 
            alt="Customer Support" 
            className="blog-card-image" 
        />
        <div className="blog-card-content">
            <h3 className="blog-card-title">Customer Support Excellence</h3>
            <p className="blog-card-description">
                Learn about best practices in customer support and service delivery to enhance customer satisfaction and loyalty.
            </p>
            <a href="#" className="blog-read-more" onClick={handleSalesforceClick}>Read More</a>
        </div>
    </div>
</div>

<div className="products-section">
      <h2 className="products-title">Our Products</h2>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>

     
 
    </div>
  );
};

export default Home;
