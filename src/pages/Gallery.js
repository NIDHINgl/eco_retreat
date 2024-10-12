import React, { useState } from 'react';
import { MasonryPhotoAlbum } from "react-photo-album";
import { photos } from '../constants';
import { NextArrow, PreviousArrow } from '../components/Arrow';
import { motion } from 'framer-motion';
import headerBackgroundImage from "../assets/gallery.jpeg";
import "react-photo-album/masonry.css";
import 'animate.css';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => {
      setSelectedIndex(index);
    };
  
    const closeModal = () => {
      setSelectedIndex(null);
    };
  
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };
  
    const showNext = () => {
      if (selectedIndex !== null && selectedIndex < photos.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    };
  
    const showPrev = () => {
      if (selectedIndex !== null && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    };

    const sectionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
  };

  return (
    <div
        className="relative"
        style={{
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            minHeight: '100vh',
        }}
    >
      <motion.section
            className="relative h-64 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${headerBackgroundImage})`,
            }}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
              transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white z-10 text-center shadow-2xl">
            Gallery

            </h1>
        </motion.section>
      <div className="max-w-7xl mx-auto mb-8">
      
        <div className="w-full bg-white py-6 mb-8 mt-8">
          <p className="text-lg leading-relaxed font-light text-customBlack">
            Explore the beauty and tranquility of one of the best resorts near Bangalore for weekend getaways through our gallery. From stunning scenic views to our comfortable accommodations, take a glimpse into the unique experiences awaiting you at SR Eco Retreat. Whether you're planning a family vacation, corporate team outing, or a rejuvenating staycation, our gallery showcases everything from hands-on farming experiences to exciting adventure activities like cycling, trekking, and rain dance. See the vibrant life at our farm, cozy indoor spaces, and expansive outdoor areas perfect for pre-wedding photoshoots or memorable group events. Discover why SR Eco Retreat is the ideal choice for both adventure seekers and those looking for a peaceful escape.
          </p>
        </div>
        <MasonryPhotoAlbum 
          photos={photos} 
          onClick={({ index }) => {
            openModal(index);
          }}
        />
      </div>
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          {selectedIndex > 0 && (
            <PreviousArrow onClick={showPrev} />
          )}

          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-white text-2xl"
            >
              &times;
            </button>

            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>

          {selectedIndex < photos.length - 1 && (
            
            <NextArrow onClick={showNext} />
        
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
