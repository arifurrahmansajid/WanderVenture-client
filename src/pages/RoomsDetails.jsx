import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdLocalOffer } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import axios from "axios";


const RoomsDetails = () => {
    const room = useLoaderData()
    const { _id, description, availability, room_images, price_per_night, room_size, special_offers } = room;
    const [modal, setModal] = useState(false)

    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_LINK}/reviews`)
        .then(res =>{
            setReviews(res.data);
        })
    },[])

    const filter = reviews.filter(review => review.roomTitle === description)
    // console.log(filter);

    const handleBookNow = () =>{
        setModal(!modal)
    }
    return (
        <div className="py-24 px-3 container mx-auto">
            <div
                className='border p-3 md:p-8'>
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
                            <div className="relative h-[60vh]">
                                <img className='h-[60vh] w-full object-cover object-center' src={image} alt="" />
                                <div className="absolute top-0 w-full bg-black bg-opacity-30 h-full">
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
                    <div>
                        <h1 className='text-2xl font-bold text-primay'>{description}</h1>
                        <br />
                        <p>Experience unparalleled luxury and comfort at our esteemed hotel, where every room is meticulously designed to exceed your expectations. Whether youre seeking a serene retreat, a romantic getaway, or a home-away-from-home for your family vacation, our diverse range of accommodations caters to every travelers needs.
                        </p>
                        <p><br /><br /><b>Luxury Suites:</b> Indulge in the epitome of sophistication with our Luxury Suites. Each suite boasts spacious living areas, plush king-sized beds adorned with premium linens, and private balconies offering breathtaking views of the city skyline. Immerse yourself in opulence with marble-clad bathrooms featuring deep soaking tubs and separate rainfall showers. Exclusive access to our executive lounge ensures an elevated experience with complimentary breakfast and evening cocktails.</p>

                        <p><br /><b>Deluxe Rooms:</b> Experience contemporary elegance in our Deluxe Rooms, featuring modern amenities and stylish furnishings. Sink into sumptuous queen-sized beds after a day of exploration, and enjoy natural light and views of the surrounding landscape through large windows. Stay connected with complimentary high-speed Wi-Fi and unwind in comfort.</p>

                        <p><br /><b>Executive Studios:</b> Ideal for business travelers or extended stays, our Executive Studios offer a harmonious blend of comfort and functionality. Each studio features a well-equipped kitchenette, a comfortable work desk, and a cozy seating area. Relax on plush sofas and enjoy entertainment on smart TVs. These studios provide a home-away-from-home experience for discerning guests.</p>

                        <p><br /><b>Family Suites:</b> Create lasting memories with your loved ones in our spacious Family Suites. Designed with families in mind, these suites feature separate sleeping areas for parents and children, ensuring privacy and comfort for all. Kids will delight in dedicated play areas equipped with games and toys, while parents can unwind on private terraces overlooking the hotel gardens.</p>

                        <p><br />
                            <b>Accessible Rooms:</b> We are committed to ensuring that all guests have a comfortable and enjoyable stay. Our Accessible Rooms feature thoughtful design elements to accommodate guests with mobility challenges. Wider doorways, grab bars in bathrooms, and roll-in showers ensure ease of access, providing a welcoming and inclusive environment for all our guests.</p>

                    </div>
                    <div className="bg-primay text-white h-fit p-3 md:p-10 space-y-6 rounded sticky top-24"> 
                        <div className="flex items-center justify-between text-2xl md:text-3xl font-bold">
                            <h1>Price Per Night :</h1>
                            <p className="">$ {price_per_night}</p>
                        </div>
                        <div className="flex items-center justify-between text-2xl md:text-3xl font-bold">
                            <h1>Our Room Size :</h1>
                            <p className="">{room_size}</p>
                        </div>
                        <div className="bg-black p-10 rounded-full">
                            <MdLocalOffer className="mx-auto text-2xl md:text-3xl"></MdLocalOffer>
                            <h1 className="text-3xl font-bold pt-5 text-center">Special Offers <br /> <span className="text-primay">{special_offers}</span></h1>
                        </div>
                        <div className="flex items-center justify-between text-2xl md:text-3xl font-bold">
                            <h1>Availability :</h1>
                            <p>{availability}</p>
                        </div>
                        <div className="flex items-center justify-center text-3xl font-bold">
                            <button
                            onClick={()=>handleBookNow(_id)}
                            disabled={availability === 'All Ready Booked'}
                            className={`bg-black $} text-white text-xl font-bold rounded px-8 py-3`}>{
                                availability === 'All Ready Booked' ? 'Already Booked' : 'Book Now'
                            }</button>
                        </div>
                    </div>
                </div>
                {
                    modal && <BookingModal handleBookNow={handleBookNow} room={room} ></BookingModal>
                }
                <div className="py-16">
                    <h1 className="text-3xl pb-5">Review ({filter.length})</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
                    {
                        filter.map(review => <div className="border p-5 space-y-3 border-primay" key={review._id}>
                            <h1>{review.customerReview}</h1>
                            <p>Name : <span className="font-bold text-xl"> {review.reviewUser}</span> </p>
                            <p>Date : <span className="font-bold text-xl"> {review.reviewDate}</span> </p>
                            <p>Rating : <span className="font-bold text-xl"> {review.ratings}</span> </p>
                        </div>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsDetails;