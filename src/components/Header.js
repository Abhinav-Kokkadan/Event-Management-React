import React from 'react';

const Header = () => {
  return (
    <header className="bg-teal-900 text-white py-4 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Karmaa Labs</h1>
        <nav className="space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/events" className="hover:text-gray-300">Events</a>
          <a href="/attendees" className="hover:text-gray-300">Attendees</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
