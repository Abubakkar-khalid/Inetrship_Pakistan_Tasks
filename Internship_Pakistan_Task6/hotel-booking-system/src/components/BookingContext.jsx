// BookingContext.js
import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

const useBooking = () => {
  return useContext(BookingContext);
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings((prevBookings) => [...prevBookings, booking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
