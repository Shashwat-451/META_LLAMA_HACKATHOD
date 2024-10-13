import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-900 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-4 pb-6 overflow-y-auto bg-white dark:bg-gray-900">
                <ul className="space-y-4">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center p-3 text-lg font-semibold text-gray-800 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600 transition duration-200 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 21"
                            >
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                            </svg>
                            <span className="ml-4 font-sans">Knowledge Base</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/myFiles"
                            className="flex items-center p-3 text-lg font-semibold text-gray-800 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                        >
                            <svg
                                className="w-6 h-6 text-gray-600 transition duration-200 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 18"
                            >
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            <span className="ml-4">My Files</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
