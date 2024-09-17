import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <footer className="bg-customGreen p-6 text-white text-center">
    <p>SR Eco Retreat &copy; {new Date().getFullYear()}</p>
    <div className="mt-4 flex justify-center space-x-6">
      <a href="https://facebook.com" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={24} />
      </a>
      <a href="https://www.instagram.com/sr_eco_retreat?igsh=b2JpaDF5ZDljY2w1" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </div>
    <p className="mt-4">Contact us: +91-6361120392</p>
  </footer>
);

export default Footer;
