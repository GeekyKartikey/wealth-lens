import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-row items-center border-white justify-between w-full h-28">
        <Link href="/">
            <Image 
              src="/logo.png"
              alt='nav-icon'
              width={50}
              height={50}
              className='flex-start ml-7'     
            />
        </Link>
            
        <Image 
            src="/profile.svg"
            alt='profile-icon'
            width={35}
            height={35}
            className='flex-start mr-7'     
        />
             
    </div>
  );
}

export default Nav;
