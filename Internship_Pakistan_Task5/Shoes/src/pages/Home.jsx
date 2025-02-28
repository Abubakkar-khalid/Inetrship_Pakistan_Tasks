// Placeholder data for featured products
import { useNavigate } from "react-router-dom";
import Running from "../assets/running shoes.jpeg";
import Leather from "../assets/leather_oxford_shoes.jpeg";
import Sneaker from "../assets/sneakers.jpeg";
import Hiking from "../assets/hiking shoes.jpeg";
import Loafers from "../assets/suede_loafers.jpeg";
import Basketball from "../assets/basketball shoes.jpeg";
import banner from "../assets/banner.png";

const featuredProducts = [
  {
    id: 1,
    name: "Performance Running Shoes",
    image: Running,
    price: "$99.99",
    description:
      "Lightweight and breathable running shoes for optimal performance.",
  },
  {
    id: 2,
    name: "Classic Leather Oxfords",
    image: Leather,
    price: "$149.99",
    description: "Elegant leather oxfords, perfect for formal occasions.",
  },
  {
    id: 3,
    name: "Comfortable Canvas Sneakers",
    image: Sneaker,
    price: "$69.99",
    description: "Stylish and comfortable canvas sneakers for everyday wear.",
  },
  {
    id: 4,
    name: "Trail Hiking Boots",
    image: Hiking,
    price: "$129.99",
    description: "Durable hiking boots for outdoor adventures.",
  },
  {
    id: 5,
    name: "Suede Loafers",
    image: Loafers,
    price: "$89.99",
    description: "Soft suede loafers for a relaxed yet refined look.",
  },
  {
    id: 6,
    name: "Basketball Shoes",
    image: Basketball,
    price: "$119.99",
    description: "High-performance basketball shoes for agility and support.",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <section
  className="relative h-96 md:h-[500px] bg-cover bg-center rounded-lg overflow-hidden mb-8"
  style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${banner})` }}
>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white px-6 md:px-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Step into <span className="text-blue-400">Style</span>
      </h1>
      <p className="text-lg md:text-xl mb-6 drop-shadow-md">
        Discover the perfect shoes for every occasion.
      </p>
      <button
        onClick={() => navigate("/products")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        Shop Now
      </button>
    </div>
  </div>
</section>


      {/* Featured Products Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product List */}
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
                <button
                  onClick={() => navigate("/products")}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
      Ready to Find <span className="text-blue-500">Your Perfect Pair?</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-600 mb-6">
      Browse our latest collection and step into style today.
    </p>
    <button
      onClick={() => navigate("/products")}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
    >
      Explore Now
    </button>
  </div>
</section>

    </div>
  );
}

export default Home;
