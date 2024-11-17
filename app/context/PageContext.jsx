"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";

// Create Context
const PageContext = createContext();

// Provider Component
export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("home");
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);

  // Function to connect MetaMask
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();

        setAccount(accounts[0]);
        setNetwork(network.name);
      } catch (error) {
        console.error("MetaMask connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  // Listen for MetaMask changes
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0] || null);
      };

      const handleNetworkChanged = (chainId) => {
        const networkName = ethers.providers.getNetwork(parseInt(chainId, 16))
          .name;
        setNetwork(networkName);
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleNetworkChanged);

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleNetworkChanged);
      };
    }
  }, []);

  return (
    <PageContext.Provider
      value={{
        activePage,
        setActivePage,
        account,
        setAccount,
        network,
        setNetwork,
        connectMetaMask,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

// Custom Hook for Convenience
export const usePageContext = () => useContext(PageContext);
