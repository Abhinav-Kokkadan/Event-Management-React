// src/pages/EventPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [expandedEvent, setExpandedEvent] = useState(null); // Track the expanded event

  useEffect(() => {
    axios.get('http://localhost:8000/api/events/')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const toggleEventDetails = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId); // Toggle between expanded and collapsed
  };

  return (
    <div className="pt-16 pb-16 min-h-screen">
    <div className="container mx-auto px-4">
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 text-center">Upcoming Events</h1>
      <div className="max-w-4xl mx-auto mt-8">
        <ul className="space-y-4">
          {events.map(event => (
            <li key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">{event.name}</span>
                <button
                  onClick={() => toggleEventDetails(event.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  {expandedEvent === event.id ? '-' : '+'}
                </button>
              </div>
              <p className="text-gray-600 mt-2">{event.date}</p>

              {/* Event Details Dropdown */}
              {expandedEvent === event.id && (
                <div className="mt-4 bg-gray-100 p-4 rounded-md">
                  <p><strong>Description:</strong> {event.description}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Attendees:</strong> {event.attendees.length}</p>
                  <ul className="mt-2 space-y-2">
                    {event.attendees.map(attendee => (
                      <li key={attendee.id} className="text-sm text-gray-700">
                        {attendee.name} - {attendee.email}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EventPage;
