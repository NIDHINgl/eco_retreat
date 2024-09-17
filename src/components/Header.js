import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-customGreen shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-white font-bold text-2xl font-poppins">SR Eco Retreat</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300">
        Home
        </a>
          <a href="#accommodations" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300">
            Accommodations
          </a>
          <a href="#activities" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300">
            Activities
          </a>
          <a href="#map" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300">
            Location
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={`md:hidden ${isScrolled ?'bg-customGreen':''} text-white px-6 py-4 space-y-2 font-poppins`}>
          <a
            href="#home"
            className="block py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#accommodations"
            className="block py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Accommodations
          </a>
          <a
            href="#activities"
            className="block py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Activities
          </a>
          <a
            href="#map"
            className="block py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Loction
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
