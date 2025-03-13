import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookingProvider } from './components/BookingContext';
import Header from "./components/Header"
import Homepage from './components/Homepage';
import HotelListingsPage from './components/HotelListingsPage';
import HotelDetailsPage from './components/HotelDetailsPage';
import BookingPage from './components/BookingPage';
import UserDashboard from './components/UserDashboard';
// import AdminPanel from './components/AdminPanel';
import Footer from "./components/Footer"
import ContactUS from "./components/ContactUs"

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Header />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/hotels" element={<HotelListingsPage />} />
              <Route path="/hotels/:id" element={<HotelDetailsPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              {/* <Route path="/admin" element={<AdminPanel />} /> */}
              <Route path='/ContactUs' element={<ContactUS />} />
            </Routes>
          </div>
        </main>
        <Footer />
        {/* <ContactUS /> */}
      </div>
    </Router>
  );
}

export default App;