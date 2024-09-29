import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/retreat.jpg';
import image3 from '../assets/tents.JPG';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  const slides = [
    { type: 'image', src: image1 },
    { type: 'image', src: image2 },
    { type: 'image', src: image3 },
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
            className="w-full h-screen object-cover flex-shrink-0"
            src={slide.src}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
    
      <div className="absolute inset-0 overflow-hidden">
        {renderSlides()}
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Welcome to SR Eco Retreat
        </h1>
        <p className="text-lg md:text-xl text-center">
          Your Ultimate Karnataka Village Escape
        </p>

        <div
          className={`slider-buttons-container flex justify-between items-center w-full mt-8 lg:absolute lg:inset-0 lg:mt-0 lg:px-4 ${
            showButtons ? 'opacity-100' : 'opacity-0'
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
