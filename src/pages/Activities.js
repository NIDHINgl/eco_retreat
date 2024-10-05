import React from 'react';
import Slider from 'react-slick';
import deluxeRoomImage from "../assets/deluxe-room.JPG";
import tentsImage from "../assets/tents.JPG";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PreviousArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg"
            onClick={onClick}
        >
            <FaChevronLeft className="text-2xl text-gray-700" />
        </button>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg"
            onClick={onClick}
        >
            <FaChevronRight className="text-2xl text-gray-700" />
        </button>
    );
};

const Activities = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <section className="py-16 px-4 bg-gray-50 mt-16">
                <h1 className="text-center text-4xl font-serif text-customBlack mb-4">Activities and Adventures</h1>
                <div className="w-full bg-white py-6 mb-8">
                    <div className="w-[90%] mx-auto">
                        <p className="text-lg leading-relaxed font-light text-customBlack">
                            At SR Eco Retreat, we provide a wide variety of outdoor and indoor activities, perfect for families, friends, and team outings looking to reconnect with nature or engage in fun-filled adventures. Whether you're seeking thrilling adventure activities near Bangalore or a peaceful evening by the campfire, our resort offers something for every visitor. Our activities range from hands-on farming experiences to cycling, trekking, and mud volleyball for adventure lovers. We also offer relaxing options like indoor games and rain dance, making SR Eco Retreat a top choice for weekend getaways near Bangalore. Explore, enjoy, and make unforgettable memories in this tranquil haven, one of the best nature resorts near Bangalore.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                            Farm and Animal Experiences: Connect with Nature
                        </h2>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            Immerse yourself in the essence of rural life at our expansive 10-acre farm. Explore our vibrant fields where we cultivate an array of fruits, including mangoes, coconuts, and arecanuts, all grown using traditional farming techniques.
                        </p>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            This hands-on experience not only teaches you about sustainable agriculture but also allows you to participate in the harvesting process, making it a great educational opportunity for both adults and children.
                            Interact with our friendly farm animals—meet rabbits, chickens, cows, goats, and a variety of birds. This unique experience fosters a deep connection with nature and offers insight into rural farming practices, enhancing your appreciation for the environment.
                        </p>
                    </div>

                    <div className="relative">
                        <Slider {...sliderSettings}>
                            <div>
                                <img
                                    src={deluxeRoomImage}
                                    alt="Farming Image 1"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div>
                                <img
                                    src={tentsImage}
                                    alt="Farming Image 2"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>

            <section id="1" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="relative order-last lg:order-first">
                        <Slider {...sliderSettings}>
                            <div>
                                <img
                                    src={deluxeRoomImage}
                                    alt="Initiatives Image 1"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div>
                                <img
                                    src={tentsImage}
                                    alt="Initiatives Image 2"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </Slider>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#212121] font-serif">
                            Adventure and Sports: Engage Your Senses
                        </h2>

                        <p className="text-lg mb-4 text-[#212121] font-light font-sans leading-relaxed">
                            For thrill-seekers, SR Eco Retreat is a haven of outdoor activities. Challenge your friends to a friendly match in badminton, mud volleyball, or throwball, or try your hand at our small cricket ground. If cycling is your passion, our well-maintained tracks wind through the serene countryside, inviting you to explore and appreciate the natural beauty around you.
                        </p>

                        <p className="text-lg text-[#212121] font-light font-sans leading-relaxed">
                            For those looking to venture further, we offer guided trekking experiences to nearby scenic hills, where breathtaking views of sunrises and sunsets await. Our jeep services ensure your trek is both safe and enjoyable, allowing you to fully immerse yourself in the adventure.
                        </p>
                    </div>

                </div>
            </section>
            <section id="2" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                            Relaxation and Rejuvenation: Find Your Peace
                        </h2>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            After an exhilarating day, unwind with our calming evening activities. Gather around a cozy campfire by the tranquil lake, where you can share stories and connect with fellow guests under a starlit sky. Experience the joy of our rain dance setup, which invites you to engage with nature in a playful, refreshing way.
                        </p>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            These evening activities create a perfect balance between excitement and tranquility, enabling you to relax and savor the beauty of the natural world around you.
                        </p>
                    </div>

                    <div className="relative">
                        <Slider {...sliderSettings}>
                            <div>
                                <img
                                    src={deluxeRoomImage}
                                    alt="Farming Image 1"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div>
                                <img
                                    src={tentsImage}
                                    alt="Farming Image 2"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            <section id="3" className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                    <div className="relative order-last lg:order-first">
                        <Slider {...sliderSettings}>
                            <div>
                                <img
                                    src={deluxeRoomImage}
                                    alt="Initiatives Image 1"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div>
                                <img
                                    src={tentsImage}
                                    alt="Initiatives Image 2"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </Slider>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#212121] font-serif">
                            Indoor Fun and Events: Bond and Celebrate
                        </h2>

                        <p className="text-lg mb-4 text-[#212121] font-light font-sans leading-relaxed">
                            On days when you prefer a quieter experience, SR Eco Retreat offers a variety of indoor games to keep the fun going. Engage in friendly competitions with foosball, chess, carom, and classic board games like Ludo. These activities provide an excellent opportunity for family bonding or a laid-back evening with friends.
                        </p>

                        <p className="text-lg text-[#212121] font-light font-sans leading-relaxed">
                            Additionally, our spacious open lawn, equipped with professional sound and lighting systems, is ideal for hosting events ranging from birthday celebrations to family gatherings, all set amidst the serene backdrop of nature. It’s the perfect venue for memorable pre-wedding photoshoots, providing a picturesque setting for your special moments.
                        </p>
                    </div>

                </div>
            </section>
            <section id="2" className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-customBlack font-serif">
                            Staycation or Workcation: Balance Work and Relaxation
                        </h2>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            SR Eco Retreat is not just a place for a quick getaway; it's an ideal destination for extended stays or workations. With high-speed internet and comfortable accommodations, you can effortlessly blend work with relaxation. Escape the hustle and bustle of city life while enjoying the fresh air and tranquility of our natural surroundings.
                        </p>

                        <p className="text-lg mb-4 text-customBlack font-light font-sans leading-relaxed">
                            Our resort is designed to cater to remote workers, offering 24/7 power backup, cycling tracks, and a workout room. Whether you’re seeking a peaceful retreat to enhance your productivity or looking to recharge your spirit, SR Eco Retreat provides the perfect setting for a fulfilling staycation near Bangalore.
                        </p>
                    </div>

                    <div className="relative">
                        <Slider {...sliderSettings}>
                            <div>
                                <img
                                    src={deluxeRoomImage}
                                    alt="Farming Image 1"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div>
                                <img
                                    src={tentsImage}
                                    alt="Farming Image 2"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Activities;

