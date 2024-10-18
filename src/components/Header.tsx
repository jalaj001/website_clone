import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlassWater, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <GlassWater className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-xl font-bold text-white">GravityFlow</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-blue-400">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-400">About</Link>
          <a href="#" className="text-gray-300 hover:text-blue-400">Products</a>
          <Link to="/contact" className="text-gray-300 hover:text-blue-400">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link to="/" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">About</Link>
          <a href="#" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">Products</a>
          <Link to="/contact" className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-700">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;