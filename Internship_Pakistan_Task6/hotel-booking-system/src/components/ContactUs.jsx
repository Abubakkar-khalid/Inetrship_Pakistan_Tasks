import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.message) errors.message = 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate sending the message (replace with actual API call)
      console.log('Form data:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
      setFormErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-gray-600" />
                <p className="text-gray-700">123 Main Street, City, Country</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 text-gray-600" />
                <p className="text-gray-700">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-600" />
                <p className="text-gray-700">info@example.com</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-800">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.name ? 'border-red-500' : ''}`} />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : ''}`} />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.message ? 'border-red-500' : ''}`}></textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>
              <div>
                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
              </div>
            </form>
            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                Message has been sent!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;