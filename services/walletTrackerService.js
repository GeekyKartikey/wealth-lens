import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from "ethers";

// Fetch Wallet Notifications
export const fetchWalletTransactions = async (walletAddress) => {
  try {
    const notifications = await PushAPI.user.getFeeds({
      user: `eip155:${walletAddress}`, // Format for wallet address
      env: "prod", // Use "prod" for production environment
    });

    return notifications; // This will include transactions and other activities
  } catch (error) {
    console.error("Error fetching wallet transactions:", error);
    return [];
  }
};
