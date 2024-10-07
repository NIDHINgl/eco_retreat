import React, { useState } from 'react';
import { MasonryPhotoAlbum } from "react-photo-album";
import { motion } from 'framer-motion'; // Importing framer-motion for animations
import "react-photo-album/masonry.css";
import { photos } from '../constants';

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to manage selected image for modal

  // Function to open modal with the selected image
  const openModal = (item) => {
    setSelectedItem(item);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  // Close modal if clicking outside the image (on backdrop)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Animation settings for image reveal on scroll (using framer-motion)
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state (before scroll)
    visible: { opacity: 1, y: 0 }, // Final state (after scroll)
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-white flex-grow mt-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-serif text-customBlack mb-4">Gallery</h1>
        <div className="w-full bg-white py-6 mb-8">
          <p className="text-lg leading-relaxed font-light text-customBlack">
            Explore the beauty and tranquility of one of the best resorts near Bangalore for weekend getaways through our gallery...
          </p>
        </div>

        {/* Animated Masonry Photo Album */}
        <MasonryPhotoAlbum
          photos={photos}
          layout="masonry"
          onClick={(event, { photo }) => openModal(photo)} // When a photo is clicked, open modal
          renderPhoto={({ photo, index }) => (
            <motion.div
              key={index}
              className="image-container"
              initial="hidden"
              animate="visible"
              variants={imageVariants} // Apply the scroll animation
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered animation effect
            >
              <img src={photo.src} alt={photo.alt} className="cursor-pointer" onClick={() => openModal(photo)} />
            </motion.div>
          )}
        />

        {/* Modal for displaying the larger version of the image */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleBackdropClick} // Close when clicking on backdrop
          >
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img src={selectedItem.src} alt={selectedItem.alt} className="max-w-full max-h-full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
