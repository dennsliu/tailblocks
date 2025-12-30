import React from "react";
import PropTypes from "prop-types";

function LandingpageD(props) {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over $50. Fast and reliable delivery to your doorstep.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9-4v4m0 0v4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Easy Returns",
      description: "30-day money-back guarantee. Return or exchange your products hassle-free.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3v-6m-3 6a9 9 0 119 0m-9 0a9 9 0 109 0m-3 3h6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help you with any questions or concerns.",
      icon: (
        <svg
          className="w-10 h-10 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're committed to providing the best shopping experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-2 border-blue-600 rounded-lg p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300 bg-gray-700"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-gray-600 rounded-full">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

LandingpageD.propTypes = {};

export default LandingpageD;
