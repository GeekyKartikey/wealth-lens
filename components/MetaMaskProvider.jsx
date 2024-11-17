"use client";

import React, { useEffect } from "react";
import { ethers } from "ethers";
import { usePageContext } from "@/app/context/PageContext";

const MetaMaskProvider = ({ children }) => {
  const { setAccount, setNetwork } = usePageContext();

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
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

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0] || null);
      };

      const handleNetworkChanged = (chainId) => {
        setNetwork(parseInt(chainId, 16));
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleNetworkChanged);

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
        window.ethereum.removeListener("chainChanged", handleNetworkChanged);
      };
    }
  }, [setAccount, setNetwork]);

  return <>{children}</>;
};

export default MetaMaskProvider;
