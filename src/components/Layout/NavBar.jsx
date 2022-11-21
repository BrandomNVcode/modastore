import React, { useState } from 'react';


export const NavBar = () => {


    const [collapse, setCollapse] = useState(true);


    const handleCollapse = () => {
        setCollapse(!collapse);
    }


    return (
        <header className='navbar w-full px-8 sm:px-20 sm:py-1 bg-white border-b-2 border-yellow-100 fixed top-0 z-20'>
            <nav className="px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <a href="#" className="font-bold text-xl sm:text-3xl text-sky-900">ModaStore</a>

                    <button 
                        onClick={handleCollapse}
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-6 h-6" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                    <div className={`${collapse? 'hidden': ''} w-full md:block md:w-auto`}>
                        <div className='flex flex-col sm:flex-row-reverse sm:justify-between'>
                            <ul className="md:hidden flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 text-end font-semibold">Login</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 text-end font-semibold">Register</a>
                                </li>
                            </ul>
                            <div className='w-full border-b border-gray-400 sm:hidden'></div>
                            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 text-end">Productos</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 text-end">Sobre Nosotros</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <ul className="hidden md:flex md:flex-row sm:p-4">
                        <li>
                            <a href="#" className="block py-2 pr-4 text-end font-semibold">Login</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-end font-semibold">Register</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}
