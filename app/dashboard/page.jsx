"use client";

import React from "react";
import AssetsSection from "@/components/AssetsSection";
import assets from "@/data/assetsData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full pl-20 md:pl-28 pr-20 pt-6">
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

      <div className="flex items-center justify-between gap-4 bg-gray-900 p-6 rounded-lg shadow-md mb-6">
        <div>
          <p className="text-gray-400">Total Worth</p>
          <h2 className="text-4xl font-bold text-white">$3.543</h2>
          <p className="text-red-500 text-sm">
            -$1.733 <span className="text-red-500">▼ 32.85%</span>
          </p>
        </div>
      </div>

      <AssetsSection assets={assets} />
    </div>
  );
}
