import Image from "next/image";
import React from "react";

const HeroSlide = ({ img }: { img: string }) => {
  return (
    <div className="relative w-full h-[80vh]">
      <Image
        src={`/images/hero/${img}.jpg`}
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
        alt="vape background"
      />
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-max text-white flex flex-col justify-center items-center space-y-3">
        <p className="text-2xl font-medium drop-shadow-md">The Best Look</p>
        <h2 className="text-5xl tracking-wider drop-shadow-md font-bold">
          Anytime Anywhere
        </h2>
        <p className="text-2xl font-medium drop-shadow-md">Starts from 10,000 MMK</p>
        <button className="text-center backdrop-blur bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-200 px-6 py-2 rounded-full">
          View
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
