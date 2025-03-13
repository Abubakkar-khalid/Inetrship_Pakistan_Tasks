import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaCog, FaUserEdit, FaTrashAlt, FaEdit } from 'react-icons/fa';

function UserDashboard() {
  // Sample booking data (replace with actual data fetching)
  const bookings = [
    {
      id: 123,
      hotelName: 'Grand Imperial Hotel',
      checkIn: '2024-03-15',
      checkOut: '2024-03-20',
      status: 'Confirmed',
    },
    {
      id: 456,
      hotelName: 'Lahore Heritage Inn',
      checkIn: '2024-04-01',
      checkOut: '2024-04-05',
      status: 'Pending',
    },
    {
      id: 789,
      hotelName: 'Karachi Beach Resort',
      checkIn: '2024-05-10',
      checkOut: '2024-05-15',
      status: 'Cancelled',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">User Dashboard</h2>

        {/* My Bookings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaCalendarAlt className="mr-2 text-gray-600" /> My Bookings
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Booking #
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Hotel Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Check-in
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Check-out
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {booking.id}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {booking.hotelName}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {booking.checkIn}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {booking.checkOut}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'Confirmed'
                          ? 'bg-green-200 text-green-800'
                          : booking.status === 'Pending'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex space-x-2">
                        {booking.status === 'Confirmed' && (
                          <>
                            <Link to={`/bookings/${booking.id}/edit`} className="text-blue-500 hover:text-blue-700">
                              <FaEdit />
                            </Link>
                            <button className="text-red-500 hover:text-red-700">
                              <FaTrashAlt />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Profile Settings */}
        {/* <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaCog className="mr-2 text-gray-600" /> Profile Settings
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <Link to="/profile/edit" className="text-blue-500 hover:underline flex items-center">
                <FaUserEdit className="mr-2" /> Update Name, Email, Password, Avatar
              </Link>
            </li>
          </ul>
        </div> */}


        
      </div>
    </div>
  );
}

export default UserDashboard;