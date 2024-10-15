import React from 'react';
import { FaInstagram, FaYoutube, FaTripadvisor, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' }); 

  return (
    <footer className="bg-customBlack p-6 text-white text-center">
      <p>SR Eco Retreat &copy; {new Date().getFullYear()}</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="https://www.youtube.com/@SREcoRetreat" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} />
        </a>
        <a href="https://www.instagram.com/sr_eco_retreat?igsh=b2JpaDF5ZDljY2w1" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61566486202483&mibextid=LQQJ4d" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} />
        </a>
        <a href="https://www.tripadvisor.in/" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FaTripadvisor size={24} />
        </a>
        <a href="https://www.linkedin.com/in/sr-eco-retreat-89b261330" className="hover:text-gray-300 transition duration-300" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} />
        </a>
      </div>
      <p className="mt-4">
              {isMobileOrTablet ? (
                <a href={`tel:+91-6361120392`}>
                  Contact us: +91-6361120392 <br /> <span className="font-light">(Ramesh C R)</span>
                </a>
              ) : (
                <span>
                  Contact us: +91-6361120392 <span className="font-light">(Ramesh C R)</span>
                </span>
              )}
            </p>
    </footer>
  );
};

export default Footer;