import Image from "next/image";
import React from "react";
import logo from "../public/logo3.png";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-100 cursor-pointer my-auto">
        <Image src={logo} width={100} height={100} />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          className="pl-5 flex-grow bg-transparent outline-none
          text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white cursor-pointer rounded-full p-1 md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
