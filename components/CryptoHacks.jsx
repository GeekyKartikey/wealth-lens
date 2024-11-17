"use client";

import EventCard from "./EventCard";

const hacks = [
  {
    title: "Phishing Attack on DSProxy Contract",
    description: "Funds Lost: $55M",
    category: "Phishing",
    severity: "High",
  },
];

export default function CryptoHacks() {
  return (
    <div className="bg-gradient-to-b from-pink-400 to-pink-200 p-4 rounded-lg shadow-md">
      <h2 className="text-white text-lg font-semibold mb-4">Recent Crypto Hacks</h2>
      {hacks.map((hack, index) => (
        <EventCard key={index} {...hack} />
      ))}
    </div>
  );
}
