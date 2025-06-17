import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../AuthProvider/useAuth";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateModal = ({ room, handleUpdate }) => {
    const { _id, room_Title, price, room_Size, offer, bookingDate } = room;
    const initialDate = bookingDate ? new Date(bookingDate) : new Date();
    const [startDate, setStartDate] = useState(initialDate);
    const { user } = useAuth();

    const handleUpdateDate = (e) => {
        e.preventDefault();
        const updatedBookingDate = startDate.toISOString();
        const update = { bookingDate: updatedBookingDate };

        axios.patch(`${import.meta.env.VITE_API_LINK}/myRooms/${_id}`, update, { withCredentials: true })
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Booking date updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    handleUpdate();
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-md mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
                <button 
                    onClick={handleUpdate}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <RxCross2 className="w-6 h-6" />
                </button>

                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Booking Date</h2>
                    
                    <form onSubmit={handleUpdateDate} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Room Title</label>
                                <input 
                                    type="text" 
                                    defaultValue={room_Title} 
                                    readOnly 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                    <input 
                                        type="text" 
                                        defaultValue={`$${price}`} 
                                        readOnly 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                                    <input 
                                        type="text" 
                                        defaultValue={room_Size} 
                                        readOnly 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Special Offer</label>
                                <input 
                                    type="text" 
                                    defaultValue={offer || 'None'} 
                                    readOnly 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        defaultValue={user?.displayName} 
                                        readOnly 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        defaultValue={user?.email} 
                                        readOnly 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">New Booking Date</label>
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    dateFormat="MMMM d, yyyy"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Update Booking Date
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;