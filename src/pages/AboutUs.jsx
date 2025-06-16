import cover from '../assets/contactinfo.jpg'
import family1 from '../assets/family1.jpg'
import family2 from '../assets/family2.jpg'
import { FaBuilding } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
const AboutUs = () => {
    return (
        <div className="py-24 px-3 container mx-auto">
            <div className='relative'>
                <img src={cover} className='w-full h-72' alt="" />
                <div className='absolute bottom-0 w-full h-full text-center py-10 bg-black bg-opacity-45 '>
                    <h1 className="text-5xl text-center font-bold text-white">About Us</h1>
                </div>
            </div>
            <section>
                <div className='py-16'>
                    <h1 className='text-4xl font-bold text-primay text-center '>Spend Happy Holidays <br />
                        With Us</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className='grid grid-cols-2 transition-all gap-6'>
                        <div className='text-center space-y-3 p-5 hover:bg-primay duration-300 hover:text-white'>
                            <FaBuilding className='mx-auto text-5xl'></FaBuilding>
                            <h1 className='text-2xl font-bold'>Cozy Room</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                        <div>
                            <img src={family1} alt="" />
                        </div>
                        <div>
                            <img src={family2} alt="" />
                        </div>
                        <div className='text-center space-y-3 hover:bg-primay duration-300 hover:text-white p-5'>
                            <MdDiscount className='mx-auto text-5xl'></MdDiscount>
                            <h1 className='text-2xl font-bold '>Special Offers</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='text-6xl font-bold text-primay'>Unwind A Hotel Booking Agency</h1>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <button className='border-2 border-primay text-primay hover:bg-primay duration-300 transition hover:text-white text-xl font-bold px-6 py-3'>View Our Rooms</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;