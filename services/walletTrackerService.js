import * as PushAPI from "@pushprotocol/restapi";

// Fetch Wallet Notifications
export const fetchWalletTransactions = async (walletAddress) => {
  try {
    const walletData = await PushAPI.user.getFeeds({
      user: `eip155:${walletAddress}`, // Format for wallet address
      env: "prod", // Use "prod" for production environment
    });
    console.log("Fetched Transactions from Push API:", walletData); // Debugging
    return walletData; // This will include transactions and other activities
  } catch (error) {
    console.error("Error fetching wallet transactions:", error);
    return [];
  }
};
