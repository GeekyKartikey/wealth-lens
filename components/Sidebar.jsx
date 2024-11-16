"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 bg-bubblegum bg-opacity-30 text-white transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        }`}
        style={{ height: "50%" }}
      >
        <div className="p-4 h-full flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul>
            <li className="mb-3 text-center">
              <a href="#" className="hover:text-bubblegum ">
                Dashboard
              </a>
            </li>
            <li className="mb-3 text-center">
              <a href="#" className="hover:text-bubblegum ">
                Notifications
              </a>
            </li>
            <li className="mb-3 text-center">
              <a href="#" className="hover:text-bubblegum ">
                Portfolio
              </a>
            </li>
            <li className="mb-3 text-center">
              <a href="#" className="hover:text-bubblegum ">
                Transactions
              </a>
            </li>
            <li className="mb-3 text-center">
              <a href="#" className="hover:text-bubblegum ">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
