import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdLocalOffer, MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import axios from "axios";

AOS.init();

const RoomsDetails = () => {
    const room = useLoaderData();
    const { _id, description, availability, room_images, price_per_night, room_size, special_offers } = room;
    const [modal, setModal] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/reviews`)
            .then(res => {
                setReviews(res.data);
            });
    }, []);

    const filteredReviews = reviews.filter(review => review.roomTitle === description);

    const handleBookNow = () => {
        setModal(!modal);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars.push(<MdStar key={i} className="text-yellow-400" />);
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars.push(<MdStarHalf key={i} className="text-yellow-400" />);
            } else {
                stars.push(<MdStarOutline key={i} className="text-yellow-400" />);
            }
        }
        
        return stars;
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {/* Image Gallery */}
                <div className="relative">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-full"
                    >
                        {room_images.map((image, id) => (
                            <SwiperSlide key={id}>
                                <div className="relative h-[50vh] md:h-[70vh]">
                                    <img 
                                        className="w-full h-full object-cover object-center" 
                                        src={image} 
                                        alt={`Room ${id + 1}`} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Room Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-10">
                    {/* Room Description */}
                    <div className="lg:col-span-2 space-y-6">
                        <h1 className="text-3xl font-bold text-gray-800">{description}</h1>
                        
                        <div className="prose max-w-none text-gray-600">
                            <p className="text-lg">
                                Experience unparalleled luxury and comfort at our esteemed hotel, where every room is meticulously designed to exceed your expectations. Whether you're seeking a serene retreat, a romantic getaway, or a home-away-from-home for your family vacation, our diverse range of accommodations caters to every traveler's needs.
                            </p>

                            <div className="space-y-6 mt-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Suites</h3>
                                    <p>Indulge in the epitome of sophistication with our Luxury Suites. Each suite boasts spacious living areas, plush king-sized beds adorned with premium linens, and private balconies offering breathtaking views of the city skyline.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Deluxe Rooms</h3>
                                    <p>Experience contemporary elegance in our Deluxe Rooms, featuring modern amenities and stylish furnishings. Sink into sumptuous queen-sized beds after a day of exploration.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Executive Studios</h3>
                                    <p>Ideal for business travelers or extended stays, our Executive Studios offer a harmonious blend of comfort and functionality. Each studio features a well-equipped kitchenette.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Suites</h3>
                                    <p>Create lasting memories with your loved ones in our spacious Family Suites. Designed with families in mind, these suites feature separate sleeping areas for parents and children.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Accessible Rooms</h3>
                                    <p>We are committed to ensuring that all guests have a comfortable and enjoyable stay. Our Accessible Rooms feature thoughtful design elements to accommodate guests with mobility challenges.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg sticky top-6 h-fit">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-blue-500 pb-4">
                                <h2 className="text-xl font-bold">Price Per Night</h2>
                                <p className="text-2xl font-bold">${price_per_night}</p>
                            </div>

                            <div className="flex justify-between items-center border-b border-blue-500 pb-4">
                                <h2 className="text-xl font-bold">Room Size</h2>
                                <p className="text-xl">{room_size}</p>
                            </div>

                            <div className="bg-blue-700 rounded-xl p-6 text-center">
                                <MdLocalOffer className="mx-auto text-4xl mb-3" />
                                <h3 className="text-2xl font-bold mb-1">Special Offer</h3>
                                <p className="text-xl font-semibold text-yellow-300">{special_offers}</p>
                            </div>

                            <div className="flex justify-between items-center border-b border-blue-500 pb-4">
                                <h2 className="text-xl font-bold">Availability</h2>
                                <p className={`text-xl font-semibold ${availability === 'All Ready Booked' ? 'text-red-300' : 'text-green-300'}`}>
                                    {availability}
                                </p>
                            </div>

                            <button
                                onClick={handleBookNow}
                                disabled={availability === 'All Ready Booked'}
                                className={`w-full py-3 px-4 rounded-xl font-bold text-lg transition-all ${
                                    availability === 'All Ready Booked' 
                                        ? 'bg-gray-500 cursor-not-allowed' 
                                        : 'bg-black hover:bg-gray-800'
                                }`}
                            >
                                {availability === 'All Ready Booked' ? 'Already Booked' : 'Book Now'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="p-6 md:p-10 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Guest Reviews ({filteredReviews.length})</h2>
                    
                    {filteredReviews.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No reviews yet for this room</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredReviews.map(review => (
                                <div 
                                    key={review._id} 
                                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
                                    data-aos="fade-up"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="flex mr-3">
                                            {renderStars(review.ratings)}
                                        </div>
                                        <span className="text-gray-600">{review.ratings}/5</span>
                                    </div>
                                    <p className="text-gray-700 mb-4 italic">"{review.customerReview}"</p>
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span className="font-medium text-gray-800">{review.reviewUser}</span>
                                        <span>{new Date(review.reviewDate).toLocaleDateString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Booking Modal */}
            {modal && <BookingModal handleBookNow={handleBookNow} room={room} />}
        </div>
    );
};

export default RoomsDetails;