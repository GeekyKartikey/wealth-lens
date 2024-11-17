"use client";

import { useState } from "react";
import { usePageContext } from "@/app/context/PageContext";

export default function Sidebar() {
  const { activePage, setActivePage } = usePageContext();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", page: "dashboard" },
    { name: "Uniswap", page: "uniswap" },
    { name: "NFT", page: "nft" },
    { name: "Transactions", page: "transactions" },
    { name: "Crypto Tracker", page: "cryptotracker" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Rectangle Button with Rotated Text */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          aria-expanded={isOpen}
          aria-label="Open menu"
          className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 bg-bubblegum bg-opacity-30 w-12 h-32 shadow-lg rounded-r-lg hover:bg-bubblegum transition flex items-center justify-center"
        >
          <span
            className="text-white font-medium text-lg"
            style={{
              transform: "rotate(-90deg)",
              whiteSpace: "nowrap",
            }}
          >
            FEATURES
          </span>
        </button>
      )}

      {/* Overlay (clickable area outside the sidebar) */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 rounded- bg-bubblegum bg-opacity-30 text-white transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        }`}
        style={{ height: "50%" }}
      >
        <div className="p-4 h-full flex flex-col justify-center round items-center">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.page}
                className={`mb-3 text-center cursor-pointer ${
                  activePage === item.page ? "text-bubblegum text-2xl font-semibold" : ""
                }`}
                onClick={() => {
                  setActivePage(item.page);
                  closeSidebar();
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
