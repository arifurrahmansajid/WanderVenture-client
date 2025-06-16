import { RxCross2 } from "react-icons/rx";
import useAuth from "../AuthProvider/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BookingModal = ({handleBookNow, room}) => {
    const {user} = useAuth();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const { _id, description,  price_per_night, room_size, special_offers } = room;
    const handleBookingRoom = e =>{
        e.preventDefault()
        const email = user?.email
        const name = user?.displayName
        const room_Title = description
        const price = price_per_night
        const room_Size = room_size
        const offer = special_offers
        const room_id = _id
        const bookingDate = e.target.date.value;

        const bookingData = {
            email,
            name,
            room_id,
            room_Title,
            room_Size,
            price,
            bookingDate,
            offer
        }

        console.log();

        axios.post(`${import.meta.env.VITE_API_LINK}/myRooms`, bookingData, {withCredentials: true})
        .then(res =>{
            Swal.fire({
                title: "Are booking this room?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                  if(res.data.insertedId){
                    Swal.fire({
                        title: "Room Booked!",
                        text: "Your Room Successflly Booked.",
                        icon: "success"
                      });
                  }
                  navigate('/myRooms')
                }
              });
        })
    }
    return (
        <div className="fixed inset-0 pt-12 md:pt-20 px-3 z-10 w-full bg-gray-500 bg-opacity-45">
            <form onSubmit={handleBookingRoom} className="max-w-xl mx-auto shadow-2xl border rounded-lg bg-gray-50 dark:bg-gray-800 p-3 md:p-8 relative space-y-1 md:space-y-5">
            <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Rooms Title</label>
                    <input type="text" defaultValue={description} readOnly className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Rooms Price</label>
                        <input type="text" defaultValue={`Per Night $ ${price_per_night}`} className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Rooms Area</label>
                        <input type="text" defaultValue={room_size} className="block w-full px-5 py-2.5  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Special Offers</label>
                    <input type="text" defaultValue={special_offers} className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Your Name</label>
                        <input type="text" defaultValue={user?.displayName} readOnly className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div className="flex-1 px-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Booking Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="date" className="block w-full px-5 py-2.5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" defaultValue={user?.email} readOnly className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>



                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primay rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Booking Now
                </button>

                <div onClick={handleBookNow} className="cursor-pointer absolute top-0 right-0 text-3xl pr-2">
                    <RxCross2/>
                </div>
            </form>
        </div>
    );
};

export default BookingModal;