import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Accommodations from './pages/Accommodations';
import Activities from './pages/Activities';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ScrollToSection = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Scroll to the specific section if the URL contains a hash
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to the top if there's no hash
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
    <Header />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
