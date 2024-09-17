import React from 'react';

const AccommodationCard = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default AccommodationCard;
