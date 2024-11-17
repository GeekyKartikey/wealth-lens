"use client";

import nftsData from "@/data/nftsData"; // Path to NFTs data
import NFTSection from "@/components/NFTSection"; // Path to NFT Section component

export default function NFTsPage() {
  return (
    <div className="flex flex-col gap-8 p-8 text-white pl-20 md:pl-28 h-screen pr-20 pt-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold">NFTs</h1>

      {/* Total Value Section */}
      <div className="flex justify-between items-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <div>
          <p className="text-lg">Total Value by</p>
          <h2 className="text-4xl font-bold">$11,185.88</h2>
        </div>
        <select className="px-4 py-2 bg-gray-700 rounded-md text-white shadow-md">
          <option>Top Offer</option>
          <option>Floor Price</option>
          <option>Recent Sale</option>
        </select>
      </div>

      {/* NFT Section */}
      <NFTSection nfts={nftsData} />
    </div>
  );
}
