import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaDumbbell, FaSpa, FaUtensils, FaCocktail, FaParking, FaCoffee } from 'react-icons/fa';
import Islamabad from "../assets/islamabad.webp";
import Lahore from "../assets/lahore.jpeg";
import Karachi from "../assets/karachi.jpg";
import Nathiagali from "../assets/qubed_nathiagali.jpeg";
import Peshawar from "../assets/peshawar.webp";
import Gawadar from "../assets/Zaver_Pearl_Continental_gawadar.avif";
import Multan from "../assets/Royal_Mansion_Multan.jpg";
import Faislabad from "../assets/Faisalabad_Serena_Hotel.jpg";


function HotelDetailsPage() {
  const { id } = useParams();

  const hotels = [
    {
      id: 1,
      name: "Islamabad Serena Hotel",
      city: "Islamabad",
      price: 180,
      rating: 4.8,
      amenities: ["WiFi", "Pool", "Gym", "Spa", "Restaurant", "Parking"],
      location: "F-7 Markaz, Islamabad",
      image: Islamabad,
      description: "Experience luxury at its finest with our world-class amenities and exceptional service.",
    },
    {
      id: 2,
      name: "Royal Swiss",
      city: "Lahore",
      price: 120,
      rating: 4.3,
      amenities: ["WiFi", "Restaurant", "Bar", "Breakfast"],
      location: "Mall Road, Lahore",
      image: Lahore,
      description: "A blend of modern comfort and historical charm, located in the heart of Lahore.",
    },
    {
      id: 3,
      name: "Movenpick Hotel",
      city: "Karachi",
      price: 150,
      rating: 4.5,
      amenities: ["WiFi", "Pool", "Beach Access", "Restaurant"],
      location: "Clifton Beach, Karachi",
      image: Karachi,
      description: "Enjoy the serene beauty of the Arabian Sea with our beachfront accommodations.",
    },
    {
      id: 4,
      name: "Qubed Hotel",
      city: "Nathiagali",
      price: 200,
      rating: 4.9,
      amenities: ["WiFi", "Spa", "Restaurant", "Parking", "Breakfast"],
      location: "Ayubia National Park, Nathiagali",
      image: Nathiagali,
      description: "Escape to the mountains and rejuvenate with our luxurious retreat amidst nature.",
    },
    {
      id: 5,
      name: "Pearl Continental Hotel",
      city: "Peshawar",
      price: 90,
      rating: 4.0,
      amenities: ["WiFi", "Restaurant", "Parking"],
      location: "City Center, Peshawar",
      image: Peshawar,
      description: "Convenient and comfortable suites located in the bustling city center of Peshawar.",
    },
    {
      id: 6,
      name: "Continental Gwadar Hotel",
      city: "Gwadar",
      price: 170,
      rating: 4.6,
      amenities: ["WiFi", "Pool", "Beach Access", "Restaurant", "Bar"],
      location: "Gwadar Beach, Gwadar",
      image: Gawadar,
      description: "Experience breathtaking ocean views and enjoy a relaxing stay at our premium hotel.",
    },
    {
      id: 7,
      name: "Faisalabad Serena Hotel",
      city: "Faisalabad",
      price: 110,
      rating: 4.2,
      amenities: ["WiFi", "Restaurant", "Gym", "Parking"],
      location: "Clock Tower, Faisalabad",
      image: Faislabad,
      description: "Modern accommodations with excellent amenities, perfect for business and leisure travelers.",
    },
    {
      id: 8,
      name: "Royal Mansion Multan",
      city: "Multan",
      price: 130,
      rating: 4.4,
      amenities: ["WiFi", "Pool", "Restaurant", "Breakfast"],
      location: "Hussain Agahi, Multan",
      image: Multan,
      description: "Enjoy a royal experience with our spacious suites and top-notch services.",
    },
  ];

  const hotel = hotels.find((hotel) => hotel.id === parseInt(id));

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
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-8">
        {hotel ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-blue-700">{hotel.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src={hotel.image} alt={hotel.name} className="w-full rounded-lg mb-6" />
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-500 mr-2" />
                  <span className="text-lg font-semibold">{hotel.rating} stars</span>
                </div>
                <p className="text-gray-700 mb-4">{hotel.description}</p>
              </div>
              <div>
                <div className="mb-4">
                  <p className="text-lg font-semibold mb-2">City: {hotel.city}</p>
                  <p className="text-lg font-semibold mb-2">Price: ${hotel.price}/night</p>
                  <p className="text-lg font-semibold mb-2">
                    <FaMapMarkerAlt className="inline-block mr-1" /> Location: {hotel.location}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity) => (
                      <span key={amenity} className="bg-gray-100 rounded-full px-3 py-2 text-sm flex items-center">
                        {amenityIcons[amenity]} <span className="ml-1">{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/booking" className="block w-full text-center py-3 px-6 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Book Now
                </Link>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-lg text-gray-600">Hotel not found.</p>
        )}
      </div>
    </div>
  );
}

export default HotelDetailsPage;