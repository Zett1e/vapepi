import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 z-10 w-full flex justify-between items-center px-20 mt-5">
      <div className="cursor-pointer">
        <Image
          src={"/images/logo/white.png"}
          width={50}
          height={50}
          alt="logo"
        />
      </div>
      <div className="flex gap-x-5 items-center">
        <MagnifyingGlassIcon className="w-5 text-white hover:text-gray-300 cursor-pointer" />
        <ShoppingCartIcon className="w-5 text-white hover:text-gray-300 cursor-pointer" />
        <Bars3Icon className="w-5 text-white hover:text-gray-300 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
