import React from 'react';
import HeaderBlog from '../components/HeaderBlog';
import Footer from '../components/Footer';
import retreatImage from "../assets/private-house.JPG";
import farmhouseImage from "../assets/tents.JPG";

const BlogPage = () => {
  return (
    <>
      <HeaderBlog />
    <section className="py-16 px-4 bg-gray-100 mt-10">
      {/* Blog Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-5xl font-bold text-green-800 mb-6">Welcome to Thotada Mane – Your Ultimate Karnataka Village Escape</h1>
        <p className="text-xl text-gray-700">
          Discover the charm of rural Karnataka at our picturesque farmhouse, nestled near Doddaballapur. Designed to offer a unique village experience, our farmhouse is perfect for families, groups, and anyone seeking a serene getaway from the hustle and bustle of city life.
        </p>
      </div>

      {/* Images */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <img src={retreatImage} alt="Retreat" className="rounded-lg shadow-lg w-full h-72 object-cover" />
        <img src={farmhouseImage} alt="Farmhouse" className="rounded-lg shadow-lg w-full h-72 object-cover" />
      </div>

      {/* Accommodations */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">Accommodations</h2>
        <ul className="text-gray-700 text-lg space-y-4">
          <li><strong>Deluxe Private Rooms:</strong> Enjoy a comfortable stay in our deluxe private rooms, ideal for 2-3 guests. Relax in a cozy setting with modern amenities and beautiful views.</li>
          <li><strong>Dormitory for Groups:</strong> Perfect for larger groups, our dormitory-style accommodation provides a fun and social environment at an affordable price.</li>
          <li><strong>Private House:</strong> For small families, our private house features a room, kitchen, hall, and attached bathroom. Enjoy the extra space and home-like comfort.</li>
        </ul>
      </div>

      {/* Activities and Facilities */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">Activities and Facilities</h2>
        <ul className="text-gray-700 text-lg space-y-4">
          <li><strong>Peaceful Farmland:</strong> Immerse yourself in the tranquility of our expansive farmland, a true escape from city life.</li>
          <li><strong>Trekking Experience:</strong> Explore the nearby hills on invigorating treks, offering breathtaking views and a chance to connect with nature.</li>
          <li><strong>Cycling Tracks:</strong> Enjoy our well-maintained cycling tracks with bicycles available for guests.</li>
          <li><strong>Children’s Play Area:</strong> A safe and fun space for kids to play and make lasting memories.</li>
          <li><strong>Sports Facilities:</strong> Engage in basketball, badminton, golf cricket, mud volleyball, and more.</li>
          <li><strong>Farm Activities:</strong> Visit our rabbit, chicken, cow, and goat farms to experience farm life up close.</li>
          <li><strong>Rainwater Dance Setup:</strong> Have fun with our unique rainwater dance setup, perfect for a refreshing and playful experience.</li>
        </ul>
      </div>

      {/* Dining Section */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl font-semibold text-green-700 mb-6">Dining</h2>
        <p className="text-gray-700 text-lg">
          Savor a range of delectable dishes prepared by our dedicated cook. From traditional Karnataka cuisine to international favorites, enjoy a culinary experience tailored to your tastes.
        </p>
      </div>

    </section>
    </>
  );
};

export default BlogPage;
