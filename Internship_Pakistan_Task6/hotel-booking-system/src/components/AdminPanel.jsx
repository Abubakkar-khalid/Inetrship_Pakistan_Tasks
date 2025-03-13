import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHotel, FaCalendarCheck, FaPlus, FaEdit, FaTrashAlt, FaEye, FaDoorOpen } from 'react-icons/fa';

function AdminPanel() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  // Sample data (replace with API calls)
  useEffect(() => {
    // Fetch hotels, rooms, and bookings from API or local storage
    setHotels([
      { id: 1, name: 'Grand Hotel', location: 'City A' },
      { id: 2, name: 'Beach Resort', location: 'Beach B' },
    ]);
    setRooms([
      { id: 101, hotelId: 1, roomNumber: '101A', type: 'Suite' },
      { id: 102, hotelId: 2, roomNumber: '201B', type: 'Deluxe' },
    ]);
    setBookings([
      { id: 1001, hotelId: 1, userId: 1, checkIn: '2024-03-10', checkOut: '2024-03-15' },
      { id: 1002, hotelId: 2, userId: 2, checkIn: '2024-04-01', checkOut: '2024-04-07' },
    ]);
  }, []);

  const handleDeleteHotel = (hotelId) => {
    // Implement API call to delete hotel
    setHotels(hotels.filter((hotel) => hotel.id !== hotelId));
    setRooms(rooms.filter((room) => room.hotelId !== hotelId)); // Delete associated rooms
  };

  const handleDeleteRoom = (roomId) => {
    // Implement API call to delete room
    setRooms(rooms.filter((room) => room.id !== roomId));
  };

  const handleCancelBooking = (bookingId) => {
    // Implement API call to cancel booking
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Admin Panel</h2>

        {/* Manage Hotels */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaHotel className="mr-2 text-gray-600" /> Manage Hotels
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/admin/hotels" className="flex items-center text-blue-500 hover:underline">
                <FaEye className="mr-2" /> View All Hotels
              </Link>
            </li>
            <li>
              <Link to="/admin/hotels/add" className="flex items-center text-green-600 hover:underline">
                <FaPlus className="mr-2" /> Add New Hotel
              </Link>
            </li>
            {hotels.map((hotel) => (
              <li key={hotel.id}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{hotel.name}</span>
                  <div className="flex space-x-2">
                    <Link to={`/admin/hotels/edit/${hotel.id}`} className="text-yellow-600 hover:underline">
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDeleteHotel(hotel.id)} className="text-red-600 hover:underline">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Manage Rooms */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaDoorOpen className="mr-2 text-gray-600" /> Manage Rooms
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/admin/rooms" className="flex items-center text-blue-500 hover:underline">
                <FaEye className="mr-2" /> View All Rooms
              </Link>
            </li>
            <li>
              <Link to="/admin/rooms/add" className="flex items-center text-green-600 hover:underline">
                <FaPlus className="mr-2" /> Add New Room
              </Link>
            </li>
            {rooms.map((room) => (
              <li key={room.id}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{`Room ${room.roomNumber} (${room.type})`}</span>
                  <div className="flex space-x-2">
                    <Link to={`/admin/rooms/edit/${room.id}`} className="text-yellow-600 hover:underline">
                      <FaEdit />
                    </Link>
                    <button onClick={() => handleDeleteRoom(room.id)} className="text-red-600 hover:underline">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* View All Bookings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaCalendarCheck className="mr-2 text-gray-600" /> View All Bookings
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/admin/bookings" className="flex items-center text-blue-500 hover:underline">
                <FaEye className="mr-2" /> View All Bookings
              </Link>
            </li>
            {bookings.map((booking) => (
              <li key={booking.id}>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{`Booking #${booking.id} - Check-in: ${booking.checkIn} - Check-out: ${booking.checkOut}`}</span>
                  <button onClick={() => handleCancelBooking(booking.id)} className="text-red-600 hover:underline">
                    <FaTrashAlt /> Cancel
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;