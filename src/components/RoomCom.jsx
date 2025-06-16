// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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
            className='border p-5 hover:scale-110 duration-300'>
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
                            <div className="absolute top-0 w-full bg-black bg-opacity-30 h-full">
                                <div className='bg-primay p-3 flex items-center justify-between'>
                                    <h1 className="font-bold text-xl text-white ">{availability}</h1>
                                    <h1 className="font-bold text-xl text-white "> 
                                    $ {price_per_night}</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className='py-5'>
                <h1 className='text-2xl font-bold text-primay'>{description}</h1>
            </div>
            <div className='float-end flex items-center gap-3 font-bold text-xl hover:text-primay duration-300 transition'>
                <button>View Details</button>
                <FaArrowRightLong></FaArrowRightLong>
            </div>
        </Link>
    );
};

export default RoomCom;