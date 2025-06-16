import { Link } from "react-router-dom";
import { 
  FaBuilding, 
  FaBed, 
  FaUtensils, 
  FaSwimmingPool, 
  FaWifi, 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from "react-icons/fa";
import { MdDiscount, MdSpa, MdFamilyRestroom } from "react-icons/md";
import { Map, Marker, Overlay } from "pigeon-maps";
import cover from '../assets/contactinfo.jpg';
import family1 from '../assets/family1.jpg';
import family2 from '../assets/family2.jpg';

const AboutUs = () => {
    return (
        <div className="pb-24">
            {/* Hero Banner */}
            <div className="relative h-96 w-full">
                <img 
                    src={cover} 
                    className="w-full h-full object-cover" 
                    alt="Hotel exterior" 
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            About WanderVenture
                        </h1>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                            Discover our story of hospitality excellence
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Welcome Section */}
                <section className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4D869C] mb-6">
                        Experience Unforgettable Stays With Us
                    </h2>
                    <div className="flex justify-center mb-12">
                        <span className="block w-20 h-1 bg-[#4D869C] rounded-full"></span>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-8 text-center rounded-xl shadow-md hover:bg-[#4D869C] hover:text-white transition-colors duration-300 h-full flex flex-col items-center justify-center">
                                <FaBuilding className="text-5xl mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Luxury Rooms</h3>
                                <p>Experience comfort in our meticulously designed accommodations</p>
                            </div>
                            
                            <div className="overflow-hidden rounded-xl shadow-md">
                                <img 
                                    src={family1} 
                                    alt="Happy family at hotel" 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="overflow-hidden rounded-xl shadow-md">
                                <img 
                                    src={family2} 
                                    alt="Family enjoying hotel amenities" 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            
                            <div className="bg-white p-8 text-center rounded-xl shadow-md hover:bg-[#4D869C] hover:text-white transition-colors duration-300 h-full flex flex-col items-center justify-center">
                                <MdDiscount className="text-5xl mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Exclusive Offers</h3>
                                <p>Special packages for families and extended stays</p>
                            </div>
                        </div>
                        
                        {/* About Text */}
                        <div className="space-y-6">
                            <h3 className="text-4xl font-bold text-gray-800">
                                Your Perfect Getaway Awaits
                            </h3>
                            <p className="text-lg text-gray-600">
                                Founded in 2010, WanderVenture has been providing exceptional hospitality services to travelers from around the world. Our mission is to create memorable experiences through personalized service and attention to detail.
                            </p>
                            <p className="text-lg text-gray-600">
                                Nestled in the heart of the city, our hotel combines modern luxury with traditional warmth. Whether you're here for business or leisure, our dedicated team ensures every moment of your stay is perfect.
                            </p>
                            <div className="pt-4">
                                <Link 
                                    to="/rooms" 
                                    className="inline-block border-2 border-[#4D869C] text-[#4D869C] hover:bg-[#4D869C] hover:text-white transition-colors duration-300 font-bold px-8 py-3 rounded-lg text-lg"
                                >
                                    Explore Our Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gray-50 rounded-xl mb-16">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose WanderVenture</h2>
                        <div className="flex justify-center">
                            <span className="block w-20 h-1 bg-[#4D869C] rounded-full"></span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
                        {[
                            { icon: <FaBed size={32} />, title: "Comfortable Rooms", text: "Premium bedding and blackout curtains for perfect sleep" },
                            { icon: <FaUtensils size={32} />, title: "Gourmet Dining", text: "Award-winning restaurants with local and international cuisine" },
                            { icon: <FaSwimmingPool size={32} />, title: "Pool & Wellness", text: "Heated pool and spa services for complete relaxation" },
                            { icon: <FaWifi size={32} />, title: "High-Speed WiFi", text: "Complimentary high-speed internet throughout the hotel" },
                            { icon: <MdSpa size={32} />, title: "Spa Services", text: "Professional treatments to rejuvenate mind and body" },
                            { icon: <MdFamilyRestroom size={32} />, title: "Family Friendly", text: "Special amenities and activities for children" }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className="text-[#4D869C] mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Info */}
                <section className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="text-[#4D869C] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Address</h4>
                                        <p className="text-gray-600">123 Hospitality Avenue, Dhaka 1212, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaPhone className="text-[#4D869C]" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Phone</h4>
                                        <p className="text-gray-600">+880 1234 567890</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaEnvelope className="text-[#4D869C]" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Email</h4>
                                        <p className="text-gray-600">info@hotelfair.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaClock className="text-[#4D869C]" />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Reception Hours</h4>
                                        <p className="text-gray-600">24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full min-h-64">
                            <Map 
                                height="100%"
                                defaultCenter={[23.8103, 90.4125]} 
                                defaultZoom={15}
                            >
                                <Marker 
                                    width={50}
                                    anchor={[23.8103, 90.4125]}
                                    color="#4D869C"
                                />
                                <Overlay anchor={[23.8103, 90.4125]} offset={[0, 0]}>
                                    <div className="p-2 bg-white rounded shadow-md">
                                        <h4 className="font-bold text-[#4D869C]">WanderVenture</h4>
                                        <p className="text-sm">123 Hospitality Avenue</p>
                                    </div>
                                </Overlay>
                            </Map>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;