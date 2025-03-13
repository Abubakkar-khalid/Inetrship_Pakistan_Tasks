import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaDumbbell, FaSpa, FaUtensils, FaCocktail, FaParking, FaCoffee } from 'react-icons/fa';
import Islamabad from "../assets/islamabad.webp";
import Lahore from "../assets/lahore.jpeg";
import Karachi from "../assets/karachi.jpg";
import Nathiagali from "../assets/qubed_nathiagali.jpeg";
import Peshawar from "../assets/peshawar.webp";
import Gawadar from "../assets/Zaver_Pearl_Continental_gawadar.avif";
import Multan from "../assets/Royal_Mansion_Multan.jpg";
import Faislabad from "../assets/Faisalabad_Serena_Hotel.jpg";


function HotelListingsPage() {
  const hotels = [
    {
      id: 1,
      name: 'Islamabad Serena Hotel',
      city: 'Islamabad',
      price: 180,
      rating: 4.8,
      amenities: ['WiFi', 'Pool', 'Gym', 'Spa', 'Restaurant', 'Parking'],
      location: 'F-7 Markaz, Islamabad',
      image: Islamabad,
      description: 'Experience luxury at its finest with our world-class amenities and exceptional service.',
    },
    {
      id: 2,
      name: 'Royal Swiss',
      city: 'Lahore',
      price: 120,
      rating: 4.3,
      amenities: ['WiFi', 'Restaurant', 'Bar', 'Breakfast'],
      location: 'Mall Road, Lahore',
      image: Lahore,
      description: 'A blend of modern comfort and historical charm, located in the heart of Lahore.',
    },
    {
      id: 3,
      name: 'Movenpick Hotel',
      city: 'Karachi',
      price: 150,
      rating: 4.5,
      amenities: ['WiFi', 'Pool', 'Beach Access', 'Restaurant'],
      location: 'Clifton Beach, Karachi',
      image: Karachi,
      description: 'Enjoy the serene beauty of the Arabian Sea with our beachfront accommodations.',
    },
    {
      id: 4,
      name: 'Qubed Hotel',
      city: 'Nathiagali',
      price: 200,
      rating: 4.9,
      amenities: ['WiFi', 'Spa', 'Restaurant', 'Parking', 'Breakfast'],
      location: 'Ayubia National Park, Nathiagali',
      image: Nathiagali,
      description: 'Escape to the mountains and rejuvenate with our luxurious retreat amidst nature.',
    },
    {
      id: 5,
      name: 'Pearl Continental Hotel',
      city: 'Peshawar',
      price: 90,
      rating: 4.0,
      amenities: ['WiFi', 'Restaurant', 'Parking'],
      location: 'City Center, Peshawar',
      image: Peshawar,
      description: 'Convenient and comfortable suites located in the bustling city center of Peshawar.',
    },
    {
      id: 6,
      name: 'Continental Gwadar Hotel',
      city: 'Gwadar',
      price: 170,
      rating: 4.6,
      amenities: ['WiFi', 'Pool', 'Beach Access', 'Restaurant', 'Bar'],
      location: 'Gwadar Beach, Gwadar',
      image: Gawadar,
      description: 'Experience breathtaking ocean views and enjoy a relaxing stay at our premium hotel.',
    },
    {
      id: 7,
      name: 'Faisalabad Serena Hotel',
      city: 'Faisalabad',
      price: 110,
      rating: 4.2,
      amenities: ['WiFi', 'Restaurant', 'Gym', 'Parking'],
      location: 'Clock Tower, Faisalabad',
      image: Faislabad,
      description: 'Modern accommodations with excellent amenities, perfect for business and leisure travelers.',
    },
    {
      id: 8,
      name: 'Royal Mansion Multan',
      city: 'Multan',
      price: 130,
      rating: 4.4,
      amenities: ['WiFi', 'Pool', 'Restaurant', 'Breakfast'],
      location: 'Hussain Agahi, Multan',
      image: Multan,
      description: 'Enjoy a royal experience with our spacious suites and top-notch services.',
    },
  ];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [amenitiesFilter, setAmenitiesFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');

  const filteredHotels = hotels.filter((hotel) => {
    return (
      hotel.price >= minPrice &&
      hotel.price <= maxPrice &&
      hotel.rating >= ratingFilter &&
      (amenitiesFilter.length === 0 || amenitiesFilter.every((amenity) => hotel.amenities.includes(amenity))) &&
      hotel.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating-asc') return a.rating - b.rating;
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    return 0;
  });

  const amenityIcons = {
    WiFi: <FaWifi />,
    Pool: <FaSwimmingPool />,
    Gym: <FaDumbbell />,
    Spa: <FaSpa />,
    Restaurant: <FaUtensils />,
    Bar: <FaCocktail />,
    Parking: <FaParking />,
    Breakfast: <FaCoffee />,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Hotel Listings</h2>

        <div className="flex flex-col md:flex-row">
          {/* Filter Options */}
          <div className="md:w-1/4 p-4 bg-white rounded-lg shadow-md mb-4 md:mb-0 md:mr-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Filter Options</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Price Range: ${minPrice} - ${maxPrice}</label>
              <input type="range" min="0" max="200" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} className="w-full" />
              <input type="range" min="0" max="200" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} className="w-full mt-2" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Rating: {ratingFilter} stars and above</label>
              <input type="range" min="0" max="5" step="0.5" value={ratingFilter} onChange={(e) => setRatingFilter(parseFloat(e.target.value))} className="w-full" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Amenities</label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(amenityIcons).map((amenity) => (
                  <button
                    key={amenity}
                    className={`border rounded-full px-3 py-1 text-sm ${amenitiesFilter.includes(amenity) ? 'bg-blue-200' : ''}`}
                    onClick={() =>
                      setAmenitiesFilter((prev) =>
                        prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
                      )
                    }
                  >
                    {amenityIcons[amenity]}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" placeholder="Search location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="border p-2 rounded w-full" />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border p-2 rounded w-full">
                <option value="price-asc">Price (Lowest First)</option>
                <option value="price-desc">Price (Highest First)</option>
                <option value="rating-asc">Rating (Lowest First)</option>
                <option value="rating-desc">Rating (Highest First)</option>
              </select>
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="md:w-3/4 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedHotels.length > 0 ? (
                sortedHotels.map((hotel) => (
                  <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{hotel.name}</h3>
                      <div className="flex items-center mb-2">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="text-gray-600">{hotel.rating} stars</span>
                      </div>
                      <p className="text-gray-600 mb-2"><FaMapMarkerAlt className="inline-block mr-1" /> {hotel.location}</p>
                      <p className="text-gray-700 mb-3">${hotel.price}/night</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {hotel.amenities.map((amenity) => (
                          <span key={amenity} className="bg-gray-100 rounded-full px-2 py-1 text-xs">{amenity}</span>
                        ))}
                      </div>
                      <Link to={`/hotels/${hotel.id}`} className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No hotels found matching the criteria.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelListingsPage;
