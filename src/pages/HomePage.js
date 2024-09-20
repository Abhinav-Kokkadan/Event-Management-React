// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to the Event Management App!</h1>
      <p className="text-lg text-secondary mb-8">Manage your events and attendees with ease.</p>
      <Link 
        to="/events"
        className="bg-highlight text-white py-2 px-4 rounded-lg shadow-lg hover:bg-accent transition duration-300"
      >
        View Events
      </Link>
    </div>
  );
};

export default HomePage;
