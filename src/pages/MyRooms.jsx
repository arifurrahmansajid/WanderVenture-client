import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css';
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";
import ReviewModal from "./ReviewModal";

const MyRooms = () => {
    const [myRooms, setMyRooms] = useState([]);
    const { user } = useAuth();
    const [selectedRoomForUpdate, setSelectedRoomForUpdate] = useState(null);
    const [selectedRoomForReview, setSelectedRoomForReview] = useState(null);

    const getData = () => {
        axios.get(`${import.meta.env.VITE_API_LINK}/myRooms?email=${user?.email}`, { withCredentials: true })
            .then((res) => {
                setMyRooms(res.data);
            })
            .catch((err) => console.error("Error fetching rooms:", err));
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_LINK}/myRooms/${id}`, { withCredentials: true })
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            getData();
                        }
                    })
                    .catch(err => console.error("Error deleting room:", err));
            }
        });
    };

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>
                <div className="text-sm text-gray-500">
                    {myRooms.length} {myRooms.length === 1 ? 'booking' : 'bookings'}
                </div>
            </div>

            {myRooms.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <FaStar className="text-gray-400 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-medium text-gray-700 mb-2">No Bookings Yet</h2>
                    <p className="text-gray-500 max-w-md mx-auto">
                        You haven't booked any rooms yet. Start exploring our collection to find your perfect stay.
                    </p>
                </div>
            ) : (
                <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Room Details
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Size
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {myRooms.map(room => (
                                    <tr key={room._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-lg overflow-hidden">
                                                    {room.image && (
                                                        <img className="h-full w-full object-cover" src={room.image} alt={room.room_Title} />
                                                    )}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{room.room_Title}</div>
                                                    <div className="text-sm text-gray-500">{room.location || 'N/A'}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {new Date(room.bookingDate).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-sm font-semibold rounded-full bg-green-100 text-green-800">
                                                ${room.price}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500">
                                            {room.room_Size} sq.ft
                                        </td>
                                        <td className="px-6 py-5 whitespace-nowrap text-sm font-medium">
                                            <div className="flex items-center space-x-3">
                                                <button
                                                    onClick={() => setSelectedRoomForUpdate(room)}
                                                    className="text-indigo-600 hover:text-indigo-900 flex items-center"
                                                >
                                                    <FaEdit className="mr-1" /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(room._id)}
                                                    className="text-red-600 hover:text-red-900 flex items-center"
                                                >
                                                    <MdDelete className="mr-1" /> Delete
                                                </button>
                                                <button
                                                    onClick={() => setSelectedRoomForReview(room)}
                                                    className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700 flex items-center"
                                                >
                                                    <FaStar className="mr-1 text-yellow-200" /> Review
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {selectedRoomForUpdate && (
                <UpdateModal 
                    handleUpdate={() => {
                        setSelectedRoomForUpdate(null);
                        getData();
                    }} 
                    room={selectedRoomForUpdate} 
                />
            )}
            
            {selectedRoomForReview && (
                <ReviewModal 
                    room={selectedRoomForReview} 
                    reviewModal={() => setSelectedRoomForReview(null)} 
                />
            )}
        </div>
    );
};

export default MyRooms;