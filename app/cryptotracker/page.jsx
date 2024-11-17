"use client";

import CryptoCalendar from "@/components/Calendar";
import DAOProposals from "@/components/DaoProposals";
import CryptoHacks from "@/components/CryptoHacks";

export default function CryptoTracker() {
  return (
    <div className="pl-20 md:pl-28 h-screen pr-20 pt-6 flex gap-6">
      {/* Left Section (Calendar + Event Details) */}
      <div className="flex flex-col items-center gap-2 w-1/2">
        {/* Crypto Calendar */}
        <CryptoCalendar />
        {/* Event Details */}
        <div className="bg-purple-800 bg-opacity-80 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Event Details</h3>
          <p className="text-purple-200">Select a date to view event details here.</p>
        </div>
      </div>

      {/* Right Section (DAO Proposals + Crypto Hacks) */}
      <div className="flex flex-col gap-6 w-1/3">
        {/* DAO Proposals */}
        <DAOProposals />
        {/* Crypto Hacks */}
        <CryptoHacks />
      </div>
    </div>
  );
}

