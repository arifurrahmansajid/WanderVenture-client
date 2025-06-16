
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { Map, Marker, Overlay } from "pigeon-maps";
import cover from '../assets/contactinfo.jpg';

const ContactUs = () => {
    return (
        <div className="pb-24">
            {/* Hero Banner */}
            <div className="relative h-96 w-full">
                <img 
                    src={cover} 
                    className="w-full h-full object-cover" 
                    alt="Hotel contact information" 
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Contact Hotel.Fair
                        </h1>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                            We are here to help with any questions about your stay
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-3xl font-bold text-[#4D869C] mb-6">Get In Touch</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <FaMapMarkerAlt className="text-[#4D869C] mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Address</h3>
                                    <p className="text-gray-600">123 Hospitality Avenue, Dhaka 1212, Bangladesh</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-[#4D869C]" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">+880 1234 567890</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-[#4D869C]" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">info@hotelfair.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <FaClock className="text-[#4D869C]" />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Reception Hours</h3>
                                    <p className="text-gray-600">24/7</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-12">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a 
                                    href="#" 
                                    className="text-gray-500 hover:text-[#4D869C] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-gray-500 hover:text-[#4D869C] transition-colors"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-gray-500 hover:text-[#4D869C] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-gray-500 hover:text-[#4D869C] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-3xl font-bold text-[#4D869C] mb-6">Send Us a Message</h2>
                        
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#4D869C] focus:ring-1 focus:ring-[#4D869C]"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#4D869C] focus:ring-1 focus:ring-[#4D869C]"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#4D869C] focus:ring-1 focus:ring-[#4D869C]"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#4D869C] focus:ring-1 focus:ring-[#4D869C]"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-[#4D869C] hover:bg-[#3a6a7d] text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#4D869C] focus:ring-opacity-50"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16 bg-white p-4 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-[#4D869C] mb-6 text-center">Our Location</h2>
                    <div className="h-96 w-full rounded-lg overflow-hidden">
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
                                    <h4 className="font-bold text-[#4D869C]">Hotel.Fair</h4>
                                    <p className="text-sm">123 Hospitality Avenue</p>
                                </div>
                            </Overlay>
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;