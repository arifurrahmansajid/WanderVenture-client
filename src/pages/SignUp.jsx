import { Link, Navigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import useAuth from "../AuthProvider/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";
import offerImg from '../assets/sliders/slider1.jpg';

const SignUp = () => {
    const { createUser, user, loading } = useAuth();
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        // Password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            setIsSubmitting(false);
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            setError('Password must contain at least one uppercase letter, one lowercase letter, and one number');
            setIsSubmitting(false);
            return;
        }

        try {
            await createUser(email, password);
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                });
            }
            Swal.fire({
                title: "Welcome to WanderVenture!",
                text: "Enjoy exclusive offers when you book a room - up to 50% off, free dinners, and more!",
                imageUrl: offerImg,
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Special offers",
                confirmButtonColor: "#4D869C",
                confirmButtonText: "Explore Offers"
            });
            toast.success('Account created successfully!');
        } catch (err) {
            console.error(err.message);
            setError(err.message.replace('Firebase: ', ''));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (user || loading) return <Navigate to='/' />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#4D869C] to-[#7AB2B2] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="bg-[#4D869C] p-6 text-center">
                    <p className="mt-2 text-white/90">
                        Create your account to unlock exclusive travel experiences
                    </p>
                </div>

                <form onSubmit={handleCreateUser} className="p-6 space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input 
                            name="name" 
                            type="text" 
                            required
                            placeholder="John Doe" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D869C] focus:border-[#4D869C] outline-none transition"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                            name="email" 
                            type="email" 
                            required
                            placeholder="your@email.com" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D869C] focus:border-[#4D869C] outline-none transition"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Profile Photo URL</label>
                        <input 
                            name="photoUrl" 
                            type="text" 
                            required
                            placeholder="https://example.com/photo.jpg" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D869C] focus:border-[#4D869C] outline-none transition"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            required
                            placeholder="••••••••" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4D869C] focus:border-[#4D869C] outline-none transition"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Must be 6+ characters with uppercase, lowercase, and number
                        </p>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 bg-[#4D869C] hover:bg-[#3a6a7d] text-white font-medium rounded-lg transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Creating Account...
                            </span>
                        ) : 'Create Account'}
                    </button>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-sm text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link 
                            to="/login" 
                            className="font-medium text-[#4D869C] hover:text-[#3a6a7d] transition"
                        >
                            Sign in here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;