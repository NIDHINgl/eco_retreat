import React from 'react';
import tentsImage from "../assets/tents.JPG";

const Details = () => {
  return (
    <div className="container mx-auto px-4 mt-12 font-sans">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Reconnect with Nature in Comfort and Style
      </h1>

      <div className="w-full bg-white py-6 mb-4">
        <p className="text-lg leading-relaxed font-light text-gray-700 font-raleway">
          Just an hour's drive from Bangalore, SR Eco Retreat offers the perfect weekend getaway from Bangalore. Nestled in a 10-acre farm, our farm stay near Bangalore provides a serene escape where rural charm meets modern comfort. Whether you're looking for family-friendly resorts or a peaceful retreat, we have something for everyone. Reconnect with nature, engage in hands-on farming, and unwind with activities like cycling, trekking, and a campfire. Capture beautiful moments with scenic views, animals, and picturesque spots ideal for photography. Escape the city and discover affordable luxury close to nature at our eco-friendly resort near Bangalore.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center py-8 border-b border-gray-200">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={tentsImage} alt="Left Image" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-serif text-customBlack mb-4" style={{ fontFamily: '"Suravaram", serif' }}>
          Embrace Nature and Farming
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light font-raleway">
          SR Eco Retreat offers a unique opportunity to experience rural life and connect with nature. Our sprawling farm features scenic views of a lake, farmland, big trees, and a variety of flowers and gardens. You can interact with friendly animals like parrots, ducks, chickens,rabbits, dogs, and cows. Whether you're visiting as a family, corporate team, or solo traveler, this connection with nature makes SR Eco Retreat one of the best nature resorts near Bangalore.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center py-8 border-b border-gray-200">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={tentsImage} alt="Right Image" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-serif text-customBlack mb-4" style={{ fontFamily: '"Suravaram", serif' }}>
          Thrilling Activities for Every Adventurer
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light font-raleway">
          Enjoy a range of activities like trekking near Bangalore, cycling, mud volleyball, and badminton. Unwind by the campfire or join our rain dance for a fun, refreshing experience. Located near Nandi Hills and other trekking spots, SR Eco Retreat is ideal for adventure lovers and outdoor enthusiasts. It's the perfect destination for team outings or adventurous weekend getaways around Bangalore.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center py-8 border-b border-gray-200">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={tentsImage} alt="Left Image" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-serif text-customBlack mb-4" style={{ fontFamily: '"Suravaram", serif' }}>
          Staycation - Work in Peace, Rest in Comfort
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light font-raleway">
          SR Eco Retreat is also perfect for extended stays, offering a peaceful environment for remote workers and professionals. Escape the city traffic and noise, and enjoy the fresh air while you work in peace. With high-speed internet, 24/7 power backup, and comfortable accommodations, our resort is an ideal staycation spot. Our facilities include cycling tracks, a workout room, indoor games, and a dormitory for affordable long-term stays. This all-around experience ensures personal growth and productivity for professionals seeking a workation.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center py-8 border-b border-gray-200">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img src={tentsImage} alt="Right Image" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-serif text-customBlack mb-4" style={{ fontFamily: '"Suravaram", serif' }}>
          Comfortable Accommodations and Delicious Farm-Fresh Cuisine
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light font-raleway">
          Our retreat offers a variety of accommodations to suit every traveler. Whether you're seeking a private house stay near Bangalore or a cozy room for a peaceful escape, we have you covered. Choose from private rooms, spacious dormitories, or adventurous tent stays by the lake for a true camping experience near Bangalore. Our kitchen serves delicious farm-fresh meals, providing an authentic farm-to-table experience at one of the top farmhouse stays near Bangalore.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Details;
