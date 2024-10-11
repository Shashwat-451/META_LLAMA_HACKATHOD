import React from 'react';
import image from "../assets/images/login2.jpg"
function Signup(props) {
    return (
        <>
          <div className="bg-white">
      <div className="flex justify-center h-screen">
       
        <div
          className="hidden bg-cover lg:block lg:w-3/5"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
        </div>

        
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-black">Biosimilar</h2>
              <p className="mt-3 text-gray-500 dark:text-gray-700"> Create your account</p>
            </div>

            <div className="mt-8">
              <form>
              <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-600 "
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-100 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white  dark:border-gray-200 shadow-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-600 "
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-100 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white  dark:border-gray-200 shadow-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4">
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

                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-600"
                    >
                      Password
                    </label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-black placeholder-gray-100 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white shadow-md  dark:border-gray-200 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                  />
                </div>

                <div className="mt-4">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-700">
                Don&#x27;t have an account yet?{' '}
                <a
                  href="#"
                  className="text-blue-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
        </>
    );
}

export default Signup;