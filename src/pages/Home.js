import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/retreat.jpg';
import video1 from '../assets/video1.mp4';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the video on load
  const [showButtons, setShowButtons] = useState(false); // State to toggle button visibility

  // Array containing the images and video for the slider
  const slides = [
    { type: 'image', src: image1 },
    { type: 'video', src: video1 },
    { type: 'image', src: image2 }
  ];

  // Function to handle moving to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Detect scrolling and toggle button visibility
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setShowButtons(true); // Show buttons on scroll

      // Hide buttons after 3 seconds of inactivity
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowButtons(false);
      }, 3000); // 3 seconds of no scrolling
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Rendering function for the background slide
  const renderSlide = () => {
    const currentSlide = slides[currentIndex];
    if (currentSlide.type === 'video') {
      return (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={currentSlide.src}
          autoPlay
          muted
          loop
        />
      );
    }
    return (
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={currentSlide.src}
        alt="Slide Background"
      />
    );
  };

  return (
    <section id="home" className="relative h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {renderSlide()}
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Welcome to SR Eco Retreat
        </h1>
        <p className="text-lg md:text-xl text-center">
          Your Ultimate Karnataka Village Escape
        </p>

        {/* Slider Navigation Controls */}
        <div
          className={`slider-buttons-container flex justify-between items-center w-full mt-8 lg:absolute lg:inset-0 lg:mt-0 lg:px-4 ${
            showButtons ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 ease-in-out`}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="slider-button bg-white text-black rounded-full p-2 flex justify-center items-center focus:outline-none lg:absolute lg:left-4 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            style={{
              width: '8vw',  // Responsive size
              height: '8vw', // Responsive size
              maxWidth: '50px',  // Limit maximum size
              maxHeight: '50px'  // Limit maximum size
            }}
          >
            {/* Left Arrow (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="slider-button bg-white text-black rounded-full p-2 flex justify-center items-center focus:outline-none lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            style={{
              width: '8vw',  // Responsive size
              height: '8vw', // Responsive size
              maxWidth: '50px',  // Limit maximum size
              maxHeight: '50px'  // Limit maximum size
            }}
          >
            {/* Right Arrow (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
