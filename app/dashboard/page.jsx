"use client";

import React from "react";
import AssetsSection from "@/components/AssetsSection";
import assets from "@/data/assetsData"; // Importing the assets array
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full pl-20 md:pl-28 pr-20 pt-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div className="flex gap-4">
          <select className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            <option>All Networks</option>
            <option>Ethereum</option>
            <option>Polygon</option>
          </select>
        </div>
      </div>

      {/* Total Worth Section */}
      <div className="flex items-center justify-between bg-gray-900 p-6 rounded-lg shadow-md mb-6">
        <div>
          <p className="text-gray-400">Total Worth</p>
          <h2 className="text-4xl font-bold text-white">$5,433,458.88</h2>
          <p className="text-green-400 text-sm">
            $20,461.1 <span className="text-green-500">▲ 0.38%</span>
          </p>
        </div>
      </div>

      {/* Assets Section */}
      <AssetsSection assets={assets} />
    </div>
  );
}
