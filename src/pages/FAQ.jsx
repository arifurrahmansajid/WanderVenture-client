
const FAQ = () => {
    return (
        <div className="pt-20">
            <div className="pb-10">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                    FAQ!
                </h1>

                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-primay rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-primay rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-primay rounded-full"></span>
                </div>
            </div>
            <section className="max-w-3xl mx-auto">
                <div className="flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 "></p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">How can I find the best hotel deals on your website?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">To find the best hotel deals, use our search function to enter your destination, travel dates, and the number of guests. Our system will compare prices from various sources and display the best available deals. You can also filter results by price, rating, amenities, and more to find the perfect accommodation at the best price. (Search functionality is not enabled) </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">Can I cancel or modify my booking?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Yes, you can cancel or modify your booking. The cancellation and modification policies vary depending on the hotel and the rate you booked. Please refer to your booking confirmation email for specific details, or log into your account to manage your booking. If you need further assistance, our customer support team is available 24/7.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">What payment methods do you accept?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other local payment options depending on your region. You can select your preferred payment method during the checkout process (Payment functionality is not enabled).</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">Are there any additional fees or hidden charges?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">The prices displayed on our website include all mandatory taxes and fees. However, some hotels may charge additional fees for services such as parking, resort fees, or extra amenities. These fees, if applicable, will be detailed in the booking terms and conditions, and on your booking confirmation.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">How can I contact customer support?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">You can contact our customer support team through various channels. We offer 24/7 support via phone, email, and live chat. For immediate assistance, use the live chat feature on our website, or call our toll-free number. Our support team is here to help with any questions or issues you may have regarding your booking.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;