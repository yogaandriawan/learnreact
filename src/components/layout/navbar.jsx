import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800 top-0 w-full z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-white text-2xl font-bold">
                                    Logo
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ml-4">
                                <Link to="/" className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition-colors duration-200">
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    );
};

export default Navbar;
