import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Running from "../assets/running shoes.jpeg";
import Leather from "../assets/leather_oxford_shoes.jpeg";
import Sneaker from "../assets/sneakers.jpeg";
import Hiking from "../assets/hiking shoes.jpeg";
import Loafers from "../assets/suede_loafers.jpeg";
import Basketball from "../assets/basketball shoes.jpeg";
import Kids from "../assets/kids_shoes.jpeg";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const productData = [
    {
      id: '1',
      name: 'Performance Running Shoes',
      image: Running,
      price: 99.99,
      description: 'Lightweight and breathable running shoes.',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      colors: ['Black', 'Blue', 'Red'],
    },
    {
      id: '2',
      name: 'Classic Leather Oxfords',
      image: Leather,
      price: 149.99,
      description: 'Elegant leather oxfords for formal occasions.',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
      colors: ['Brown', 'Black'],
    },
    {
      id: '3',
      name: 'Comfortable Canvas Sneakers',
      image: Sneaker,
      price: 69.99,
      description: 'Stylish and comfortable canvas sneakers.',
      sizes: ['US 6', 'US 7', 'US 8', 'US 9'],
      colors: ['White', 'Gray', 'Navy'],
    },
    {
      id: '4',
      name: 'Trail Hiking Boots',
      image: Hiking,
      price: 129.99,
      description: 'Durable hiking boots for outdoor adventures.',
      sizes: ['US 8', 'US 9', 'US 10', 'US 11'],
      colors: ['Brown', 'Green', 'Black'],
    },
    {
      id: '5',
      name: 'Suede Loafers',
      image: Loafers,
      price: 89.99,
      description: 'Soft and stylish suede loafers.',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      colors: ['Tan', 'Dark Brown', 'Navy'],
    },
    {
      id: '6',
      name: 'High-Top Basketball Shoes',
      image: Basketball,
      price: 119.99,
      description: 'High-performance basketball shoes for agility.',
      sizes: ['US 9', 'US 10', 'US 11', 'US 12'],
      colors: ['White', 'Black', 'Red'],
    },
    {
      id: '7',
      name: "Kids' Athletic Sneakers",
      image: Kids,
      price: 59.99,
      description: 'Durable and fun athletic sneakers for kids.',
      sizes: ['US 3', 'US 4', 'US 5', 'US 6'],
      colors: ['Blue', 'Green', 'Red'],
    },
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);

    setTimeout(() => {
      const foundProduct = productData.find((p) => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        setError('Product not found.');
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const addToCart = () => {
    if (!product) return;
    if (!selectedSize || !selectedColor) {
      alert('Please select a size and color.');
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id && item.size === selectedSize && item.color === selectedColor
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, size: selectedSize, color: selectedColor, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert('Product added to cart!');
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-auto" />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`border px-4 py-2 rounded-full ${
                      selectedSize === size ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Color:</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`border px-4 py-2 rounded-full ${
                      selectedColor === color ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
