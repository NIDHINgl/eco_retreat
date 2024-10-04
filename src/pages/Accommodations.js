import React from 'react';
import Slider from 'react-slick';
import deluxeRoomImage from "../assets/deluxe-room.JPG";
import dormitoryImage from "../assets/dormitory.JPG";
import privateHouseImage from "../assets/private-house.JPG";
import tentsImage from "../assets/tents.JPG";
import dish1Image from "../assets/tents.JPG";
import dish2Image from "../assets/tents.JPG";
import dish3Image from "../assets/tents.JPG";
import dish4Image from "../assets/tents.JPG";
import dish5Image from "../assets/tents.JPG";
import dish6Image from "../assets/tents.JPG";

const data = [
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

const Accommodations = () => {

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

    return (
        <section className="py-16 px-4 bg-gray-50 mt-16">
            <h1 className="text-center text-4xl font-serif text-customBlack mb-2">Accommodations and Dining</h1>
            <div className="w-full bg-white py-6 mb-4">
                <div className="w-[90%] mx-auto">
                    <p className="text-lg leading-relaxed font-light text-customBlack">
                        At SR Eco Retreat, we offer a variety of accommodation options tailored to meet the needs of families, friends, and large groups. Whether you're looking for a cozy stay, a more private setting, or an adventurous outdoor experience, we have something for everyone. Choose from our comfortable private rooms, spacious dormitories, private houses, or tent stays for an unforgettable getaway.
                        <br /><br />
                        While our retreat is ideal for weekend getaways or family vacations, it also serves as a refreshing option for those seeking a staycation or workation near Bangalore, blending the serenity of nature with modern comforts. After enjoying a day of adventure or relaxation, savor our farm-fresh meals, offering a delightful farm-to-table dining experience at one of the top eco-friendly resorts near Bangalore.
                    </p>
                </div>
            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data?.map((accommodation) => (
                    <div key={accommodation.id} className="bg-white rounded-lg shadow-md p-4">
                        <Slider {...settings}>
                            {accommodation.images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={accommodation.title}
                                        className="w-full h-72 object-cover rounded-lg mb-0 image-zoom"
                                    />
                                </div>
                            ))}
                        </Slider>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-customBlack mt-4">
                            {accommodation.title}
                        </h3>
                        <p className="text-base font-sans text-customBlack">
                            {accommodation.text}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full bg-white/70 backdrop-blur-lg py-12 px-8 mt-20 rounded-2xl shadow-xl">
                <h2 className="text-center text-4xl font-semibold text-gray-800 mb-10">
                    Dining
                </h2>
                <p className="text-lg leading-relaxed font-light text-gray-700 text-center mb-16 tracking-wider">
                    Farm-Fresh Cuisine<br />
                    Our kitchen serves farm-fresh meals with natural ingredients, offering authentic Karnataka delicacies and North Indian favorites. Enjoy food as an essential part of your experience at SR Eco Retreat.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-center">
                        <img src={dish1Image} alt="South Indian" className="w-48 h-48 object-cover rounded-full mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-2xl font-semibold text-gray-800">South Indian</h3>
                    </div>
                    <div className="text-center">
                        <img src={dish2Image} alt="North Indian" className="w-48 h-48 object-cover rounded-full mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-2xl font-semibold text-gray-800">North Indian</h3>
                    </div>
                    <div className="text-center">
                        <img src={dish3Image} alt="Chinese" className="w-48 h-48 object-cover rounded-full mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-2xl font-semibold text-gray-800">Chinese</h3>
                    </div>
                    <div className="text-center">
                        <img src={dish4Image} alt="Seafood" className="w-48 h-48 object-cover rounded-full mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-2xl font-semibold text-gray-800">Seafood</h3>
                    </div>
                    <div className="text-center">
                        <img src={dish5Image} alt="Mexican" className="w-48 h-48 object-cover rounded-full mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-2xl font-semibold text-gray-800">Mexican</h3>
                    </div>
                    <div className="text-center">
                        <img src={dish6Image} alt="Italian" className="w-48 h-48 object-cover rounded-full mb-4 mx-auto transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-2xl font-semibold text-gray-800">Italian</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodations;
