"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import * as PushAPI from "@pushprotocol/restapi";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("home");
  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [transactions, setTransactions] = useState([]);

  // Function to connect MetaMask
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const networkDetails = await provider.getNetwork();

        setAccount(accounts[0]); // Updates the account state
        setNetwork(networkDetails.name); // Updates the network state

        // Fetch transactions for the connected account
        fetchTransactions(accounts[0]);
      } catch (error) {
        console.error("MetaMask connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  // Fetch transactions using Push API
  const fetchTransactions = async (walletAddress) => {
    try {
      const walletData = await PushAPI.user.getFeeds({
        user: `eip155:${walletAddress}`, // Ensure correct format
        env: "prod", // Switch to "staging" if needed
      });

      if (Array.isArray(walletData)) {
        setTransactions(walletData); // Update state with transactions
        console.log("Fetched Transactions:", walletData); // Debugging
      } else {
        console.warn("Unexpected Push API response:", walletData); // Handle unexpected responses
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions from Push API:", error);
      setTransactions([]);
    }
  };

  // Listen for MetaMask account or network changes
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0] || null);
        if (accounts[0]) {
          fetchTransactions(accounts[0]);
        } else {
          setTransactions([]); // Clear transactions if no account is connected
        }
      };

      const handleNetworkChanged = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const networkDetails = await provider.getNetwork();
        setNetwork(networkDetails.name);
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleNetworkChanged);

      return () => {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener(
          "chainChanged",
          handleNetworkChanged
        );
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
        transactions,
        connectMetaMask,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
