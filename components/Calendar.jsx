"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function CryptoCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const events = {
    "2024-11-17": "Ethereum Merge Upgrade",
    "2024-12-01": "Polygon Network Downtime",
  };

  return (
    <div className="bg-gradient-to-b from-pink-400 to-pink-200 p-4 rounded-lg shadow-md">
      <h2 className="text-white text-lg font-semibold mb-4">Crypto Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const event = events[date.toISOString().split("T")[0]];
          return event ? <p className="text-sm text-pink-700">{event}</p> : null;
        }}
      />
      {events[selectedDate.toISOString().split("T")[0]] && (
        <div className="mt-4 bg-white p-2 rounded shadow-md">
          <h3 className="text-pink-600 font-bold">Event Details:</h3>
          <p>{events[selectedDate.toISOString().split("T")[0]]}</p>
        </div>
      )}
    </div>
  );
}
