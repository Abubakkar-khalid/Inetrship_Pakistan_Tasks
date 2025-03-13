import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaHotel, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    hotel: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
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
    if (!formData.phone) errors.phone = 'Phone is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.hotel) errors.hotel = 'Hotel is required';
    if (!formData.checkIn) errors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) errors.checkOut = 'Check-out date is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to server)
      console.log(formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-600">Booking Successful!</h2>
        <p className="text-lg">Thank you for your booking. We have sent a confirmation email to {formData.email}.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Book Your Stay</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  <FaUser className="inline-block mr-2 text-gray-500" /> Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.name ? 'border-red-500' : ''}`} required />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  <FaEnvelope className="inline-block mr-2 text-gray-500" /> Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : ''}`} required />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  <FaPhoneAlt className="inline-block mr-2 text-gray-500" /> Phone
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.phone ? 'border-red-500' : ''}`} required />
                {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  <FaMapMarkerAlt className="inline-block mr-2 text-gray-500" /> Address
                </label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.address ? 'border-red-500' : ''}`} required />
                {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.city ? 'border-red-500' : ''}`} required />
                  {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.country ? 'border-red-500' : ''}`} required />
                  {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
                </div>
              </div>
            </div>
          </div>

           {/* Booking Details */}
           <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Booking Details</h3>
            <div className="grid grid-cols-1 gap-y-4">
              <div>
                <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
                  <FaHotel className="inline-block mr-2 text-gray-500" /> Hotel
                </label>
                <select id="hotel" name="hotel" value={formData.hotel} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.hotel ? 'border-red-500' : ''}`} required>
                  <option value="">Select Hotel</option>
                  <option value="Luxury Hotel A">Luxury Hotel A</option>
                  <option value="Boutique Hotel B">Boutique Hotel B</option>
                  <option value="Budget Hotel C">Budget Hotel C</option>
                  <option value="Resort Hotel D">Resort Hotel D</option>
                  <option value="City Hotel E">City Hotel E</option>
                  <option value="Beach Hotel F">Beach Hotel F</option>
                </select>
                {formErrors.hotel && <p className="text-red-500 text-sm mt-1">{formErrors.hotel}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
                    <FaCalendarAlt className="inline-block mr-2 text-gray-500" /> Check-in Date
                  </label>
                  <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.checkIn ? 'border-red-500' : ''}`} required />
                  {formErrors.checkIn && <p className="text-red-500 text-sm mt-1">{formErrors.checkIn}</p>}
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">
                    <FaCalendarAlt className="inline-block mr-2 text-gray-500" /> Check-out Date
                  </label>
                  <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${formErrors.checkOut ? 'border-red-500' : ''}`} required />
                  {formErrors.checkOut && <p className="text-red-500 text-sm mt-1">{formErrors.checkOut}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                    <FaUser className="inline-block mr-2 text-gray-500" /> Guests
                  </label>
                  <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" min="1" required />
                </div>
                <div>
                  <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
                    <FaHotel className="inline-block mr-2 text-gray-500" /> Rooms
                  </label>
                  <input type="number" id="rooms" name="rooms" value={formData.rooms} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" min="1" required />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full py-3 px-4 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;