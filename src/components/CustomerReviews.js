import React,{ useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
    {
        id: 1,
        name: 'Rohit Sharma (Bangalore, India)',
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
        rating: 5,
        text: `"Perfect for a family escape!"
  \nSR Eco Retreat is one of the top resorts in Bangalore for family. The kids loved the farm animals, and we enjoyed the fresh food and cozy stay. Highly recommend for families looking for a peaceful break from city life!
  `,
    },
    {
        id: 2,
        name: 'Anita Reddy (Bangalore, India)',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 4,
        text: `"Great for team bonding!"
  Our corporate retreat was held at one of the best resorts in Bangalore for team outings. Lots of activities like trekking near Bangalore and outdoor sports. Perfect for team bonding!`,
    },
    {
        id: 3,
        name: 'Vikram Patel (Pune, India)',
        avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
        rating: 5,
        text: `"Rejuvenating solo adventure!"
  SR Eco Retreat is an ideal spot for solo travelers looking for weekend getaways from Bangalore. The cycling paths and peaceful environment left me refreshed.
  `,
    },
    {
        id: 4,
        name: 'Megha & Raj Malhotra (Mumbai, India)',
        avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
        rating: 5,
        text: `"Romantic and relaxing!"
  We stayed in a private house near Bangalore for our anniversary. Perfect privacy, farm-fresh meals, and a romantic evening by the campfire made our getaway unforgettable.`,
    },

    {
        id: 5,
        name: 'Neha & Rahul S. (Mumbai, India)',
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
        rating: 5,
        text: `Fantastic stay! We enjoyed the private house near Bangalore, and the romantic setting by the campfire made our weekend getaway unforgettable.`,
    },
    {
        id: 6,
        name: 'Priya K. (Bangalore, India)',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        rating: 4,
        text: `This farm stay near Bangalore is perfect for families! My kids loved the animals, and the scenic views were beautiful. Highly recommended for a family vacation.`,
    },
    {
        id: 7,
        name: 'Vikram J. (Hyderabad, India)',
        avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
        rating: 5,
        text: `Had an adventurous weekend trip from Bangalore. The trekking trails and cycling paths were exciting, and the campfire was the perfect way to end the day.`,
    },
    {
        id: 8,
        name: 'Shweta D. (Bangalore, India)',
        avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
        rating: 4,
        text: `One of the best weekend destinations around Bangalore. The mix of adventure and relaxation activities made it a fun and memorable outing for our group.`,
    },
];

const CustomerReviews = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: 300,
                    behavior: 'smooth',
                });

                if (
                    scrollContainerRef.current.scrollLeft + 
                    scrollContainerRef.current.offsetWidth >= 
                    scrollContainerRef.current.scrollWidth
                ) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100 relative">
        <h2 className="text-4xl font-extrabold text-center font-serif text-gray-900 mb-12 tracking-wide">
            What Our Customers Say
        </h2>

        <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-8 pb-6 scrollbar-hide relative"
        >
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="min-w-[300px] max-w-[350px] p-6 bg-white bg-opacity-80 rounded-xl shadow-xl flex-shrink-0 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                >
                    <div className="flex items-center mb-4">
                        <div>
                            <h3 className="text-2xl font-semibold font-serif text-gray-800 mb-1">
                                {review.name}
                            </h3>
                            <div className="flex space-x-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                                    <FaStar key={i} className="text-gray-300" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-700 text-base font-light leading-relaxed italic">
                        "{review.text}"
                    </p>
                </div>
            ))}
        </div>
    </section>
    );
};

export default CustomerReviews;
