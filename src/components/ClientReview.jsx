import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const ClientReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/reviews`)
            .then(res => {
                setReviews(res.data)
            })
    }, [])
    return (
        <div>
            <section className="bg-white pt-20">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        What clients saying
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-primay rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-primay rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-primay rounded-full"></span>
                    </div>
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
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className="max-w-3xl mx-auto py-10">
                                    <div className="text-gray-500 lg:mx-8 space-y-5">
                                        <b className="">Room Booked: {review.roomTitle} </b>
                                        {review.customerReview}
                                        <div className="float-right">
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">Review Date : {review.reviewDate}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">Ratings : {review.ratings}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center justify-center mt-8">
                                        <img className="object-cover rounded-full w-14 h-14" src="https://source.unsplash.com/80x80/?portrait?1" alt="" />

                                        <div className="mt-4 text-center">
                                            <h1 className="font-semibold text-gray-800 dark:text-white">{review.reviewUser}</h1>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Marketer</span>



                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>

                </div>
            </section>
        </div>
    );
};

export default ClientReview;