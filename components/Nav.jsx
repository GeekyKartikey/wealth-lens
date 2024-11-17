"use client";

import Image from "next/image";
import Link from "next/link";
import { usePageContext } from "@/app/context/PageContext";

const Nav = () => {
  const { account, setActivePage } = usePageContext();

  const handleHomeClick = () => {
    setActivePage("home"); // Ensure the active page is set to "home"
  };

  return (
    <nav className="flex flex-row items-center justify-between bg-transparent w-full h-28">
      {/* Logo with Link to the homepage */}
      <Link href="/" onClick={handleHomeClick}>
        <Image
          src="/logo.png"
          alt="nav-icon"
          width={50}
          height={50}
          className="cursor-pointer ml-7"
        />
      </Link>

      {/* Display wallet address if connected */}
      {account ? (
        <div className="flex items-center gap-2 mr-7">
          <p className="text-white text-sm font-medium bg-gray-800 px-4 py-2 rounded-lg">
            {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        </div>
      ) : (
        <p className="text-white text-sm font-medium mr-7">Not Connected</p>
      )}
    </nav>
  );
};

export default Nav;
