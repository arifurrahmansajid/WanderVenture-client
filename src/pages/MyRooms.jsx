import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css';
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";
import ReviewModal from "./ReviewModal";

const MyRooms = () => {
    const [myRooms, setMyRooms] = useState([]);
    const { user } = useAuth();
    // Instead of using booleans, store the specific room object for update or review
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
        axios.delete(`${import.meta.env.VITE_API_LINK}/myRooms/${id}`, { withCredentials: true })
            .then((res) => {
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
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            getData();
                        }
                    }
                });
            })
            .catch(err => console.error("Error deleting room:", err));
    };

    return (
        <div className="py-24 px-3 container mx-auto">
            {myRooms.length === 0 && (
                <h1 className="text-3xl font-bold text-center text-primay">No Rooms Booking</h1>
            )}

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                            <div className="flex items-center gap-x-3">
                                                <span>Rooms Title</span>
                                            </div>
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                            <span>Date</span>
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                            <span>Price</span>
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                            <span>Room Size</span>
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                            Actions
                                        </th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                            Review
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {myRooms.map(room => (
                                        <tr key={room._id}>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                {room.room_Title}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                {new Date(room.bookingDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                $ {room.price}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                {room.room_Size}
                                            </td>
                                            <td className="px-4 py-4 text-3xl whitespace-nowrap flex items-center gap-4">
                                                <FaEdit 
                                                    onClick={() => setSelectedRoomForUpdate(room)} 
                                                    className="cursor-pointer" 
                                                />
                                                <MdDelete 
                                                    onClick={() => handleDelete(room._id)} 
                                                    className="cursor-pointer" 
                                                />
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                                                <button 
                                                    onClick={() => setSelectedRoomForReview(room)}
                                                    className="bg-primay text-white font-semibold px-4 py-3 rounded hover:bg-cyan-600 duration-300"
                                                >
                                                    Add Review
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {selectedRoomForUpdate && (
                <UpdateModal 
                    handleUpdate={() => setSelectedRoomForUpdate(null)} 
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