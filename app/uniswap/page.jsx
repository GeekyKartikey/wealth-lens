"use client";
import uniswapData from "@/data/uniswapData";
import Pool from "@/components/Pool";// Path to Pool component

export default function UniswapPage() {
  return (
    <div className="flex flex-col gap-8 pl-20 md:pl-28 h-screen pr-20 pt-6 text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/uniswap-logo.png"
            alt="Uniswap"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">Uniswap V2</h1>
        </div>
        <p className="text-2xl font-bold">$00.00</p>
      </div>
    </div>
  );
}
