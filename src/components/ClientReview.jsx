import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const ClientReview = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/reviews`)
            .then(res => {
                setReviews(res.data);
            })
            .catch(err => {
                console.error("Error fetching reviews:", err);
                setReviews([]);
            });
    }, []);

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <FaStar 
                key={i} 
                className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-lg`} 
            />
        ));
    };

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="container px-4 mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        What Our Clients Say
                    </h1>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our valued guests about their experiences
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-1.5 mx-2 bg-blue-400 rounded-full"></div>
                        <div className="w-1 h-1.5 bg-blue-300 rounded-full"></div>
                    </div>
                </div>

                {/* Reviews Slider */}
                <div className="max-w-4xl mx-auto">
                    <Swiper
                        centeredSlides={true}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="reviewSwiper"
                    >
                        {reviews.map(review => (
                            <SwiperSlide key={review._id}>
                                <div className="bg-white/90 p-8 md:p-10 rounded-2xl shadow-lg mx-4 border border-blue-100">
                                    <div className="text-center mb-6">
                                        <FaQuoteLeft className="mx-auto text-4xl text-blue-200" />
                                    </div>
                                    
                                    <div className="text-center mb-8">
                                        <p className="text-lg text-gray-700 italic mb-4">
                                            "{review.customerReview}"
                                        </p>
                                        <div className="flex justify-center items-center space-x-1 mb-2">
                                            {renderStars(review.ratings)}
                                        </div>
                                        <p className="text-sm text-blue-500 font-medium">
                                            Room: {review.roomTitle}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 shadow mb-3">
                                            <img 
                                                className="w-full h-full object-cover" 
                                                src="https://source.unsplash.com/80x80/?portrait" 
                                                alt={review.reviewUser} 
                                            />
                                        </div>
                                        <h3 className="font-semibold text-gray-800">{review.reviewUser}</h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {new Date(review.reviewDate).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx>{`
                .reviewSwiper {
                    padding-bottom: 40px;
                }
                .reviewSwiper .swiper-pagination-bullet {
                    background: #CBD5E0;
                    opacity: 1;
                }
                .reviewSwiper .swiper-pagination-bullet-active {
                    background: #3B82F6;
                }
            `}</style>
        </section>
    );
};

export default ClientReview;