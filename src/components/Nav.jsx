import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()


    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const logOutHandle = () => {
        localStorage.clear()
        return navigate("/login")
    }

    return(
        <nav className="component-nav bg-red-200 border-gray-200 dark:bg-gray-900">
            <div className="component-nav-mobile-header max-w-screen-xl lg:max-w-fit flex flex-wrap items-center justify-between lg:mx-0 mx-auto p-4 object-left">
                <a href="/" className="component-nav-mobile-logo-home flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="component-nav-mobile-logo h-8" alt="Flowbite Logo"/>
                    <span
                        className="component-nav-mobile-name self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Estrella</span>
                </a>
                <button onClick={handleClick} data-collapse-toggle="navbar-default" type="button"
                        className="component-nav-mobile-button inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Abrir menú</span>
                    <svg className="component-nav-mobile-button-image w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className={`component-nav-section ${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto p-2`}
                 id="navbar-default">
                <ul className="component-nav-section-list font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="component-nav-section-list-option block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Inicio</li>
                    <li onClick={logOutHandle} className="component-nav-section-list-option block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Salir</li>
                </ul>

            </div>

        </nav>

    )
};