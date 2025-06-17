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
    const { user } = useAuth();

    const handleReview = e => {
        e.preventDefault();
        const reviewUser = user?.displayName;
        const userEmail = user?.email;
        const roomTitle = room_Title;
        const reviewDate = e.target.date.value;
        const ratings = e.target.rating.value;
        const customerReview = e.target.reviewArea.value;
        
        const userReviews = {
            reviewUser,
            userEmail,
            roomTitle,
            reviewDate,
            ratings,
            customerReview
        };

        axios.post(`${import.meta.env.VITE_API_LINK}/reviews`, userReviews, { withCredentials: true })
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    reviewModal(false);
                }
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl mx-4 bg-white rounded-xl shadow-xl overflow-hidden">
                {/* Close Button */}
                <button 
                    onClick={() => reviewModal(false)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <RxCross2 className="w-5 h-5 text-gray-500" />
                </button>

                <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Experience</h2>
                    
                    <form onSubmit={handleReview} className="space-y-5">
                        {/* Room Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Room Title</label>
                            <input 
                                type="text" 
                                defaultValue={room_Title} 
                                readOnly 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            />
                        </div>

                        {/* User Info Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    defaultValue={user?.displayName} 
                                    readOnly 
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Review Date</label>
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} 
                                    name="date" 
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                defaultValue={user?.email} 
                                readOnly 
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                            <select 
                                name="rating" 
                                required 
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="5">5 Stars - Excellent</option>
                                <option value="4">4 Stars - Very Good</option>
                                <option value="3">3 Stars - Good</option>
                                <option value="2">2 Stars - Fair</option>
                                <option value="1">1 Star - Poor</option>
                            </select>
                        </div>

                        {/* Review Text */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                            <textarea 
                                name="reviewArea" 
                                required 
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Tell us about your experience with this room..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;