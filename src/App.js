import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';

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
    <Router>
    <Header />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
