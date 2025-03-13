import React, { useState } from "react";
import { Link } from "react-router-dom";
import Discover from "../assets/Discover.jpg";
import Islamabad from "../assets/islamabad.webp";
import Lahore from "../assets/lahore.jpeg";
import Karachi from "../assets/karachi.jpg";
import Nathiagali from "../assets/qubed_nathiagali.jpeg";
import Peshawar from "../assets/peshawar.webp";
import Gawadar from "../assets/Zaver_Pearl_Continental_gawadar.avif";
import Islamabad_dest from "../assets/islamabad_dest.jpeg";
import Lahore_dest from "../assets/lahore_dest.webp";
import Karachi_dest from "../assets/karachi_dest.jpeg";
import Nathiagali_dest from "../assets/nathigali_dest.jpeg";
import MalamJabba_dest from "../assets/malamjaba_dest.jpg";
import Swat_dest from "../assets/swat_dest.jpeg";

function Homepage() {
  const [searchCity, setSearchCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [filteredHotels, setFilteredHotels] = useState([]);

  // Sample hotel data (replace with your actual data)
  const hotels = [
    {
      id: 1,
      name: "Islamabad Serena Hotel",
      city: "Islamabad",
      price: 150,
      image: Islamabad,
    },
    {
      id: 2,
      name: "Royal Swiss",
      city: "Lahore",
      price: 120,
      image: Lahore,
    },
    {
      id: 3,
      name: "Movenpick Hotel",
      city: "Karachi",
      price: 80,
      image: Karachi,
    },
    {
      id: 4,
      name: "Qubed Hotel",
      city: "Nathia Gali",
      price: 200,
      image: Nathiagali,
    },
    {
      id: 5,
      name: "Pearl Continental Hotel",
      city: "Peshawar",
      price: 90,
      image: Peshawar,
    },
    {
      id: 6,
      name: "Continental Gwadar Hotel",
      city: "Gwadar",
      price: 180,
      image: Gawadar,
    },
  ];

  // Sample destination data (replace with your actual data)
  const destinations = [
    { name: "Islamabad", image: Islamabad_dest },
    { name: "Lahore", image: Lahore_dest },
    { name: "Karachi", image: Karachi_dest },
    {
      name: "Nathia Gali",
      image: Nathiagali_dest,
    },
    {
      name: "Malam Jabba",
      image: MalamJabba_dest,
    },
    {
      name: "Swat Valley",
      image: Swat_dest,
    },
  ];

  const handleSearch = () => {
    const results = hotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchCity.toLowerCase())
    );
    setFilteredHotels(results);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
          <img
            src={Discover}
            alt="Hero"
            className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">
              Experience Luxury & Comfort
            </h1>
            <p className="text-lg text-white max-w-2xl drop-shadow-md opacity-90 animate-slide-up">
              Discover handpicked hotels offering world-class amenities,
              breathtaking views, and exceptional hospitality. Whether you're
              seeking a relaxing retreat or an adventurous getaway, find the
              perfect stay that matches your style.
            </p>
            <Link to="/hotels" className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 animate-bounce">
              Explore Now
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Find Your Perfect Hotel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border p-2 rounded"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <input
              type="date"
              className="border p-2 rounded"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <input
              type="date"
              className="border p-2 rounded"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <div className="flex items-center">
              <input
                type="number"
                placeholder="Guests"
                className="border p-2 rounded w-20 mr-2"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
              />
              <button
                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Featured Hotels */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filteredHotels.length > 0 ? filteredHotels : hotels).map(
              (hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                    <p className="text-gray-600 mb-1">City: {hotel.city}</p>
                    <p className="text-gray-600">Price: ${hotel.price}/night</p>
                    <Link
                      to="/booking"
                      className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md w-full block text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Popular Destinations */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
