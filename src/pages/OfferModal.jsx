import { RxCross2 } from "react-icons/rx";
import swimming from '../assets/sliders/slider4.jpg'
import { Link } from "react-router-dom";
const OfferModal = ({handleModal}) => {
    return (
        <div className="fixed inset-0 pt-10  md:pt-20 px-3 z-10 w-full bg-gray-500 bg-opacity-45">
            <div className="max-w-3xl mx-auto p-5 md:p-10 shadow-xl border relative bg-white space-y-2">
                <h1 className=" text-lg md:text-3xl text-center font-bold">Special Offers</h1>
                <img src={swimming} className="h-60 w-full" alt="" />
                <h1 className=" text-lg md:text-2xl font-bold border p-2">Free Dinner</h1>
                <h1 className=" text-lg md:text-2xl font-bold text-primay border p-2">If you book a room this month, you will get 50% discount</h1>
                <h1 className="text-lg md:text-2xl font-bold border p-2">Free Swimming In your holidays</h1>
                <div>
                    <Link  to={'/allRooms'}><button className='px-6 py-2 bg-primay hover:bg-cyan-600 textarea-sm text-white rounded'>Book Now</button></Link>
                </div>
                <div className="absolute top-0 right-0 p-5">
                    <h1 className="text-3xl cursor-pointer" onClick={handleModal}><RxCross2></RxCross2></h1>
                </div>
            </div>
        </div>
    );
};

export default OfferModal;