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
        <p>Consulting Services means the provision of expertise or strategic advice that is presented for consideration and decision-making.</p>
    </div>


<div className="cards-container" onClick={handleServiceClick}>
  <div className="card">
    <img src={require('../assets/Utility.png')} alt="Card 1" className="card-image" />
    <h3 className="card-title">Utility services</h3>
    <p className="card-description">We provide solution to Utility service providers, businesses and individuals with our tools and technology to increase the visibility of consumption of energy and improve means and process to encourage saving energy that contributes to nation’s carbon neutrality.</p>
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/Business.png')} alt="Card 2" className="card-image" />
    <h3 className="card-title">Business services</h3>
    <p className="card-description">Rebate is often underestimated by companies and is thought as a cumbersome process by consumers. Our Instant rebate solutions helps companies to worry less about managing rebate process by making it instant right at the time of purchase, and allow them to concentrate on promotion of sales to increase revenue and of course customer data for future marketing.</p>
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/it-staff.png')} alt="Card 3" className="card-image" />
    <h3 className="card-title">IT Staff Augmentation</h3>
    <p className="card-description">We apply our expertise to bring to you the best employees as per your company’s niche and culture. Get rid of skimming through boring resumes and spend your time on productive stuff while we take charge of your recruitment through our Placement services. We understand the need of hiring qualified and experienced employees and nothing beats our team at this.</p>
  </div>
  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/application-development.png')} alt="Card 1" className="card-image" />
    <h3 className="card-title">Application Development</h3>
    <p className="card-description">We provide application development services to provide your business with highly functional and user-friendly applications developed in Java, .Net, iOs and Android platforms. Our products CryptoSurvey360, Clidiem speaks for themselves about the vision, Clarity and our expertise in delivering quality products.</p>
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/outsourcing.png')} alt="Card 2" className="card-image" />
    <h3 className="card-title">Outsourcing</h3>
    <p className="card-description">Business Process Outsourcing</p>
    <p className="card-description">Recruitment Process Outsourcing</p>
    
  </div>

  <div className="card" onClick={handleServiceClick}>
    <img src={require('../assets/Quality.png')} alt="Card 3" className="card-image" />
    <h3 className="card-title">Quality Assurance</h3>
    <p className="card-description">When it comes to maintaining quality, there is no room for errors, and to ensure that, robust testing is required. We provide quality assurance and testing services to help businesses across the world to reduce the time and effort in testing. We at Sidram  emphasis more on industry domain and technology based testing.</p>
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
