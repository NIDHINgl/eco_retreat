import React from 'react';
import retreatImage1 from "../assets/retreatImage1.jpeg";
import retreatImage2 from "../assets/retreatImage2.jpeg";
import retreatImage3 from "../assets/retreatImage3.jpeg";
import retreatImage4 from "../assets/retreatImage4.jpg";
import retreatImage5 from "../assets/retreatImage5.jpeg";
import retreatImage6 from "../assets/retreatImage6.jpeg";


const Activities = () => (
  <section id="activities" className="py-16 px-4 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Activities & Facilities</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      {/* Peaceful Farmland */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <img src={retreatImage1} alt="Peaceful Farmland" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Peaceful Farmland</h3>
        <p className="text-gray-600">Immerse yourself in the tranquility of nature and expansive farmland.</p>
      </div>

      {/* Cycling Tracks */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <img src={retreatImage2} alt="Cycling Tracks" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Cycling Tracks & Rentals</h3>
        <p className="text-gray-600">Explore scenic routes with our well-maintained cycling tracks and rentals.</p>
      </div>

      {/* Sports Facilities */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <img src={retreatImage3} alt="Sports Facilities" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Sports Facilities</h3>
        <p className="text-gray-600">Enjoy basketball, badminton, and mud volleyball on our courts.</p>
      </div>

      {/* Rainwater Dance Setup */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <img src={retreatImage4} alt="Rainwater Dance Setup" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Rainwater Dance Setup</h3>
        <p className="text-gray-600">Have a refreshing and playful experience with our rainwater dance setup.</p>
      </div>

      {/* Farm Visits */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <img src={retreatImage5} alt="Farm Visits" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Farm Visits</h3>
        <p className="text-gray-600">Interact with rabbits, chickens, and goats, and experience farm life up close.</p>
      </div>

      {/* Night Fire Camp */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center">
        <img src={retreatImage6} alt="Night Fire Camp" className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold mb-2">Night Fire Camp</h3>
        <p className="text-gray-600">Gather around the campfire for stories, music, and marshmallow roasting under the stars.</p>
      </div>

    </div>
  </section>
);

export default Activities;
