import React from "react";
import PropTypes from "prop-types";

function LandingpageC(props) {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "https://dummyimage.com/400x300/667eea/ffffff?text=Electronics",
    },
    {
      id: 2,
      name: "Fashion",
      image: "https://dummyimage.com/400x300/764ba2/ffffff?text=Fashion",
    },
    {
      id: 3,
      name: "Home & Garden",
      image: "https://dummyimage.com/400x300/f093fb/ffffff?text=Home",
    },
    {
      id: 4,
      name: "Sports & Outdoors",
      image: "https://dummyimage.com/400x300/4facfe/ffffff?text=Sports",
    },
    {
      id: 5,
      name: "Beauty & Personal Care",
      image: "https://dummyimage.com/400x300/00f2fe/ffffff?text=Beauty",
    },
    {
      id: 6,
      name: "Books & Media",
      image: "https://dummyimage.com/400x300/43e97b/ffffff?text=Books",
    },
  ];

  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our wide range of product categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Category Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect - Subtle arrow indicator */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

LandingpageC.propTypes = {};

export default LandingpageC;
