import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import './Home.css';
import { FaHospital, FaShoppingCart, FaUniversity, FaTruck, 
         FaPlane, FaHome, FaFilm, FaIndustry, 
         FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdGitNetwork } from 'react-icons/io';

const industryCards = [
  { icon: <FaHospital />, title: 'Healthcare' },
  { icon: <FaShoppingCart />, title: 'Retail and E-commerce' },
  { icon: <FaUniversity />, title: 'Banking and Financial Services' },
  { icon: <FaTruck />, title: 'Supply Chain and Logistics' },
  { icon: <FaPlane />, title: 'Travel' },
  { icon: <FaHome />, title: 'Real Estate' },
  { icon: <FaFilm />, title: 'Media and Entertainment' },
  { icon: <FaIndustry />, title: 'Manufacturing' }
];

const Home = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector('.industry-card').offsetWidth;
    const scrollAmount = cardWidth + 32; // card width + gap

    if (container) {
      container.scrollTo({
        left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  // Handle drag to scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isHovered && !isDragging) {
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            const cardWidth = scrollContainer.querySelector('.industry-card').offsetWidth;
            scrollContainer.scrollLeft += 1; // Consistent scroll speed for all devices
          }
        }
      }, 30); // Faster interval for smoother scroll
    };

    startAutoScroll();

    // Clear interval on component unmount
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered, isDragging]);

  return (
    <div className='home'>
      <Header 
        title=" AI -ArtificIal Intellignece is the future Natural Intelligence and we are proud to bridge the PATH" 
        description="" 
      />
      
      <section className="team-section">
        <div className="team-content">
          <div className="team-text">
            <h4>Let us help you get the most out of Sales Cloud. We know the sales environment and how process, technology and information mobility must come together to ensure the demands of the sales organization are met.</h4>
            <p>
            Customized Platforms, solutions and adaptations
            </p>
            <p>Interactive consultations throughout the planning, development and implementation process</p>
            <p>Reduced number of clicks and streamlined procedures</p>
            <p>Onsite/remote training.</p>
          </div>
          <div className="team-image">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Team Collaboration" 
            />
          </div>
        </div>
      </section>

      <section className="minsky-section">
        <div className="minsky-content">
          <div className="minsky-image">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="AI Technology" 
            />
          </div>
          <div className="minsky-text">
            <h2>OPERATIONAL EFFICIENCY FORCE.COM DEVELOPMENT</h2>
            <p>
            Streamline procedures and processes with. Our training and development team can help you get the most out of Force.com by creating a customized platform tailored to the contours of your business. Get everything you need from Force.com while eliminating everything you don't.
            </p>
            <p>
            Customized Platforms, solutions and adaptations
            </p>
            <p>Interactive consultations throughout the planning, development and implementation process</p>
            <p>Reduced number of clicks and streamlined procedures</p>
            <p>Onsite/remote training.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="industries-content">
          
          <div className="cards-container">
            
            <div 
              className={`cards-scroll ${isDragging ? 'dragging' : ''}`}
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                handleMouseUp();
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {[...industryCards, ...industryCards].map((card, index) => (
                <div 
                  className="industry-card" 
                  key={index}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                  <div className="card-icon">
                    {card.icon}
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
