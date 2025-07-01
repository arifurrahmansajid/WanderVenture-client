import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our hotel services and bookings
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="flex justify-center mt-6">
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full"></div>
                        <div className="w-3 h-1.5 mx-2 bg-blue-400 rounded-full"></div>
                        <div className="w-1 h-1.5 bg-blue-300 rounded-full"></div>
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                        <details className="group">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    How can I find the best hotel deals on your website?
                                </h3>
                                <span className="text-blue-600 group-open:hidden">
                                    <FaChevronDown />
                                </span>
                                <span className="text-blue-600 hidden group-open:inline">
                                    <FaChevronUp />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 -mt-2 text-gray-600">
                                To find the best hotel deals, use our search function to enter your destination, travel dates, and the number of guests. Our system will compare prices from various sources and display the best available deals. You can also filter results by price, rating, amenities, and more to find the perfect accommodation at the best price. (Search functionality is not enabled)
                            </div>
                        </details>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                        <details className="group">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Can I cancel or modify my booking?
                                </h3>
                                <span className="text-blue-600 group-open:hidden">
                                    <FaChevronDown />
                                </span>
                                <span className="text-blue-600 hidden group-open:inline">
                                    <FaChevronUp />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 -mt-2 text-gray-600">
                                Yes, you can cancel or modify your booking. The cancellation and modification policies vary depending on the hotel and the rate you booked. Please refer to your booking confirmation email for specific details, or log into your account to manage your booking. If you need further assistance, our customer support team is available 24/7.
                            </div>
                        </details>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                        <details className="group">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    What payment methods do you accept?
                                </h3>
                                <span className="text-blue-600 group-open:hidden">
                                    <FaChevronDown />
                                </span>
                                <span className="text-blue-600 hidden group-open:inline">
                                    <FaChevronUp />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 -mt-2 text-gray-600">
                                We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other local payment options depending on your region. You can select your preferred payment method during the checkout process (Payment functionality is not enabled).
                            </div>
                        </details>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                        <details className="group">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    Are there any additional fees or hidden charges?
                                </h3>
                                <span className="text-blue-600 group-open:hidden">
                                    <FaChevronDown />
                                </span>
                                <span className="text-blue-600 hidden group-open:inline">
                                    <FaChevronUp />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 -mt-2 text-gray-600">
                                The prices displayed on our website include all mandatory taxes and fees. However, some hotels may charge additional fees for services such as parking, resort fees, or extra amenities. These fees, if applicable, will be detailed in the booking terms and conditions, and on your booking confirmation.
                            </div>
                        </details>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                        <details className="group">
                            <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                                <h3 className="text-lg font-semibold text-gray-800 md:text-xl">
                                    How can I contact customer support?
                                </h3>
                                <span className="text-blue-600 group-open:hidden">
                                    <FaChevronDown />
                                </span>
                                <span className="text-blue-600 hidden group-open:inline">
                                    <FaChevronUp />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 pt-0 -mt-2 text-gray-600">
                                You can contact our customer support team through various channels. We offer 24/7 support via phone, email, and live chat. For immediate assistance, use the live chat feature on our website, or call our toll-free number. Our support team is here to help with any questions or issues you may have regarding your booking.
                            </div>
                        </details>
                    </div>
                </div>

                {/* Additional Help Section */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        Still have questions? We're here to help!
                    </p>
                    <button 
                        className="px-6 py-3 bg-[#4D869C] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        onClick={() => window.location.href = '/errorPage'}
                    >
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;