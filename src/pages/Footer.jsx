import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Newsletter Subscription */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-semibold text-gray-800">Stay Updated with WanderVenture</h2>
                        <p className="mt-2 text-gray-600">
                            Subscribe to our newsletter for exclusive offers and updates.
                        </p>

                        <div className="flex flex-col mt-6 space-y-3 md:flex-row md:space-y-0 md:space-x-3">
                            <input 
                                id="email" 
                                type="email" 
                                className="px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-[#4D869C] focus:outline-none focus:ring-1 focus:ring-[#4D869C]" 
                                placeholder="Your email address" 
                                required
                            />
                            <button className="px-6 py-3 text-sm font-medium text-white bg-[#4D869C] rounded-lg hover:bg-[#3a6a7d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4D869C] focus:ring-opacity-50">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                        <div className="flex flex-col mt-4 space-y-2">
                            <Link to="/" className="text-gray-600 hover:text-[#4D869C] transition-colors">
                                Home
                            </Link>
                            <Link to="/allRooms" className="text-gray-600 hover:text-[#4D869C] transition-colors">
                                Room
                            </Link>
                            <Link to="/about" className="text-gray-600 hover:text-[#4D869C] transition-colors">
                                About Us
                            </Link>
                            <Link to="/contact" className="text-gray-600 hover:text-[#4D869C] transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-[#4D869C] mt-1 flex-shrink-0" />
                                <span className="text-gray-600">123 Hospitality Avenue, Dhaka 1212, Bangladesh</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-[#4D869C]" />
                                <span className="text-gray-600">+880 1234 567890</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-[#4D869C]" />
                                <span className="text-gray-600">info@hotelfair.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaClock className="text-[#4D869C]" />
                                <span className="text-gray-600">24/7 Reception</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-200" />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <Link to="/" className="text-2xl font-bold text-[#4D869C] hover:text-[#3a6a7d] transition-colors">
                        WanderVenture
                    </Link>

                    <p className="mt-4 text-sm text-gray-500 md:mt-0">
                        © {new Date().getFullYear()} WanderVenture. All rights reserved.
                    </p>

                    <div className="flex mt-4 space-x-6 md:mt-0">
                        <a 
                            href="#" 
                            className="text-gray-500 hover:text-[#4D869C] transition-colors"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-500 hover:text-[#4D869C] transition-colors"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-500 hover:text-[#4D869C] transition-colors"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;