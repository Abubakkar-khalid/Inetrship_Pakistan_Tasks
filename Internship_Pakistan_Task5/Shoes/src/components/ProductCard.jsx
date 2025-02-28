import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-3">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="block w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;