import axios from "axios";
import { useEffect, useState } from "react";
import RoomCom from "../components/RoomCom";
import { FaSearch } from "react-icons/fa";

const AllRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/rooms`)
            .then(res => {
                setRooms(res.data);
            });
    }, []);

    const filteredRooms = rooms.filter(room => 
        room.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.room_size.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                    Explore Our Rooms
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                    Discover the perfect accommodation for your stay
                </p>
                
                {/* Decorative elements */}
                <div className="flex justify-center mt-8">
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                    <div className="w-2 h-1.5 mx-2 bg-blue-400 rounded-full"></div>
                    <div className="w-1 h-1.5 bg-blue-300 rounded-full"></div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-12 max-w-md mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Search rooms by name or size..."
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Rooms Grid */}
            {filteredRooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRooms.map(room => (
                        <RoomCom key={room._id} room={room} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <FaSearch className="text-gray-400 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-medium text-gray-700 mb-2">No Rooms Found</h2>
                    <p className="text-gray-500 max-w-md mx-auto">
                        We couldn't find any rooms matching your search. Try different keywords.
                    </p>
                </div>
            )}

            {/* Room Count */}
            <div className="mt-12 text-center text-gray-500">
                Showing {filteredRooms.length} of {rooms.length} rooms
            </div>
        </div>
    );
};

export default AllRooms;