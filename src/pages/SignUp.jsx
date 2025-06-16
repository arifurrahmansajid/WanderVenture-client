import { Link, Navigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import useAuth from "../AuthProvider/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import Swal from "sweetalert2";
import offerImg from '../assets/sliders/slider1.jpg'

const SignUp = () => {
    const { createUser, user,  loading } = useAuth()
    const [error, setError] = useState(null)
    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        if (password.length < 6) {
            return setError('Password must be 6 character')
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            setError('your password should be one uppercase and one lowercase and at least one numer')
            return
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                Swal.fire({
                    title: "Offers!",
                    text: "We have many offers if you book a room you will get this offer. Like 50%, free dinner etc",
                    imageUrl: offerImg,
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: "Custom image"
                  });
                toast('sign up successfully')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    if(user || loading) return <Navigate to={'/'}></Navigate>
    return (
        <div className="py-24 px-3">
            <form onSubmit={handleCreateUser} className=" container mx-auto px-6 py-8 md:px-8 max-w-lg border shadow-xl">
                <h1 className='text-2xl font-black text-primay text-center'>Hotel.Fair</h1>
                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back! Please Sign Up Hurry Up
                </p>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Your Full Name</label>
                    <input id="LoggingName" required name='name' placeholder='enter your name' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Email Address</label>
                    <input id="LoggingEmailAddress" required name='email' placeholder='enter email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Photo Url</label>
                    <input id="LoggingPhoto" required name='photoUrl' placeholder='enter your photo url' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" >Password</label>

                    <input id="loggingPassword" required name='password' placeholder='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                </div>
                {
                    error && <p className='text-red-600 font-semibold pt-3'>{error}</p>
                }
                <div className="mt-6">
                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primay rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign Up
                    </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to={'/login'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign in</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </form>
        </div>
    );
};

export default SignUp;