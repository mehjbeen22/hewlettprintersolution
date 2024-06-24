import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-xl italic font-bold text-[#1e3a8a]">
              hewlettprintersolution
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-800 font-bold hover:text-[#1e3a8a] "
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 font-bold hover:text-[#1e3a8a] "
            >
              About
            </Link>
            <Link
              to="/service"
              className="text-gray-800 font-bold hover:text-[#1e3a8a] "
            >
              Service
            </Link>
            <Link
              to="products"
              className="text-gray-800 font-bold hover:text-[#1e3a8a] "
            >
              Product
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 font-bold hover:text-[#1e3a8a] "
            >
              Contact
            </Link>
            <Link
              to="/membership"
              className="text-gray-800 font-bold hover:text-[#1e3a8a] "
            >
              Membership
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="mobile-menu-button focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#9d174d] hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
            >
              Service
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
            >
              Product
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
            >
              Contact
            </a>
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
            >
              Membership
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
