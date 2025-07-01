// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const RoomCom = ({ room }) => {
    const { _id, description, price_per_night, availability, room_images } = room;
    return (
        <Link to={`/roomDetails/${_id}`} data-aos="fade-up"
            className='border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl p-0 hover:scale-105 duration-300 transition-all bg-white'>
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
                className="mySwiper"
            >
                {
                    room_images.map((image, id) => <SwiperSlide key={id}>
                        <div className="relative h-72">
                            <img className='h-72 w-full object-cover object-center' src={image} alt="" />
                            <div className="absolute top-0 w-full bg-gradient-to-t from-black/70 to-transparent h-full flex flex-col justify-between p-4">
                                <span className="bg-primay text-white px-3 py-1 rounded-full text-sm font-medium self-end">
                                    {availability}
                                </span>
                                <div className='flex justify-between items-end'>
                                    <h1 className="text-2xl font-bold text-white">{description}</h1>
                                    <span className="bg-white text-primay px-3 py-1 rounded-lg font-bold text-lg shadow-md">
                                        ${price_per_night}<span className="text-sm">/night</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='p-5'>
                <div className='flex items-center justify-between mt-2'>
                    <button className="group flex items-center gap-2 font-semibold text-lg hover:text-primay duration-300 transition-colors">
                        View Details
                        <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300"/>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default RoomCom;