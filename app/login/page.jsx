import Image from "next/image";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gradient-1 h-screen w-screen">
      <div>
        <Image 
          src="/Group 2.svg"
          alt="main-logo"
          width={1300}
          height={356}
        />
      </div>

      <button type="button" className="w-52 h-14 z-30 border-white border-2 rounded-full text-white font-semibold text-lg bg-pink bg-opacity-5">
        Let's Scan
      </button>
    </div>
  );
}

