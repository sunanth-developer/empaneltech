import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Screens/Footer';
import Home from './Screens/Home';
import About from './Screens/About';
import Navbar from './Screens/Navbar';
import Contactus from './Screens/Contactus';
import SalesforceServices from './Screens/SalesforceServices';
import Careers from './Screens/Careers';
import Services from './Screens/Services';
import Admin from './Screens/AdminLogin/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/salesforce" element={<SalesforceServices />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
