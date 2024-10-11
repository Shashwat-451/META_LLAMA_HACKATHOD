import React from 'react';
import { Link } from 'react-router-dom';
function Profile(props) {
    return (
        <>
            <div
                className="z-50 w-[12rem] fixed mt-12 right-5 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
            >
                <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white">
                        Shashwat Mishra
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                        Reviewer
                    </p>
                </div>
                <ul className="py-1">
                    <li>
                    <Link
                           to="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
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