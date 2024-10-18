import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience Gravity-Powered Perfection</h1>
          <p className="text-xl mb-6">Discover the revolutionary way to enjoy your favorite beverages with GravityFlow.</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="GravityFlow Device"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;