import React from 'react';
import AccommodationCard from '../components/AccommodationCard';
import deluxeRoomImage from "../assets/deluxe-room.JPG";
import dormitoryImage from "../assets/dormitory.JPG";
import privateHouseImage from "../assets/private-house.JPG";
import tentsImage from "../assets/tents.JPG";



const Accommodations = () => (
  <section id="accommodations" className="py-16 px-4 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-10">Accommodations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AccommodationCard 
        title="Deluxe Private Rooms" 
        description="Comfortable stay for 2-3 guests with modern amenities."
        imageUrl={deluxeRoomImage}
      />
      <AccommodationCard 
        title="Dormitory for Groups" 
        description="Fun and social environment at an affordable price."
        imageUrl={dormitoryImage}
      />
      <AccommodationCard 
        title="Private House" 
        description="Room, kitchen, hall, and attached bathroom for families."
        imageUrl={privateHouseImage}
      />
    </div>
  </section>
);

export default Accommodations;
