import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; 
import Logo from "../assets/photos/others/eco-retreat.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
    const location = useLocation();

    
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            
            if (isHome) {
                if (window.scrollY > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);  

    const handleMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
    className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isHome && !isScrolled ? 'bg-customBlack shadow-lg py-4' : 'bg-customBlack shadow-lg py-4'
        }`}
>
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
            {/* <img src={Logo} alt="Eco Retreat" className="h-10 w-10 mr-4" /> Increased icon size */}
            <div className="text-white font-bold text-2xl font-cinzel">SR Eco Retreat</div>
        </div>
        <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300 font-raleway font-medium transition duration-300">Home</Link>
            <Link to="/accommodations" className="text-white hover:text-gray-300 font-raleway font-medium transition duration-300">Accommodations</Link>
            <Link to="/activities" className="text-white hover:text-gray-300 font-raleway font-medium transition duration-300">Activities</Link>
            <Link to="/gallery" className="text-white hover:text-gray-300 font-raleway font-medium transition duration-300">Gallery</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 font-raleway font-medium transition duration-300">Contact Us</Link>
        </nav>

        <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
    </div>

    {isMenuOpen && (
        <nav className={`md:hidden ${isScrolled || !isHome ? 'bg-customBlack' : 'bg-transparent'} text-white px-6 py-4 space-y-2 font-poppins`}>
            <Link to="/" className="block py-2 font-poppins" onClick={handleMenu}>Home</Link>
            <Link to="/accommodations" className="block py-2 font-raleway" onClick={handleMenu}>Accommodations</Link>
            <Link to="/activities" className="block py-2 font-raleway" onClick={handleMenu}>Activities</Link>
            <Link to="/gallery" className="block py-2 font-raleway" onClick={handleMenu}>Gallery</Link>
            <Link to="/contact" className="block py-2 font-raleway" onClick={handleMenu}>Contact Us</Link>
        </nav>
    )}
</header>

    );
};

export default Header;
