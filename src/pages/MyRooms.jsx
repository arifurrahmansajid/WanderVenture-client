import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import 'react-tooltip/dist/react-tooltip.css'
import Swal from "sweetalert2";
import UpdateModal from "./UpdateModal";
import ReviewModal from "./ReviewModal";

const MyRooms = () => {
    const [myRooms, setMyRooms] = useState([])
    const { user } = useAuth()
    const [update, setUpdate] = useState(false)
    const [review, setReview] = useState(false)

    const getData = () => {
        axios.get(`${import.meta.env.VITE_API_LINK}/myRooms?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyRooms(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const handleUpdate = () =>{
        setUpdate(!update)
    }

    const reviewModal = () =>{
        setReview(!review)
    }


    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_API_LINK}/myRooms/${id}`, { withCredentials: true })
            .then(res => {
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
                                text: "Your order has been deleted.",
                                icon: "success"
                            });
                            getData()
                        }
                    }
                });
            })
    }
    return (
        <div className="py-24 px-3 container mx-auto">
            {
                myRooms.length === 0 && <>
                    <h1 className="text-3xl font-bold text-center text-primay">No Rooms Booking</h1>
                </>
            }
            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Rooms Title</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Date</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Price</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Room Size</span>
                                            </button>
                                        </th>


                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        myRooms.map(room => <tr key={room._id}>
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {room.room_Title}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {new Date(room.bookingDate).toLocaleDateString()}
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                $ {room.price}
                                            </td>
                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                {room.room_Size}
                                            </td>



                                            <td className='px-4 py-4 text-3xl whitespace-nowrap flex items-center gap-4 '>
                                                {
                                                    update && <UpdateModal handleUpdate={handleUpdate} room={room}></UpdateModal>
                                                }

                                                <FaEdit onClick={handleUpdate} className="cursor-pointer"></FaEdit>
                                                <MdDelete onClick={() => handleDelete(room._id)} className="cursor-pointer"></MdDelete>
                                            </td>

                                            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                <button onClick={reviewModal} className="bg-primay text-white font-semibold px-4 py-3 rounded hover:bg-cyan-600 duration-300">Add Review</button>
                                            </td>
                                            {
                                                review && <ReviewModal room={room} reviewModal={reviewModal}></ReviewModal>
                                            }
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRooms;