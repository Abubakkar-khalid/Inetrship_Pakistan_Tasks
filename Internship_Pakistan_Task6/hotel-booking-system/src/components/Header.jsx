import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa"; // Import React Icons

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex items-center justify-between">
        {/* Website Name */}
        <Link
          to="/"
          className="text-3xl font-bold text-gray-800 tracking-wide hover:text-indigo-600 transition-colors duration-300"
        >
          Hoobook
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/hotels"
            className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 font-medium"
          >
            Hotels
          </Link>
          <Link
            to="/booking"
            className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 font-medium"
          >
            Booking
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-800 hover:text-indigo-600 transition-colors duration-300 font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/ContactUs"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition-colors duration-300 flex items-center font-medium"
          >
            <FaPhoneAlt className="mr-2" />
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-4 pb-6 space-y-4 sm:px-6">
          <Link
            to="/hotels"
            className="text-gray-800 block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Hotels
          </Link>
          <Link
            to="/booking"
            className="text-gray-800 block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Booking
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-800 block px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/ContactUs"
            className="bg-indigo-600 hover:bg-indigo-700 text-white block px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
