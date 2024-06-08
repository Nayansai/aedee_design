import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="https://placehold.co/150x50" alt="Credenza Logo" className="h-10" />
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About us</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Learning Science</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Learning Vedic Math</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Learning Bespoke</a>
        </nav>
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
