


import React, { useState } from 'react';
import retreatImage from "../assets/private-house.JPG";
import farmhouseImage from "../assets/tents.JPG";
import './Gallery.css'; 

const galleryItems = [
  { id: 1, src: retreatImage, alt: 'Private House Retreat', type: 'image' },
  { id: 2, src: farmhouseImage, alt: 'Farmhouse Tents', type: 'image' },
  { id: 3, src: retreatImage, alt: 'Private House Retreat', type: 'image' },
  { id: 4, src: farmhouseImage, alt: 'Farmhouse Tents', type: 'image' },
  { id: 5, src: retreatImage, alt: 'Private House Retreat', type: 'image' },
  { id: 6, src: farmhouseImage, alt: 'Farmhouse Tents', type: 'image' },

];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-white flex-grow mt-16">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-serif text-customBlack mb-4">Gallery</h1>
                <div className="w-full bg-white py-6 mb-8">
                    <p className="text-lg leading-relaxed font-light text-customBlack">
                    Explore the beauty and tranquility of one of the best resorts near Bangalore for weekend getaways through our gallery. From stunning scenic views to our comfortable accommodations, take a glimpse into the unique experiences awaiting you at SR Eco Retreat. Whether you're planning a family vacation, corporate team outing, or a rejuvenating staycation, our gallery showcases everything from hands-on farming experiences to exciting adventure activities like cycling, trekking, and rain dance. See the vibrant life at our farm, cozy indoor spaces, and expansive outdoor areas perfect for pre-wedding photoshoots or memorable group events. Discover why SR Eco Retreat is the ideal choice for both adventure seekers and those looking for a peaceful escape.
                    </p>
                </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems
            .filter((item) => item.type === 'image')
            .map((item) => (
              <div
                key={item.id}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-72 object-cover rounded-lg shadow-md transition duration-300"
                />
              </div>
            ))}
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 m-4 text-white text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
