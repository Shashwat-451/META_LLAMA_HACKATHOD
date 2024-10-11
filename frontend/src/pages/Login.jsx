import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import image from "../assets/images/login2.jpg"

export default function Login() {
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData;
    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    const handleClick = () => {
        navigate("/");
    }
    return (
        <>
            <div className="bg-white">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-black">Biosimilar</h2>
                                <p className="mt-3 text-gray-500 dark:text-gray-700">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm text-gray-600 dark:text-gray-600 "
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-100 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white  dark:border-gray-200 shadow-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label
                                                htmlFor="password"
                                                className="text-sm text-gray-600 dark:text-gray-600"
                                            >
                                                Password
                                            </label>
                                            <Link
                                                to="/"
                                                className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                            >
                                                Forgot password?
                                            </Link>
                                        </div>

                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Your Password"
                                            className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-100 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white shadow-md  dark:border-gray-200 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            onClick={handleClick}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-6 text-sm text-center text-gray-700">
                                    Don&#x27;t have an account yet?{' '}
                                    <Link to="/signup"
                                        href="#"
                                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                    >
                                        Sign up
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}