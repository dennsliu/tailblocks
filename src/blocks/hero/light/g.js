import React from "react";
import PropTypes from "prop-types";

function LandingpageE(props) {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative h-80 md:h-96 bg-gradient-to-r from-purple-600 to-indigo-600 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://dummyimage.com/1200x400/667eea/ffffff?text=Banner')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-70" />

        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-block bg-white bg-opacity-20 text-white px-4 py-2 rounded-full mb-6 text-sm font-semibold backdrop-blur-sm">
              LIMITED TIME OFFER
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mega Sale - Up to 50% Off
            </h2>

            {/* Description */}
            <p className="text-white text-lg md:text-xl mb-8 opacity-90">
              Don't miss out on our biggest sale of the season. Discover amazing deals on thousands of products. Offer ends soon!
            </p>

            {/* CTA Button */}
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform active:scale-95">
              Shop Now
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full opacity-10 blur-2xl" />
      </div>
    </div>
  );
}

LandingpageE.propTypes = {};

export default LandingpageE;
