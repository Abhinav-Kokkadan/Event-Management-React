// src/pages/AttendeesPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendeesPage = () => {
  const [attendees, setAttendees] = useState([]);
  const [expandedAttendee, setExpandedAttendee] = useState(null); // Track expanded attendee

  useEffect(() => {
    axios.get('http://localhost:8000/api/attendees/')
      .then(response => setAttendees(response.data))
      .catch(error => console.error('Error fetching attendees:', error));
  }, []);

  const toggleAttendeeDetails = (attendeeId) => {
    setExpandedAttendee(expandedAttendee === attendeeId ? null : attendeeId); // Toggle expand/collapse
  };

  return (
    <div className="pt-16 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
            <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-900 text-center">Attendees</h1>
            <div className="max-w-4xl mx-auto mt-8">
                <ul className="space-y-4">
                {attendees.map(attendee => (
                    <li key={attendee.id} className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50">
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold">{attendee.name}</span>
                        <button
                        onClick={() => toggleAttendeeDetails(attendee.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                        {expandedAttendee === attendee.id ? '-' : '+'}
                        </button>
                    </div>
                    <p className="text-gray-600 mt-2">{attendee.email}</p>

                    {/* Attendee Details Dropdown */}
                    {expandedAttendee === attendee.id && (
                        <div className="mt-4 bg-gray-100 p-4 rounded-md">
                        <p><strong>Event Name:</strong> {attendee.eventName}</p>
                        <p><strong>Date:</strong> {attendee.eventDate}</p>
                        <p><strong>Email:</strong> {attendee.email}</p>
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

export default AttendeesPage;
