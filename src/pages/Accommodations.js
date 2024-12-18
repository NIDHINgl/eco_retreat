import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'animate.css';
import { motion } from 'framer-motion';
import { NextArrow, PreviousArrow } from '../components/Arrow';
import { useInView } from 'react-intersection-observer';

import backgroundImage from "../assets/photos/others/backgroundImage.jpeg";
import accommodationHeaderBackgroundImage from "../assets/photos/others/accommodation.jpeg";
import diningHeaderBackgroundImage from "../assets/photos/others/dining.png";


import deluxeRoomImage1 from "../assets/photos/accommodation/room/room1.jpg";
import deluxeRoomImage2 from "../assets/photos/accommodation/room/room2.jpg";
import deluxeRoomImage3 from "../assets/photos/accommodation/room/room3.png";
import deluxeRoomImage4 from "../assets/photos/accommodation/room/room4.JPG";

import dormitoryImage1 from "../assets/photos/accommodation/dormitory/dormitory1.jpg";
import dormitoryImage2 from "../assets/photos/accommodation/dormitory/dormitory2.png";
import dormitoryImage3 from "../assets/photos/accommodation/dormitory/dormitory3.png";

import privateHouseImage1 from "../assets/photos/accommodation/house/house1.jpg";
import privateHouseImage2 from "../assets/photos/accommodation/house/house2.jpg";
import privateHouseImage3 from "../assets/photos/accommodation/house/house3.JPG";
import privateHouseImage4 from "../assets/photos/accommodation/house/house4.png";

import tentsImage1 from "../assets/photos/accommodation/tent/tent1.jpg";
import tentsImage2 from "../assets/photos/accommodation/tent/tent2.jpeg";
import tentsImage3 from "../assets/photos/accommodation/tent/tent3.jpg";

import southIndianFoodImage from "../assets/photos/others/southIndian.jpeg";
import northIndianFoodImage from "../assets/photos/others/northIndian.jpeg";
import chineseFoodImage from "../assets/photos/others/chinese.jpeg";

import indoor from "../assets/photos/food/dining1.JPG";
import outdoor from "../assets/photos/food/dining5.jpg";
import lakeside from "../assets/photos/lake/lake1.jpg";

const accommodationData = [
    {
        id: 1,
        images: [deluxeRoomImage1, deluxeRoomImage2, deluxeRoomImage3, deluxeRoomImage4],
        title: 'Private Rooms',
        text: `Ideal for couples or small families, our private rooms near Bangalore offer modern comfort with a rustic charm, perfect for those seeking weekend destinations around Bangalore.`,
    },
    {
        id: 2,
        images: [privateHouseImage1, privateHouseImage2, privateHouseImage3, privateHouseImage4],
        title: 'Private House',
        text: `Enjoy a home-away-from-home in our private house stay near Bangalore, with amenities like a living room, kitchen, and more. Ideal for families seeking privacy and comfort.`,
    },
    {
        id: 3,
        images: [dormitoryImage1, dormitoryImage2, dormitoryImage3],
        title: 'Dormitory',
        text: `Perfect for team outings near Bangalore, our dormitory provides a communal experience for large groups or corporate teams, offering affordability and comfort.`,
    },
    {
        id: 4,
        images: [tentsImage1, tentsImage2, tentsImage3],
        title: 'Tents',
        text: `For a true camping near Bangalore experience, our tents by the lake or on the farmland offer adventure with essential amenities.`,
    },
];

const cuisines = [
    { name: 'South Indian', image: southIndianFoodImage, description: 'Traditional South Indian delicacies' },
    { name: 'North Indian', image: northIndianFoodImage, description: 'Rich and spicy North Indian flavors' },
    { name: 'Chinese', image: chineseFoodImage, description: 'Authentic Chinese cuisine with a local twist' },
];

const diningSettings = [
    { name: 'Indoor', image: indoor },
    { name: 'Outdoor', image: outdoor },
    { name: 'Lakeside', image: lakeside },
];

const AccommodationsAndDining = () => {
    const sliderRef = useRef(null);
    const [currentSlideFarm, setCurrentSlideFarm] = useState(0);
    const [currentSlideAdventure, setCurrentSlideAdventure] = useState(0);
    const [intervalIdFarm, setIntervalIdFarm] = useState(null); // State to hold the interval ID for farm slider
    const [intervalIdAdventure, setIntervalIdAdventure] = useState(null); // State to hold the interval ID for adventure slider
    const [isHoveredFarm, setIsHoveredFarm] = useState(false); // State for hover status of farm slider
    const [isHoveredAdventure, setIsHoveredAdventure] = useState(false); // State for hover status of adventure slider

    const [currentSlideRoom, setCurrentSlideRoom] = useState(0);
    const [currentSlideHouse, setCurrentSlideHouse] = useState(0);
    const [currentSlideDormitory, setCurrentSlideDormitory] = useState(0);
    const [currentSlideTent, setCurrentSlideTent] = useState(0);

    const [intervalIdRoom, setIntervalIdRoom] = useState(null); // State to hold the interval ID for farm slider
    const [intervalIdHouse, setIntervalIdHouse] = useState(null); // State to hold the interval ID for adventure slider
    const [intervalIdDormitory, setIntervalIdDormitory] = useState(null); // State to hold the interval ID for farm slider
    const [intervalIdTent, setIntervalIdTent] = useState(null); // State to hold the interval ID for adventure slider

    const [isHoveredRoom, setIsHoveredRoom] = useState(false); // State for hover status of farm slider
    const [isHoveredHouse, setIsHoveredHouse] = useState(false); // State for hover status of adventure slider
    const [isHoveredDormitory, setIsHoveredDormitory] = useState(false); // State for hover status of farm slider
    const [isHoveredTent, setIsHoveredTent] = useState(false); // State for hover status of adventure slider

    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const [ref4, inView4] = useInView({ threshold: 0.1 });
    const [ref5, inView5] = useInView({ threshold: 0.1 });
    const [ref6, inView6] = useInView({ threshold: 0.1 });
    const [ref7, inView7] = useInView({ threshold: 0.1 });
    const [ref8, inView8] = useInView({ threshold: 0.1 });

        const handleNextRoom = () => {
            setCurrentSlideRoom((prevSlide) => (prevSlide + 1) % accommodationData[0]?.images.length);
        };

        const handlePrevRoom = () => {
            setCurrentSlideRoom((prevSlide) => (prevSlide - 1 + accommodationData[0]?.images.length) % accommodationData[0]?.images.length);
        };

        const handleNextHouse = () => {
            setCurrentSlideHouse((prevSlide) => (prevSlide + 1) % accommodationData[1]?.images.length);
        };

        const handlePrevHouse = () => {
            setCurrentSlideAdventure((prevSlide) => (prevSlide - 1 + accommodationData[1]?.images.length) % accommodationData[1]?.images.length);
        };

        const startIntervalRoom = () => {
            const id = setInterval(handleNextRoom, 3000); // Change images every 3 seconds
            setIntervalIdRoom(id);
        };

        // Clear the interval for farm slider
        const clearIntervalIdRoom = () => {
            clearInterval(intervalIdRoom);
            setIntervalIdRoom(null); // Reset interval ID
        };

        // Start automatic image changing for adventure slider
        const startIntervalHouse = () => {
            const id = setInterval(handleNextHouse, 3000); // Change images every 3 seconds
            setIntervalIdHouse(id);
        };

        // Clear the interval for adventure slider
        const clearIntervalIdHouse = () => {
            clearInterval(intervalIdHouse);
            setIntervalIdHouse(null); // Reset interval ID
        };

            const handleNextDormitory = () => {
                    setCurrentSlideDormitory((prevSlide) => (prevSlide + 1) % accommodationData[2]?.images.length);
                };

                const handlePrevDormitory = () => {
                    setCurrentSlideDormitory((prevSlide) => (prevSlide - 1 + accommodationData[2]?.images.length) % accommodationData[2]?.images.length);
                };

                const handleNextTent = () => {
                    setCurrentSlideTent((prevSlide) => (prevSlide + 1) % accommodationData[3]?.images.length);
                };

                const handlePrevTent = () => {
                    setCurrentSlideTent((prevSlide) => (prevSlide - 1 + accommodationData[3]?.images.length) % accommodationData[3]?.images.length);
                };

                const startIntervalDormitory = () => {
                    const id = setInterval(handleNextDormitory, 3000); // Change images every 3 seconds
                    setIntervalIdDormitory(id);
                };

                // Clear the interval for farm slider
                const clearIntervalIdDormitory = () => {
                    clearInterval(intervalIdDormitory);
                    setIntervalIdDormitory(null); // Reset interval ID
                };

                // Start automatic image changing for adventure slider
                const startIntervalTent = () => {
                    const id = setInterval(handleNextTent, 3000); // Change images every 3 seconds
                    setIntervalIdTent(id);
                };

                // Clear the interval for adventure slider
                const clearIntervalIdTent = () => {
                    clearInterval(intervalIdTent);
                    setIntervalIdTent(null); // Reset interval ID
                };

    const handlePrevDining = () => {
        sliderRef.current.slickPrev(); 
    };
    
    const handleNextDining = () => {
        sliderRef.current.slickNext(); 
    };

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
                style={{ backgroundImage: `url(${accommodationHeaderBackgroundImage})` }}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white z-10 text-center shadow-2xl">
                    Accommodations
                </h1>
            </motion.section>

            <motion.section
                className="py-16 px-4 bg-white bg-opacity-80"
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={sectionVariants}
                  transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                ref={ref1} // Reference for scroll detection
            >
                <div className="w-full py-6 mb-8">
                    <div className="w-[90%] mx-auto">
                        <p className="text-lg leading-relaxed font-light text-customBlack">
                        At SR Eco Retreat, we offer a variety of accommodation options tailored to meet the needs of families, friends, and large groups. Whether you're looking for a cozy stay, a more private setting, or an adventurous outdoor experience, we have something for everyone. Choose from our comfortable private rooms, spacious dormitories, private houses, or tent stays for an unforgettable getaway.
                        <br />
                        <br />
                        While our retreat is ideal for weekend getaways or family vacations, it also serves as a refreshing option for those seeking a staycation or workation near Bangalore, blending the serenity of nature with modern comforts. After enjoying a day of adventure or relaxation, savor our farm-fresh meals, offering a delightful farm-to-table dining experience at one of the top eco-friendly resorts near Bangalore.
                        </p>
                    </div>
                </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"> */}
            

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Private room - Vertically Centered Text */}
    <motion.div
        className="flex items-center"  // Flexbox for vertical centering
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
        ref={ref2} // Reference for scroll detection
    >
        <div>
            <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                {accommodationData[0]?.title}
            </h2>
            <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                {accommodationData[0]?.text}
            </p>
        </div>
    </motion.div>

    {/* Image Slider for private room Experiences - Reduced Image Size */}
    <div className="relative bg-gray-100 p-4 rounded-lg group flex items-center justify-center">
        <div className="relative w-full h-64" // Set a fixed height for the image container
            onMouseEnter={() => setIsHoveredRoom(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHoveredRoom(false)} // Reset hover state on mouse leave
        >
            <motion.img
                key={currentSlideRoom} // Use key to animate on slide change
                src={accommodationData[0]?.images[currentSlideRoom]}
                alt={`Farming Image ${currentSlideRoom + 1}`}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
                onMouseEnter={startIntervalRoom} // Start interval on mouse hover
                onMouseLeave={clearIntervalIdRoom} // Clear interval on mouse leave
            />

            <PreviousArrow onClick={handlePrevRoom} isVisible={isHoveredRoom} />
            <NextArrow onClick={handleNextRoom} isVisible={isHoveredRoom} />
        </div>
    </div>
</div>

            </motion.section>
            <motion.section
                className="py-16 px-4 bg-white bg-opacity-80"
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={sectionVariants}
                  transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                ref={ref3} // Reference for scroll detection
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Reduced Image Size */}
    <div className="relative bg-gray-100 p-4 rounded-lg group flex items-center justify-center">
        <div className="relative w-full h-64" // Set a fixed height for the image container
            onMouseEnter={() => setIsHoveredHouse(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHoveredHouse(false)} // Reset hover state on mouse leave
        >
            <motion.img
                key={currentSlideHouse} // Use key to animate on slide change
                src={accommodationData[1]?.images[currentSlideHouse]}
                alt={`Adventure Image ${currentSlideHouse + 1}`}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
                onMouseEnter={startIntervalHouse} // Start interval on mouse hover
                onMouseLeave={clearIntervalIdHouse} // Clear interval on mouse leave
            />

            <PreviousArrow onClick={handlePrevHouse} isVisible={isHoveredHouse} />
            <NextArrow onClick={handleNextHouse} isVisible={isHoveredHouse} />
        </div>
    </div>

    {/* Vertically Centered Text Content */}
    <motion.div
        className="flex items-center"
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
        ref={ref4} // Reference for scroll detection
    >
        <div>
            <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                {accommodationData[1]?.title}
            </h2>
            <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                {accommodationData[1]?.text}
            </p>
        </div>
    </motion.div>
</div>

            </motion.section>
            <motion.section
                className="py-16 px-4 bg-white bg-opacity-80"
                initial="hidden"
                animate={inView5 ? "visible" : "hidden"}
                variants={sectionVariants}
                  transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                ref={ref5} // Reference for scroll detection
            >

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Farm and Animal Experiences Section - Vertically Centered Text */}
    <motion.div
        className="flex items-center"  // Flexbox for vertical centering
        initial="hidden"
        animate={inView6 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
        ref={ref6} // Reference for scroll detection
    >
        <div>
            <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                {accommodationData[2]?.title}
            </h2>
            <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                {accommodationData[2]?.text}
            </p>
        </div>
    </motion.div>

    {/* Image Slider for Farm Experiences - Reduced Image Size */}
    <div className="relative bg-gray-100 p-4 rounded-lg group flex items-center justify-center">
        <div className="relative w-full h-64" // Set a fixed height for the image container
            onMouseEnter={() => setIsHoveredDormitory(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHoveredDormitory(false)} // Reset hover state on mouse leave
        >
            <motion.img
                key={currentSlideDormitory} // Use key to animate on slide change
                src={accommodationData[2]?.images[currentSlideDormitory]}
                alt={`Farming Image ${currentSlideDormitory + 1}`}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
                onMouseEnter={startIntervalDormitory} // Start interval on mouse hover
                onMouseLeave={clearIntervalIdDormitory} // Clear interval on mouse leave
            />

            {/* Image slider controls */}
            <PreviousArrow onClick={handlePrevDormitory} isVisible={isHoveredDormitory} />
            <NextArrow onClick={handleNextDormitory} isVisible={isHoveredDormitory} />
        </div>
    </div>
</div>

            </motion.section>

            <motion.section
                className="py-16 px-4 bg-white bg-opacity-80"
                initial="hidden"
                animate={inView7 ? "visible" : "hidden"}
                variants={sectionVariants}
                  transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                ref={ref7} // Reference for scroll detection
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Image Slider for Adventure Experiences - Reduced Image Size */}
    <div className="relative bg-gray-100 p-4 rounded-lg group flex items-center justify-center">
        <div className="relative w-full h-64" // Set a fixed height for the image container
            onMouseEnter={() => setIsHoveredTent(true)} // Set hover state on mouse enter
            onMouseLeave={() => setIsHoveredTent(false)} // Reset hover state on mouse leave
        >
            <motion.img
                key={currentSlideTent} // Use key to animate on slide change
                src={accommodationData[3]?.images[currentSlideTent]}
                alt={`Adventure Image ${currentSlideTent + 1}`}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
                onMouseEnter={startIntervalTent} // Start interval on mouse hover
                onMouseLeave={clearIntervalIdTent} // Clear interval on mouse leave
            />

            <PreviousArrow onClick={handlePrevTent} isVisible={isHoveredTent} />
            <NextArrow onClick={handleNextTent} isVisible={isHoveredTent} />
        </div>
    </div>

    {/* Vertically Centered Text Content */}
    <motion.div
        className="flex items-center"  // Flexbox for vertical centering
        initial="hidden"
        animate={inView8 ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
        ref={ref8} // Reference for scroll detection
    >
        <div>
            <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                {accommodationData[3]?.title}
            </h2>
            <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                {accommodationData[3]?.text}
            </p>
        </div>
    </motion.div>
</div>

            </motion.section>
                {/* {accommodationData?.map((accommodation) => (
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
                ))} */}

            {/* Dining Section */}
            <div className="w-full bg-white/70 backdrop-blur-lg py-12 px-8 mt-20 rounded-2xl shadow-xl">
                <div className="relative h-64 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${diningHeaderBackgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10 text-center">
                        Dining
                    </h1>
                </div>

                <p className="text-lg text-center font-light text-gray-700 mt-8">
                    Farm-Fresh Cuisine  <br />
                    Our kitchen serves delicious farm-fresh meals using natural ingredients from our farm, providing authentic Karnataka delicacies and North Indian favorites. Enjoy the best of eco-friendly resorts near Bangalore, where food is an integral part of the experience.
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
    
    <div className="relative group">
        <Slider {...settings} ref={sliderRef}>
            {diningSettings.map((setting, index) => (
                <div key={index}>
                    <img
                        src={setting.image}
                        alt={setting.name}
                        className="w-full h-72 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-center">{setting.name}</h3>
                </div>
            ))}
        </Slider>

        {/* Previous and Next Arrows */}
        <PreviousArrow
            onClick={handlePrevDining} // Handle previous slide
            isVisible={true} // Make arrow always visible, or use hover logic
        />
        <NextArrow
            onClick={handleNextDining} // Handle next slide
            isVisible={true} // Make arrow always visible, or use hover logic
        />
    </div>
</div>



            </div>
        </div>
    );
};

export default AccommodationsAndDining;
