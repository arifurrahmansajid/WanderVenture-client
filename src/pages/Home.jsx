import { Map, Marker } from "pigeon-maps"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slider1 from '../assets/sliders/slider1.jpg'
import slider2 from '../assets/sliders/slider2.jpg'
import slider3 from '../assets/sliders/slider3.jpg'
import slider4 from '../assets/sliders/slider4.jpg'

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import ClientReview from "../components/ClientReview";
import axios from "axios";
import { useEffect, useState } from "react";
import RoomCom from "../components/RoomCom";
import OfferModal from "./OfferModal";
import FAQ from "./FAQ";
const Home = () => {
    const [rooms, setRooms] = useState([])
    const [offer, setOffer] = useState(true)
    const handleModal = () => {
        setOffer(!offer)
    }
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/rooms`, { withCredentials: true })
            .then(res => {
                setRooms(res.data);
            })
    }, [])
    return (
        <div className="py-24 px-3 container mx-auto">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider1} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md ">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Experience the pinnacle of hospitality at our hotel fair, where every moment is crafted to perfection, ensuring memories that last a lifetime.</p>
                                <Link to={'/allRooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider2} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Unveiling the epitome of opulence and comfort, our hotel fair promises an unparalleled experience for discerning travelers.</p>
                                <Link to={'/allRooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider3} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">Our culinary offerings are a gastronomic delight, with world-class chefs crafting exquisite dishes that tantalize the palate. </p>
                                <Link to={'/allRooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[80vh]">
                        <img className='h-[80vh] w-full object-cover object-center' src={slider4} alt="" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div data-aos="fade-right" data-aos-duration="3000" className="max-w-md">
                                <h1 className="text-5xl font-bold text-white pb-5">Welcome Hotel.Fair</h1>
                                <p className="mb-5 text-xl">From sunrise to sunset, our Swimmingful Hotel invites you to experience the epitome of aquatic luxury, where every dip is a journey into blissful serenity.</p>
                                <Link to={'/allRooms'}><button className="px-8 py-3 rounded-full font-bold bg-primay hover:bg-cyan-600 text-xl">Book Now</button></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="pt-24">
                <div className="pb-10">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Featured Rooms
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-primay rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-primay rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-primay rounded-full"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        rooms.slice(0, 6).map(room => <RoomCom key={room._id} room={room}></RoomCom>)
                    }
                </div>
                <div className="text-center mt-16">
                    <Link to={'/allRooms'} className="px-8 py-4 text-xl font-semibold bg-primay text-white hover:bg-cyan-600 duration-300 transition">
                        <button>See All Rooms</button>
                    </Link>
                </div>
            </div>

            <FAQ></FAQ>

            <ClientReview></ClientReview>

            <div className="pt-20">
                <div className="pb-10">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Our Location
                    </h1>

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-primay rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-primay rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-primay rounded-full"></span>
                    </div>
                </div>
                <Map height={400} defaultCenter={[24.455447, 89.709901]} defaultZoom={11}>
                    <Marker width={50} anchor={[24.455447, 89.709901]} />
                </Map>
            </div>
            {
                offer && <OfferModal handleModal={handleModal}></OfferModal>
            }
        </div>
    );
};

export default Home;