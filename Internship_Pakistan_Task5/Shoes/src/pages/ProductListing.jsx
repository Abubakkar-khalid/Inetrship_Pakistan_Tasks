import ProductCard from "../components/ProductCard"; // Assuming ProductCard is in the components folder
import Running from "../assets/running shoes.jpeg";
import Leather from "../assets/leather_oxford_shoes.jpeg";
import Sneaker from "../assets/sneakers.jpeg";
import Hiking from "../assets/hiking shoes.jpeg";
import Loafers from "../assets/suede_loafers.jpeg";
import Basketball from "../assets/basketball shoes.jpeg";
import Kids from "../assets/kids_shoes.jpeg";

function ProductListing() {
  const products = [
    {
      id: "1",
      name: "Performance Running Shoes",
      image: Running,
      price: "$99.99",
      description: "Lightweight and breathable running shoes.",
    },
    {
      id: "2",
      name: "Classic Leather Oxfords",
      image: Leather,
      price: "$149.99",
      description: "Elegant leather oxfords for formal occasions.",
    },
    {
      id: "3",
      name: "Comfortable Canvas Sneakers",
      image: Sneaker,
      price: "$69.99",
      description: "Stylish and comfortable canvas sneakers.",
    },
    {
      id: "4",
      name: "Trail Hiking Boots",
      image: Hiking,
      price: "$129.99",
      description: "Durable hiking boots for outdoor adventures.",
    },
    {
      id: "5",
      name: "Suede Loafers",
      image: Loafers,
      price: "$89.99",
      description: "Soft and stylish suede loafers.",
    },
    {
      id: "6",
      name: "High-Top Basketball Shoes",
      image: Basketball,
      price: "$119.99",
      description: "High-performance basketball shoes for agility.",
    },
    {
      id: "7",
      name: "Kids' Athletic Sneakers",
      image: Kids,
      price: "$59.99",
      description: "Durable and fun athletic sneakers for kids.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
