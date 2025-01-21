import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-blue-600">
            <Link to="/">    
                Internship Pakistan
            </Link>
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">About Us</Link>
          <Link to="/internships" className="text-gray-600 hover:text-blue-600 transition">Internships</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition">Contact</Link>
          <Link to="/apply" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Apply Now</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
