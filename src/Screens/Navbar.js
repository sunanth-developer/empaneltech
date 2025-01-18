import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (activeDropdown) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (dropdown) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const handleNavigation = (path, id) => {
    setIsOpen(false);
    setActiveDropdown(null);
    navigate(path);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownItemClick = (path, id) => {
    handleNavigation(path, id);
    handleLinkClick(); // Close menu after navigation
  };

  const salesfieldDropdownItems = [
    { 
      title: 'About SalesField', 
      path: '/salesfield',
      id: 'salesfield'
    },
    { 
      title: 'Why SalesField', 
      path: '/whysalesfield',
      id: 'whysalesfield'
    },
    { 
      title: ' Key benefits of SalesField', 
      path: '/keybenefits',
      id: 'keybenefits'
    },
    { 
      title: 'SalesField at the edge', 
      path: '/salesfieldattheedge',
      id: 'salesfieldattheedge'
    }
  ];
  const servicesDropdownItems = [
    { 
      title: 'Utility Services', 
      path: '/services',
      id: 'utility-services'
    },
    { 
      title: 'Business Services', 
      path: '/services',
      id: 'business-services'
    },
    { 
      title: 'IT Staff Augmentation', 
      path: '/services',
      id: 'staff-augmentation'
    },
    { 
      title: 'Custom Application Development', 
      path: '/services',
      id: 'custom-development'
    },
    { 
      title: 'Outsourcing', 
      path: '/services',
      id: 'outsourcing'
    },
    { 
      title: 'Quality Assurance & Testing', 
      path: '/services',
      id: 'quality-assurance'
    }
  ];
  const projectsCompletedDropdownItems = [
   
    { 
      title: 'ReBate instant project', 
      path: '/projectscompleted',
      id: 'projects-completed'
    }
  ];

  const expertiseDropdownItems = [
    { 
      title: 'Platform Development',
      path: '/expertise/platform-development',
      id: 'platform-development'
    },
    { 
      title: 'Custom Development',
      path: '/expertise/custom-development',
      id: 'custom-development'
    },
    { 
      title: 'Big Data & Analytics',
      path: '/expertise/big-data',
      id: 'big-data'
    },
    { 
      title: 'Machine Learning & AI',
      path: '/expertise/machine-learning',
      id: 'machine-learning'
    },
    { 
      title: 'RPA',
      path: '/expertise/rpa',
      id: 'rpa'
    },
    { 
      title: 'Internet Of Things',
      path: '/expertise/iot',
      id: 'iot'
    },
    { 
      title: 'Cloud',
      path: '/expertise/cloud',
      id: 'cloud'
    },
    { 
      title: 'DevOps',
      path: '/expertise/devops',
      id: 'devops'
    },
    { 
      title: 'UI/UX Design',
      path: '/expertise/ui-ux',
      id: 'ui-ux'
    }
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      <button 
        className={`menu-toggle ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
       {/* <li><Link to="/industries" onClick={handleLinkClick}>Industries</Link></li> */}

        <li className={`dropdown ${activeDropdown === 'salesfield' ? 'active' : ''}`}>
          <button 
            className="dropdown-toggle"
            onClick={() => handleDropdownClick('salesfield')}
          >
            SalesField <span className="arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            {salesfieldDropdownItems.map((item, index) => (
              <li key={index}>
                <button 
                  className="dropdown-link"
                  onClick={() => handleDropdownItemClick(item.path, item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </li>

        <li className={`dropdown ${activeDropdown === 'services' ? 'active' : ''}`}>
          <button 
            className="dropdown-toggle"
            onClick={() => handleDropdownClick('services')}
          >
            Services <span className="arrow">▼</span>
          </button>
          <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
            {servicesDropdownItems.map((item, index) => (
              <li key={index}>
                <button 
                  className="dropdown-link"
                  onClick={() => handleNavigation(item.path, item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </li>
      
      {/*  <li className={`dropdown ${activeDropdown === 'expertise' ? 'active' : ''}`}>
          <button 
            className="dropdown-toggle"
            onClick={() => handleDropdownClick('expertise')}
          >
            Expertise <span className="arrow">▼</span>
          </button>
          <ul className={`dropdown-menu ${activeDropdown === 'expertise' ? 'show' : ''}`}>
            {expertiseDropdownItems.map((item, index) => (
              <li key={index}>
                <button 
                  className="dropdown-link"
                  onClick={() => handleNavigation(item.path, item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </li>
        */}
        <li className={`dropdown ${activeDropdown === 'projectscompleted' ? 'active' : ''}`}>
          <button 
            className="dropdown-toggle"
            onClick={() => handleDropdownClick('projectscompleted')}
          >
            Projects Completed <span className="arrow">▼</span>
          </button>
          <ul className={`dropdown-menu ${activeDropdown === 'projectscompleted' ? 'show' : ''}`}>
            {projectsCompletedDropdownItems.map((item, index) => (
              <li key={index}>
                <button 
                  className="dropdown-link"
                  onClick={() => handleNavigation(item.path, item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li><Link to="/careers" onClick={handleLinkClick}>Careers</Link></li>
        <li><Link to="/contactus" onClick={handleLinkClick}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
