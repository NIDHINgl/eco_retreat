import React from 'react';

const MapSection = () => (
  <section id="map" className="py-16 px-4 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-10">Find Us</h2>
    <div className="max-w-4xl mx-auto">
      <iframe
        title="Google Map"
        className="w-full h-96 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8150434878936!2d77.4621389!3d13.31575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1d90076659cd7%3A0x8d88c9261e98c473!2sSR%20Eco%20Retreat!5e0!3m2!1sen!2sin!4v1694256373407!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
);

export default MapSection;
