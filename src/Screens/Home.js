import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import './Home.css';
import { FaSeedling, FaUsers, FaHandHoldingHeart, FaShieldAlt, FaIndustry, 
         FaHeartbeat, FaUserTie, FaCar, FaCloudSun, FaChartLine, 
         FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoMdGitNetwork } from 'react-icons/io';

const industryCards = [
  { icon: <FaSeedling />, title: 'Agriculture' },
  { icon: <FaUsers />, title: 'Customer Retention/Service' },
  { icon: <FaHandHoldingHeart />, title: 'Charitable Contributions' },
  { icon: <FaShieldAlt />, title: 'Insurance' },
  { icon: <FaIndustry />, title: 'Manufacturing and IoT' },
  { icon: <FaHeartbeat />, title: 'Healthcare/Medical' },
  { icon: <FaUserTie />, title: 'Human Capital Management' },
  { icon: <FaCar />, title: 'Automotive' },
  { icon: <FaCloudSun />, title: 'Climate Change' },
  { icon: <FaChartLine />, title: 'Fintech' },
  { icon: <FaShoppingCart />, title: 'Retail' },
  { icon: <IoMdGitNetwork />, title: 'Supply Chain' }
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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isHovered && !isDragging) {
          if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1; // Slower scroll speed
          }
        }
      }, 50); // Increased interval for smoother scroll
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered, isDragging]);

  return (
    <div className='home'>
      <Header 
        title="Electricity, Water Whatever the Utility We Have the Solution" 
        description="here are many variations of passages of available, but the majority have suffered alteration in some form,words which don't look even slightly believable." 
      />
      
      <section className="team-section">
        <div className="team-content">
          <div className="team-text">
            <h2>We are a dedicated team of innovative Data Scientists, Software Engineers, Domain Experts, Analysts and more!</h2>
            <p>
              We are committed to simplifying complex use cases by using our proprietary 
              Minsky Al Engine to enable better outcomes that result in happier humans!
            </p>
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
            <h2>We are MINSKY™ - AI Engine</h2>
            <p>
              Our mission is to utilize Artificial Intelligence (AI) to execute tasks naturally 
              associated with human intelligence: speech recognition, decision-making, visual 
              perception, and language translation. To ensure success we deploy algorithms 
              spanning machine learning, deep learning, NLP and neural networks or any branch 
              of AI wherever required to perform complex tasks such as predictions, 
              recommendations, anomaly detection and much more.
            </p>
            <p>
              Using our proprietary Minsky™ AI platform we provide custom end-to-end innovative 
              solutions to drive business transformations resulting in smart processes and 
              data driven decisions.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </section>

      <section className="industries-section">
        <div className="industries-content">
          <h2>Explore How Minsky™ Solves Complex Business Challenges for the World's Biggest Industries!</h2>
          <div className="cards-container">
            <button 
              className="scroll-button left" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <div 
              className="cards-scroll" 
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                setIsHovered(false);
                handleMouseUp();
              }}
              onMouseEnter={() => setIsHovered(true)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
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
            <button 
              className="scroll-button right" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
