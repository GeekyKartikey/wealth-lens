import Image from "next/image";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-gradient-1 h-screen w-screen">
      <Nav />
      <Sidebar />

      <div className="flex flex-col gap-16 items-center justify-center">
        <h1 className="text-white font-extrabold font-inter text-8xl">WEALTH LENS</h1>
        <p className="text-white font-semibold font-inter text-xl">"Discover what your wallet can truly do."</p>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-3 w-72 h-16 border-white">
          <Image 
            src="/search.svg"
            alt="search-icon"
            width={14}
            height={14}
          />

          <h3 className="text-white">Search wallet addresses, assets on any blockchain</h3>
        </div>
      </div>
      
    </div>
  );
}
