"use client";

import React from "react";
import { usePageContext } from "@/app/context/PageContext";

const MetaMaskButton = () => {
  const { account, setAccount } = usePageContext();

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected Wallet Address:", accounts[0]); // Debugging
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <div>
        <button
          onClick={connectMetaMask}
          className="w-52 h-14 z-30 border-white border-2 rounded-full text-white font-semibold text-lg bg-pink bg-opacity-5"
        >
          Let's Scan
        </button>
    </div>
  );
};

export default MetaMaskButton;
