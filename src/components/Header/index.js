import React from 'react';

const Header = () => {
  return (
    <>
      <style>
        {`
          .nav-link {
            position: relative;
            text-decoration: none; /* Remove default underline */
            padding-bottom: 5px; /* Add some space for the underline */
            color: inherit; /* Ensure it inherits the color */
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: currentColor; /* Use the current text color */
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}
      </style>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="https://placehold.co/150x50" alt="Credenza Logo" className="h-10" />
          <nav className="flex space-x-4">
            <a href="#" className="nav-link text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="nav-link text-gray-600 hover:text-blue-600">About us</a>
            <a href="#" className="nav-link text-gray-600 hover:text-blue-600">Learning Science</a>
            <a href="#" className="nav-link text-gray-600 hover:text-blue-600">Learning Vedic Math</a>
            <a href="#" className="nav-link text-gray-600 hover:text-blue-600">Learning Bespoke</a>
          </nav>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Contact Us</a>
        </div>
      </header>
    </>
  );
};

export default Header;
