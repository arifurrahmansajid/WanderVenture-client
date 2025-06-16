import { Map, Marker, Overlay } from "pigeon-maps";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    FaSwimmingPool, FaWifi, FaUtensils, FaParking, FaSpa, FaConciergeBell,
    FaMapMarkerAlt, FaPhone, FaPlane, FaTrain, FaSubway
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

// Components
import ClientReview from "../components/ClientReview";
import RoomCom from "../components/RoomCom";
import OfferModal from "./OfferModal";
import FAQ from "./FAQ";

// Assets
import slider1 from '../assets/sliders/slider1.jpg';
import slider2 from '../assets/sliders/slider2.jpg';
import slider3 from '../assets/sliders/slider3.jpg';
import slider4 from '../assets/sliders/slider4.jpg';

// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [offer, setOffer] = useState(true);
    const [popupOpen, setPopupOpen] = useState(false);

    const handleModal = () => {
        setOffer(!offer);
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/rooms`, { withCredentials: true })
            .then(res => {
                setRooms(res.data);
            })
            .catch(err => {
                console.error("Error fetching rooms:", err);
            });
    }, []);

    const amenities = [
        { icon: <FaSwimmingPool size={24} />, name: "Swimming Pool" },
        { icon: <FaWifi size={24} />, name: "Free WiFi" },
        { icon: <FaUtensils size={24} />, name: "Restaurant" },
        { icon: <FaParking size={24} />, name: "Parking" },
        { icon: <FaSpa size={24} />, name: "Spa" },
        { icon: <FaConciergeBell size={24} />, name: "24/7 Service" }
    ];

    return (
        <div className="pb-24">
            {/* Hero Slider */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {[slider1, slider2, slider3, slider4].map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[80vh] w-full">
                            <img
                                className="absolute inset-0 h-full w-full object-cover object-center"
                                src={slide}
                                alt={`Slide ${index + 1}`}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                                <div className="max-w-3xl text-white">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                        Luxury Redefined at Hotel.Fair
                                    </h1>
                                    <p className="text-lg md:text-xl mb-8">
                                        {index === 0 && "Experience the pinnacle of hospitality where every moment is crafted to perfection."}
                                        {index === 1 && "Unveiling the epitome of opulence and comfort for discerning travelers."}
                                        {index === 2 && "Our culinary offerings are a gastronomic delight, crafted by world-class chefs."}
                                        {index === 3 && "From sunrise to sunset, experience aquatic luxury in our pristine pools."}
                                    </p>
                                    <Link
                                        to="/allRooms"
                                        className="inline-block px-8 py-3 bg-[#4D869C] hover:bg-[#3a6a7d] text-white font-semibold rounded-full transition-colors duration-300"
                                    >
                                        Book Your Stay
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Amenities Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Amenities</h2>
                        <div className="flex justify-center">
                            <span className="block w-20 h-1 bg-[#4D869C] rounded-full"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {amenities.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className="text-[#4D869C] mb-3 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="font-medium text-gray-800">{item.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Rooms */}
            <div className="py-16 container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Rooms</h2>
                    <div className="flex justify-center">
                        <span className="block w-20 h-1 bg-[#4D869C] rounded-full"></span>
                    </div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Discover our exquisite selection of rooms designed for your comfort and luxury
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.slice(0, 6).map(room => (
                        <RoomCom key={room._id} room={room} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        to="/allRooms"
                        className="inline-flex items-center px-6 py-3 bg-[#4D869C] hover:bg-[#3a6a7d] text-white font-medium rounded-lg transition-colors duration-300"
                    >
                        View All Rooms <IoIosArrowForward className="ml-2" />
                    </Link>
                </div>
            </div>

            {/* Testimonials */}
            <ClientReview />

            {/* FAQ Section */}
            <FAQ />

            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
                        <div className="flex justify-center">
                            <span className="block w-20 h-1 bg-[#4D869C] rounded-full"></span>
                        </div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Find us at the heart of the city for your convenience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <h3 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 mb-6">
                                <FaMapMarkerAlt className="text-[#4D869C]" />
                                Hotel.Fair Address
                            </h3>
                            <div className="space-y-4">
                                <p className="flex items-start gap-3 text-gray-700">
                                    <FaMapMarkerAlt className="text-[#4D869C] mt-1 flex-shrink-0" />
                                    123 Hospitality Avenue, Downtown District
                                    <br />
                                    Dhaka 1212, Bangladesh
                                </p>
                                <p className="flex items-center gap-3 text-gray-700">
                                    <FaPhone className="text-[#4D869C]" />
                                    +880 1234 567890
                                </p>

                                <div className="pt-4">
                                    <h4 className="font-medium text-gray-800 mb-3">Transportation Options:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <FaPlane className="text-[#4D869C]" />
                                            15 minutes from Hazrat Shahjalal International Airport
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <FaTrain className="text-[#4D869C]" />
                                            10 minutes walk from Kamalapur Railway Station
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-700">
                                            <FaSubway className="text-[#4D869C]" />
                                            Direct access from Motijheel Metro Station (Exit 3)
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=123+Hospitality+Avenue,+Dhaka+1212,+Bangladesh", "_blank")}
                                    className="mt-6 px-6 py-3 bg-[#4D869C] hover:bg-[#3a6a7d] text-white font-medium rounded-lg transition-colors">
                                    Get Directions
                                </button>
                            </div>
                        </div>

                        <div className="h-96 md:h-full rounded-xl overflow-hidden shadow-md">
                            <Map
                                height="100%"
                                defaultCenter={[24.455447, 89.709901]}
                                defaultZoom={15}
                            >
                                <Marker
                                    width={50}
                                    anchor={[24.455447, 89.709901]}
                                    color="#4D869C"
                                    onClick={() => setPopupOpen(true)}
                                />

                                {popupOpen && (
                                    <Overlay anchor={[24.455447, 89.709901]} offset={[0, 20]}>
                                        <div className="p-2 bg-white rounded shadow-lg">
                                            <h4 className="font-bold text-[#4D869C]">Hotel.Fair</h4>
                                            <p className="text-sm">123 Hospitality Avenue</p>
                                            <button
                                                className="text-xs text-[#4D869C] mt-1"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPopupOpen(false);
                                                }}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </Overlay>
                                )}
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
            {/* Special Offer Modal */}
            {offer && <OfferModal handleModal={handleModal} />}
        </div>
    );
};

export default Home;