import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import Logo from '../assets/eco-retreat.svg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Get the current route
    const location = useLocation();

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            // Only change scroll effect for home page
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
    }, [isHome]);  // Re-run the scroll logic when route changes

    const handleMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isHome && !isScrolled ? 'bg-transparent py-4' : 'bg-customBlack shadow-lg py-2'
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                <div className="flex items-center">
                    <img src={Logo} alt="Eco Retreat" className="h-8 w-8 mr-4" />
                    <div className="text-white font-bold text-2xl font-serif">SR Eco Retreat</div>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300 font-serif">Home</Link>
                    <Link to="/accommodations" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300 font-serif">Accommodations</Link>
                    <Link to="/activities" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300 font-serif">Activities</Link>
                    <Link to="/gallery" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300 font-serif">Gallery</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300 font-poppins font-bold transition duration-300 font-serif">Contact Us</Link>
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
                    <Link to="/" className="block py-2 font-serif" onClick={handleMenu}>Home</Link>
                    <Link to="/accommodations" className="block py-2 font-serif" onClick={handleMenu}>Accommodations</Link>
                    <Link to="/activities" className="block py-2 font-serif" onClick={handleMenu}>Activities</Link>
                    <Link to="/gallery" className="block py-2 font-serif" onClick={handleMenu}>Gallery</Link>
                    <Link to="/contact" className="block py-2 font-serif" onClick={handleMenu}>Contact Us</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
