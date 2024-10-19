import React from 'react';
import { Link } from 'react-router-dom';
function Profile(props) {
    return (
        <>
            <div
                className="z-50 w-[9rem] fixed top-16 right-5 text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dar:bg-gray-700 dar:divide-gray-600"
                id="dropdown-user"
            >
                <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dar:text-white">
                        Shashwat Mishra
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dar:text-gray-300">
                        Reviewer
                    </p>
                </div>
                <ul className="py-1">
                    {/* <li>
                    <Link
                           to="/dashboard"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dar:text-gray-300 dar:hover:bg-gray-600 dar:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    </li> */}


                    <li>
                        <Link
                            to="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dar:text-gray-300 dar:hover:bg-gray-600 dar:hover:text-white"
                        >
                            Sign out
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    );
}

export default Profile;