import React from "react";
import PropTypes from "prop-types";

function LandingpageB(props) {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$199.99",
      image: "https://dummyimage.com/300x300/667eea/ffffff?text=Product+1",
      rating: 5,
      reviews: 128
    },
    {
      id: 2,
      name: "Wireless Speaker",
      price: "$149.99",
      image: "https://dummyimage.com/300x300/764ba2/ffffff?text=Product+2",
      rating: 4,
      reviews: 95
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "$299.99",
      image: "https://dummyimage.com/300x300/f093fb/ffffff?text=Product+3",
      rating: 5,
      reviews: 156
    },
    {
      id: 4,
      name: "Phone Stand",
      price: "$29.99",
      image: "https://dummyimage.com/300x300/4facfe/ffffff?text=Product+4",
      rating: 4,
      reviews: 42
    },
    {
      id: 5,
      name: "USB-C Hub",
      price: "$79.99",
      image: "https://dummyimage.com/300x300/00f2fe/ffffff?text=Product+5",
      rating: 5,
      reviews: 203
    },
    {
      id: 6,
      name: "Screen Protector",
      price: "$19.99",
      image: "https://dummyimage.com/300x300/43e97b/ffffff?text=Product+6",
      rating: 4,
      reviews: 87
    },
    {
      id: 7,
      name: "Phone Case",
      price: "$49.99",
      image: "https://dummyimage.com/300x300/fa709a/ffffff?text=Product+7",
      rating: 5,
      reviews: 234
    },
    {
      id: 8,
      name: "Charging Cable",
      price: "$14.99",
      image: "https://dummyimage.com/300x300/fee140/ffffff?text=Product+8",
      rating: 4,
      reviews: 56
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

LandingpageB.propTypes = {};

export default LandingpageB;
