import React from 'react';
import deluxeRoomImage from "../assets/deluxe-room.JPG";
import dormitoryImage from "../assets/dormitory.JPG";
import privateHouseImage from "../assets/private-house.JPG";
import tentsImage from "../assets/tents.JPG";

const data = [
    {
      id: 1,
      image:deluxeRoomImage,
      title: 'Private Rooms',
      text: `Ideal for couples or small families, our private rooms near Bangalore offer modern comfort with a rustic charm, perfect for those seeking weekend destinations around Bangalore.`,
    },
    {
      id: 2,
      image:privateHouseImage,
      title: 'Private House',
      text: `Enjoy a home-away-from-home in our private house stay near Bangalore, with amenities like a living room, kitchen, and more. Ideal for families seeking privacy and comfort.`,
    },
    {
      id: 3,
      image:dormitoryImage,
      title: 'Dormitory',
      rating: 5,
      text: `Perfect for team outings near Bangalore, our dormitory provides a communal experience for large groups or corporate teams, offering affordability and comfort.`,
    },
    {
      id: 4,
      image:tentsImage,
      title: 'Tents',
      text: `For a true camping near Bangalore experience, our tents by the lake or on the farmland offer adventure with essential amenities.`,
    },
  ];

const Accommodations = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h1 className="text-center text-4xl  font-serif text-customBlack mb-2">Accommodations and Dining</h1>
      <div className="w-full bg-white py-6 mb-4">
        <p className="text-lg leading-relaxed font-light text-customBlack">
        At SR Eco Retreat, we offer a variety of accommodation options tailored to meet the needs of families, friends, and large groups. Whether you're looking for a cozy stay, a more private setting, or an adventurous outdoor experience, we have something for everyone. Choose from our comfortable private rooms, spacious dormitories, private houses, or tent stays for an unforgettable getaway.
        <br /><br />
        While our retreat is ideal for weekend getaways or family vacations, it also serves as a refreshing option for those seeking a staycation or workation near Bangalore, blending the serenity of nature with modern comforts. After enjoying a day of adventure or relaxation, savor our farm-fresh meals, offering a delightful farm-to-table dining experience at one of the top eco-friendly resorts near Bangalore.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">

        {data?.map((accomodation)=>(
            <div key={accomodation.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={accomodation?.image}
              alt="Sports & Games"
              className="w-full h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-serif font-bold mb-2 text-customBlack">{accomodation?.title}</h3>
            <p className="text-gray-600 text-base font-sans text-customBlack">
            {accomodation?.text}
            </p>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Accommodations;
