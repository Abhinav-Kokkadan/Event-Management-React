// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Ensure this path is correct
import EventPage from './pages/EventPage';
import AttendeesPage from './pages/AttendeesPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/attendees" element={<AttendeesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
