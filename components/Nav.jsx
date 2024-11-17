"use client";

import Image from "next/image";
import Link from "next/link";
import { usePageContext } from "@/app/context/PageContext";

const Nav = () => {
  const { account } = usePageContext();

  return (
    <nav className="flex flex-row items-center justify-between bg-transparent w-full h-28">
      {/* Logo with link to the homepage */}
      <Link href="/" passHref>
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
          <p className="text-white text-sm font-medium bg-bubblegum bg-opacity-30 px-4 py-2 rounded-lg">
            {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        </div>
      ) : (
        <p className="text-white text-sm font-medium mr-7">
          <Image 
            src="/profile.svg"
            alt="profile"
            width={30}
            height={30}
          />
        </p>
      )}
    </nav>
  );
};

export default Nav;
