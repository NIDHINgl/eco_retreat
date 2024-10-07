import React, { useState, useEffect } from 'react';
import image1 from '../assets/slide1.jpg';
import image2 from '../assets/slide2.jpeg';
import image3 from '../assets/Sliding3.jpeg';

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    const slides = [
        { type: 'image', src: image1, description: 'Reconnect with Nature at SR Eco Retreat – Your Perfect Weekend Getaway near Bangalore!' },
        { type: 'image', src: image2, description: 'Experience Hands-On Farming and Animal Interaction at Our Eco-Friendly Farm Stay near Bangalore!' },
        { type: 'image', src: image3, description: 'Relax in Comfortable Accommodations Surrounded by Nature at One of the Best Resorts near Bangalore!' },
        { type: 'image', src: image1, description: 'Savor Farm-Fresh, Organic Meals from Local Ingredients at Our Eco Resort near Bangalore!' },
        { type: 'image', src: image2, description: 'Adventure Awaits: Trek, Cycle, and Explore Scenic Trails at Our Nature Resort near Bangalore!' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            setShowButtons(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setShowButtons(false);
            }, 3000);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    const renderSlides = () => {
        return (
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        className="w-full h-[50vh] lg:h-screen object-cover flex-shrink-0"
                        src={slide.src}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <section id="home" className="relative h-[50vh] lg:h-screen overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                {renderSlides()}
                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
            </div>
            
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white px-4">
                <p className="text-xl md:text-2xl lg:text-3xl text-center text-raleway tracking-10 uppercase font-medium">
                    {slides[currentIndex].description}
                </p>

                <div
                    className={`slider-buttons-container flex justify-between items-center w-full mt-8 lg:absolute lg:inset-0 lg:mt-0 lg:px-4 ${showButtons ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500 ease-in-out`}
                >
                    <button
                        onClick={prevSlide}
                        className="slider-button bg-white text-black rounded-full p-2 flex justify-center items-center focus:outline-none lg:absolute lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2"
                        style={{
                            width: '8vw',
                            height: '8vw',
                            maxWidth: '50px',
                            maxHeight: '50px',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="slider-button bg-white text-black rounded-full p-2 flex justify-center items-center focus:outline-none lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2"
                        style={{
                            width: '8vw',
                            height: '8vw',
                            maxWidth: '50px',
                            maxHeight: '50px',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
