import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderBlog = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-customGreen shadow-lg py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-white font-bold text-2xl font-poppins" onClick={handleLogoClick}>SR Eco Retreat</div>

      </div>
    </header>
  );
};

export default HeaderBlog;