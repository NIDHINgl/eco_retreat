import React, { useState, useEffect } from 'react';
import deluxeRoomImage from "../assets/deluxe-room.JPG";
import tentsImage from "../assets/tents.JPG";
import headerBackgroundImage from "../assets/activity-bg.jpg"; // Background image for the rest of the page
import backgroundImage from "../assets/backgroundImage.jpg"; // Background image for the header section
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'animate.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the hook

// Arrow components for the slider
const PreviousArrow = ({ onClick, isVisible }) => (
    <button
        className={`absolute top-1/2 left-2 transform -translate-y-1/2 z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onClick={onClick}
        style={{ background: 'transparent', border: 'none' }}
    >
        <FaChevronLeft className="text-2xl text-white" />
    </button>
);

const NextArrow = ({ onClick, isVisible }) => (
    <button
        className={`absolute top-1/2 right-2 transform -translate-y-1/2 z-10 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onClick={onClick}
        style={{ background: 'transparent', border: 'none' }}
    >
        <FaChevronRight className="text-2xl text-white" />
    </button>
);

const Activities = () => {
    // State for both image sliders
    const [currentSlideFarm, setCurrentSlideFarm] = useState(0);
    const [currentSlideAdventure, setCurrentSlideAdventure] = useState(0);
    const [intervalIdFarm, setIntervalIdFarm] = useState(null); // State to hold the interval ID for farm slider
    const [intervalIdAdventure, setIntervalIdAdventure] = useState(null); // State to hold the interval ID for adventure slider
    const [isHoveredFarm, setIsHoveredFarm] = useState(false); // State for hover status of farm slider
    const [isHoveredAdventure, setIsHoveredAdventure] = useState(false); // State for hover status of adventure slider
    const images = [deluxeRoomImage, tentsImage]; // Add your images here
    const totalSlides = images.length;

    const handleNextFarm = () => {
        setCurrentSlideFarm((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const handlePrevFarm = () => {
        setCurrentSlideFarm((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const handleNextAdventure = () => {
        setCurrentSlideAdventure((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const handlePrevAdventure = () => {
        setCurrentSlideAdventure((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    // Start automatic image changing for farm slider
    const startIntervalFarm = () => {
        const id = setInterval(handleNextFarm, 3000); // Change images every 3 seconds
        setIntervalIdFarm(id);
    };

    // Clear the interval for farm slider
    const clearIntervalIdFarm = () => {
        clearInterval(intervalIdFarm);
        setIntervalIdFarm(null); // Reset interval ID
    };

    // Start automatic image changing for adventure slider
    const startIntervalAdventure = () => {
        const id = setInterval(handleNextAdventure, 3000); // Change images every 3 seconds
        setIntervalIdAdventure(id);
    };

    // Clear the interval for adventure slider
    const clearIntervalIdAdventure = () => {
        clearInterval(intervalIdAdventure);
        setIntervalIdAdventure(null); // Reset interval ID
    };

    // Animation variants for Framer Motion
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Intersection Observer for detecting section visibility
    const [ref1, inView1] = useInView({ threshold: 0.1 });
    const [ref2, inView2] = useInView({ threshold: 0.1 });
    const [ref3, inView3] = useInView({ threshold: 0.1 });
    const [ref4, inView4] = useInView({ threshold: 0.1 });

    // Cleanup intervals on component unmount
    useEffect(() => {
        return () => {
            clearIntervalIdFarm(); // Clear the farm slider interval
            clearIntervalIdAdventure(); // Clear the adventure slider interval
        };
    }, []);

    return (
        <div
            className="relative"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                minHeight: '100vh',
            }}
        >
            {/* Header Section with Fixed Background Image */}
            <motion.section
                className="relative h-64 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${headerBackgroundImage})`,
                }}
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
                  transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white z-10 text-center shadow-2xl">
                    Activities and Adventures
                </h1>
            </motion.section>

            {/* Activities Section */}
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
                            At SR Eco Retreat, we provide a wide variety of outdoor and indoor activities, perfect for families, friends, and team outings looking to reconnect with nature or engage in fun-filled adventures. Whether you're seeking thrilling adventure activities near Bangalore or a peaceful evening by the campfire, our resort offers something for every visitor. Our activities range from hands-on farming experiences to cycling, trekking, and mud volleyball for adventure lovers. We also offer relaxing options like indoor games and rain dance, making SR Eco Retreat a top choice for weekend getaways near Bangalore. Explore, enjoy, and make unforgettable memories in this tranquil haven, one of the best nature resorts near Bangalore.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Farm and Animal Experiences Section */}
                    <motion.div
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        variants={sectionVariants}
                         transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                        ref={ref2} // Reference for scroll detection
                    >
                        <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                            Farm and Animal Experiences: Connect with Nature
                        </h2>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            Immerse yourself in the essence of rural life at our expansive 10-acre farm. Explore our vibrant fields where we cultivate an array of fruits, including mangoes, coconuts, and arecanuts, all grown using traditional farming techniques.
                        </p>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            This hands-on experience not only teaches you about sustainable agriculture but also allows you to participate in the harvesting process, making it a great educational opportunity for both adults and children. Interact with our friendly farm animals—meet rabbits, chickens, cows, goats, and a variety of birds. This unique experience fosters a deep connection with nature and offers insight into rural farming practices, enhancing your appreciation for the environment.
                        </p>
                    </motion.div>

                    {/* Image Slider for Farm Experiences */}
                    <div className="relative bg-gray-100 p-4 rounded-lg group">
                        <div className="relative"
                            onMouseEnter={() => setIsHoveredFarm(true)} // Set hover state on mouse enter
                            onMouseLeave={() => setIsHoveredFarm(false)} // Reset hover state on mouse leave
                        >
                            <motion.img
                                key={currentSlideFarm} // Use key to animate on slide change
                                src={images[currentSlideFarm]}
                                alt={`Farming Image ${currentSlideFarm + 1}`}
                                className="w-full h-auto object-cover rounded-lg transition-opacity duration-500"
                                onMouseEnter={startIntervalFarm} // Start interval on mouse hover
                                onMouseLeave={clearIntervalIdFarm} // Clear interval on mouse leave
                            />

                            <PreviousArrow onClick={handlePrevFarm} isVisible={isHoveredFarm} />
                            <NextArrow onClick={handleNextFarm} isVisible={isHoveredFarm} />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Adventure Experiences Section */}
            <motion.section
                className="py-16 px-4 bg-white bg-opacity-80"
                initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={sectionVariants}
                  transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                ref={ref3} // Reference for scroll detection
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative bg-gray-100 p-4 rounded-lg group">
                        <div className="relative"
                            onMouseEnter={() => setIsHoveredAdventure(true)} // Set hover state on mouse enter
                            onMouseLeave={() => setIsHoveredAdventure(false)} // Reset hover state on mouse leave
                        >
                            <motion.img
                                key={currentSlideAdventure} // Use key to animate on slide change
                                src={images[currentSlideAdventure]}
                                alt={`Adventure Image ${currentSlideAdventure + 1}`}
                                className="w-full h-auto object-cover rounded-lg transition-opacity duration-500"
                                onMouseEnter={startIntervalAdventure} // Start interval on mouse hover
                                onMouseLeave={clearIntervalIdAdventure} // Clear interval on mouse leave
                            />

                            <PreviousArrow onClick={handlePrevAdventure} isVisible={isHoveredAdventure} />
                            <NextArrow onClick={handleNextAdventure} isVisible={isHoveredAdventure} />
                        </div>
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={inView4 ? "visible" : "hidden"}
                        variants={sectionVariants}
                          transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }} // Ease function for a more pronounced effect
                        ref={ref4} // Reference for scroll detection
                    >
                        <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                            Adventure Activities: Embrace the Thrill
                        </h2>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            For those craving adventure, we offer a myriad of thrilling activities. Embark on exhilarating trekking expeditions across scenic trails, explore hidden gems of nature, or engage in outdoor sports that will get your adrenaline pumping. Our adventure experiences are designed to challenge and excite, providing memorable moments for everyone.
                        </p>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            After a day of adventure, unwind and share stories around a cozy campfire, surrounded by nature’s beauty. Let the stars be your backdrop as you create lasting memories with loved ones.
                        </p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Activities;
