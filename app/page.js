"use client";

import { usePageContext } from "./context/PageContext";
import TransactionsPage from "./transactions/page";
import DashboardPage from "./dashboard/page";
import NFTsPage from "./nft/page";
import UniswapPage from "./uniswap/page";
import CryptoTracker from "./cryptotracker/page";
import MetaMaskButton from "@/components/MetaMaskButton";

export default function Page() {
  const { activePage } = usePageContext();

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <div className="flex flex-col gap-24 h-screen w-screen px-4 md:px-10">
            {/* Header Section */}
            <div className="flex flex-col gap-14 items-center justify-center mt-16">
              <h1 className="text-white font-extrabold font-inter text-6xl md:text-8xl text-center">
                WEALTH LENS
              </h1>
              <p className="text-white font-semibold font-inter text-lg md:text-xl text-center">
                "Discover what your wallet can truly do."
              </p>
            </div>

            {/* Search Section */}
            <div className="w-full flex items-center justify-center">
              <MetaMaskButton />
            </div>
          </div>
        );

      case "dashboard":
        return <DashboardPage />;
      case "transactions":
        return <TransactionsPage />;
      case "uniswap":
        return <UniswapPage />;
      case "nft":
        return <NFTsPage />
      case "cryptotracker":
        return <CryptoTracker />;
      default:
        return <div className="text-white text-xl p-6">404 - Page Not Found</div>;
    }
  };

  return <div>{renderPage()}</div>;
}
