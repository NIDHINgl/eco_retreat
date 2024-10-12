import React from 'react';
import Slider from 'react-slick';
import deluxeRoomImage from "../assets/deluxe-room.JPG";
import dormitoryImage from "../assets/dormitory.JPG";
import privateHouseImage from "../assets/private-house.JPG";
import headerBackgroundImage from "../assets/dining.png";
import backgroundImage from "../assets/backgroundImage.jpeg";
import tentsImage from "../assets/tents.JPG";
import dish1Image from "../assets/tents.JPG";
import dish2Image from "../assets/tents.JPG";
import dish3Image from "../assets/tents.JPG";
import dish4Image from "../assets/tents.JPG";
import dish5Image from "../assets/tents.JPG";
import dish6Image from "../assets/tents.JPG";
import 'animate.css';
import { motion } from 'framer-motion';

const accommodationData = [
    {
        id: 1,
        images: [deluxeRoomImage, deluxeRoomImage, deluxeRoomImage],
        title: 'Private Rooms',
        text: `Ideal for couples or small families, our private rooms near Bangalore offer modern comfort with a rustic charm, perfect for those seeking weekend destinations around Bangalore.`,
    },
    {
        id: 2,
        images: [privateHouseImage, privateHouseImage],
        title: 'Private House',
        text: `Enjoy a home-away-from-home in our private house stay near Bangalore, with amenities like a living room, kitchen, and more. Ideal for families seeking privacy and comfort.`,
    },
    {
        id: 3,
        images: [dormitoryImage, dormitoryImage],
        title: 'Dormitory',
        text: `Perfect for team outings near Bangalore, our dormitory provides a communal experience for large groups or corporate teams, offering affordability and comfort.`,
    },
    {
        id: 4,
        images: [tentsImage, tentsImage],
        title: 'Tents',
        text: `For a true camping near Bangalore experience, our tents by the lake or on the farmland offer adventure with essential amenities.`,
    },
];

const cuisines = [
    { name: 'South Indian', image: dish1Image, description: 'Traditional South Indian delicacies' },
    { name: 'North Indian', image: dish2Image, description: 'Rich and spicy North Indian flavors' },
    { name: 'Chinese', image: dish3Image, description: 'Authentic Chinese cuisine with a local twist' },
];

const icons = [
    { name: 'Vegetarian', icon: dish4Image },
    { name: 'Vegan', icon: dish5Image },
    { name: 'BBQ', icon: dish6Image },
];

const diningSettings = [
    { name: 'Indoor', image: deluxeRoomImage },
    { name: 'Outdoor', image: dormitoryImage },
    { name: 'Lakeside', image: tentsImage },
];

const AccommodationsAndDining = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <ul style={{ padding: '0' }}> {dots} </ul>
            </div>
        ),
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="relative" style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', minHeight: '100vh' }}>
            {/* Header Section with Fixed Background Image */}
            <motion.section className="relative h-64 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${headerBackgroundImage})` }}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white z-10 text-center shadow-2xl">
                    Accommodations and Dining
                </h1>
            </motion.section>

            {/* Accommodation Section */}
            <div className="w-full bg-white py-6 mb-4">
                <div className="w-[90%] mx-auto">
                    <p className="text-lg leading-relaxed font-light text-customBlack">
                        At SR Eco Retreat, we offer a variety of accommodation options tailored to meet the needs of families, friends, and large groups...
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {accommodationData?.map((accommodation) => (
                    <div key={accommodation.id} className="bg-white rounded-lg shadow-md p-4">
                        <Slider {...settings}>
                            {accommodation.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={accommodation.title} className="w-full h-72 object-cover rounded-lg mb-0 image-zoom" />
                                </div>
                            ))}
                        </Slider>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-customBlack mt-4">{accommodation.title}</h3>
                        <p className="text-base font-sans text-customBlack">{accommodation.text}</p>
                    </div>
                ))}
            </div>

            {/* Dining Section */}
            <div className="w-full bg-white/70 backdrop-blur-lg py-12 px-8 mt-20 rounded-2xl shadow-xl">
                <div className="relative h-64 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${headerBackgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10 text-center">
                        Dining at SR Eco Retreat
                    </h1>
                </div>

                <p className="text-lg text-center font-light text-gray-700 mt-8">
                    Our dining experience offers fresh, farm-to-table meals...
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {cuisines.map((cuisine, index) => (
                            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                <img src={cuisine.image} alt={cuisine.name} className="w-full h-48 object-cover" />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white">{cuisine.name}</h3>
                                    <p className="text-sm text-gray-200">{cuisine.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>



                <div className="mt-20">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Dining Settings</h2>
                    <Slider {...settings}>
                        {diningSettings.map((setting, index) => (
                            <div key={index}>
                                <img src={setting.image} alt={setting.name} className="w-full h-72 object-cover rounded-lg mb-4" />
                                <h3 className="text-xl font-semibold text-center">{setting.name}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>


            </div>
        </div>
    );
};

export default AccommodationsAndDining;
