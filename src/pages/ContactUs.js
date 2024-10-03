import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const ContactUs = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 mt-6">

            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="text-center text-4xl font-serif text-customBlack mb-4">Get In Touch</h1>
                <div className="w-full bg-white py-6 mb-8">
                    <p className="text-lg leading-relaxed font-light text-customBlack">
                        We'd love to hear from you!
                        <br />
                        Have questions about your next stay at one of the top farm stays near Bangalore? Need more information on our wide range of activities, or want to plan a corporate team outing, family vacation, or staycation? Reach out to us for details on our accommodations, including private rooms, dormitories, tents, and private houses. We're here to assist with any inquiries regarding adventure activities like trekking, cycling, or farming experiences, as well as event hosting, including team outings, pre-wedding events, and workations. Our team is dedicated to making your visit to SR Eco Retreat an unforgettable experience, whether you're seeking a peaceful retreat or a thrilling adventure.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-12 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                    <h3 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h3>
                    <p className="text-lg text-gray-600 mb-8">
                        We're here to assist you with any queries or booking details. Reach out via phone or email, and we'll get back to you shortly.
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center space-x-3">
                            <FaPhoneAlt className="text-blue-600" />
                            <a href="tel:+916361120392" className="hover:text-blue-600 transition duration-200 ease-in-out">
                                +91-6361120392
                            </a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaEnvelope className="text-red-600" />
                            <a href="mailto:Info@srecoretreat.com" className="hover:text-red-600 transition duration-200 ease-in-out">
                            Info@srecoretreat.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <FaMapMarkerAlt className="text-green-600" />
                            <span>SR Eco Retreat, Hanabe, Doddaballapur, Karnataka - 561203</span>
                        </li>
                    </ul>
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.945169770485!2d77.462021!3d13.315775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDE5JzU3LjkiTiA3N8KwMjcnNDMuMiJF!5e0!3m2!1sen!2sin!4v1695642835693!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                <div className="bg-white shadow-xl rounded-lg p-8">

                    <h3 className="text-4xl font-bold text-gray-800 mb-6">
                        Nearby Places: Explore the Best of Bangalore’s Surroundings
                    </h3>

                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Discover the incredible attractions just a short drive from SR Eco Retreat! Our prime location makes it easy for you to explore some of the most beautiful and exciting spots around Bangalore. Here are some must-visit destinations nearby:
                    </p>

                    <ul className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <li>
                            <span className="font-bold text-xl">🌍 Conveniently Located</span>
                            <ul className="list-disc pl-6">
                                <li>
                                    <strong>40 Minutes from Kempegowda International Airport:</strong> Arrive at your weekend getaway in no time!
                                </li>
                                <li>
                                    <strong>60 Minutes to MG Road, Bengaluru:</strong> Experience the bustling heart of the city before retreating to nature.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span className="font-bold text-xl">🏞️ Adventure Awaits</span>
                            <ul className="list-disc pl-6">
                                <li>
                                    <strong>40 Minutes to Nandi Hills:</strong> A popular destination for sunrise treks, offering breathtaking views and a refreshing escape.
                                </li>
                                <li>
                                    <strong>45 Minutes to Skandagiri Trek Spot:</strong> Perfect for adventure enthusiasts, this trek promises an unforgettable experience.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span className="font-bold text-xl">🕉️ Spiritual Serenity</span>
                            <ul className="list-disc pl-6">
                                <li>
                                    <strong>60 Minutes to Isha Foundation:</strong> Visit this renowned spiritual center for a unique experience in meditation and well-being.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span className="font-bold text-xl">🚗 Easy Access to Surrounding Towns</span>
                            <ul className="list-disc pl-6">
                                <li>
                                    <strong>50 Minutes to Tumakuru:</strong> Explore this vibrant town known for its rich history and culture.
                                </li>
                                <li>
                                    <strong>15 Minutes to Doddaballapur:</strong> Discover this charming town, famous for its handloom weaving and scenic landscapes.
                                </li>
                                <li>
                                    <strong>20 Minutes from NH 48 (Bangalore-Mumbai Highway):</strong> Easy access for those traveling from further away.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="bg-gray-50 shadow-lg border rounded-lg p-8">
                    <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h3>
                    <div className="overflow-hidden">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8Xto_GHCjAeRXgCGuCe46am6q2nGVM22ZIjbnqkrzlCQqSA/viewform?embedded=true" width="480" height="1094" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
