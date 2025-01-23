import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-blue-600">
          <Link to="/">Internship Pakistan</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6 ">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition pt-1.5"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 transition pt-1.5"
          >
            About Us
          </Link>
          <Link
            to="/internships"
            className="text-gray-600 hover:text-blue-600 transition pt-1.5"
          >
            Internships
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 transition pt-1.5"
          >
            Contact
          </Link>
          <Link
            to="/apply"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="px-4 py-4 space-y-6">
            <Link
              to="/"
              className="block text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/internships"
              className="block text-gray-600 hover:text-blue-600  transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Internships
            </Link>
            <Link
              to="/contact"
              className="block text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/apply"
              className="block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
