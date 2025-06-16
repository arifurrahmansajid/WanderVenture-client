import axios from "axios";
import { useEffect, useState } from "react";
import RoomCom from "../components/RoomCom";

const AllRooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_LINK}/rooms`)
            .then(res => {
                setRooms(res.data);
            })
    }, [])

    return (
        <div className="py-24 px-3 container mx-auto">
            <div className="py-10">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
                    Our Rooms
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-primay rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-primay rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-primay rounded-full"></span>
                </div>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map(room => <RoomCom key={room._id} room={room}></RoomCom>)
                }
            </div>
        </div>
    );
};

export default AllRooms;