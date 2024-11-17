"use client";

import EventCard from "./EventCard";

const proposals = [
  {
    title: "New Proposal for GTC Allocation",
    description: "Earmark 6.9M GTC to Citizens Fund.",
    funds: "$6.9M",
    category: "Governance",
    votingEnd: "7 Days",
  },
];

export default function DAOProposals() {
  return (
    <div className="bg-gradient-to-b from-pink-400 to-pink-200 p-4 rounded-lg shadow-md">
      <h2 className="text-white text-lg font-semibold mb-4">DAO Proposals</h2>
      {proposals.map((proposal, index) => (
        <EventCard key={index} {...proposal} />
      ))}
    </div>
  );
}
