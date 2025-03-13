import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Hoobook</h3>
            <p className="text-sm">
              Discover the best hotels with Hoobook. We provide seamless booking experiences and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/hotels" className="hover:text-white transition-colors duration-200">Hotels</a>
              </li>
              <li>
                <a href="/booking" className="hover:text-white transition-colors duration-200">Booking</a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-white transition-colors duration-200">Dashboard</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-500" />
                <a href="mailto:info@hoobook.com" className="hover:text-white transition-colors duration-200">info@hoobook.com</a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-gray-500" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">+1-555-123-4567</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-gray-500" />
                <span>123 Main Street, Anytown, CA 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="flex items-center justify-center">
            <FaCopyright className="mr-1 text-gray-500" /> 2024 Hoobook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;