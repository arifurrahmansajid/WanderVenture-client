import { useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Swal from "sweetalert2";

const ReviewModal = ({ room, reviewModal }) => {
    const { room_Title } = room;
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth()
    const handleReview = e => {
        e.preventDefault()
        const reviewUser = user?.displayName
        const userEmail = user?.email
        const roomTitle = room_Title
        const reviewDate = e.target.date.value
        const ratings = e.target.rating.value
        const customerReview = e.target.reviewArea.value
        const userReviews = {
            reviewUser,
            userEmail,
            roomTitle,
            reviewDate,
            ratings,
            customerReview
        }
        axios.post(`${import.meta.env.VITE_API_LINK}/reviews`, userReviews, {withCredentials: true})
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  reviewModal(false)
            }
        })
    }
    return (
        <div className="fixed inset-0 pt-12 md:pt-20 px-3 z-10 w-full bg-gray-500 bg-opacity-45">
            <form onSubmit={handleReview} className="max-w-xl mx-auto shadow-2xl border rounded-lg bg-gray-50 dark:bg-gray-800 p-3 md:p-8 relative space-y-1 md:space-y-5 text-lg">
                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Rooms Title</label>
                    <input type="text" defaultValue={room_Title} readOnly className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
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

                <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Rating</label>
                    <select name="rating" required className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Add Your Review</label>
                    <textarea name="reviewArea" required className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" ></textarea>
                </div>



                <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primay rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Add Review
                </button>

                <div onClick={reviewModal} className="cursor-pointer absolute top-0 right-0 text-3xl pr-2">
                    <RxCross2 />
                </div>
            </form>
        </div>
    );
};

export default ReviewModal;