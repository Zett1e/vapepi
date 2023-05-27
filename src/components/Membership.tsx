import Image from "next/image";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Membership = () => {
  return (
    <div className="flex text-white gap-x-2 justify-between items-stretch px-40 mt-10">
      <div className="relative flex-1 rounded-md overflow-hidden">
        <Image
          src={"/images/membership/membership.jpg"}
          fill
          alt="Membership"
        />
        <div className="absolute left-10 bottom-10 space-y-2 ">
          <h2 className="text-4xl font-bold">Membership Program</h2>
          <div className="member-title" />
          <p className="font-medium w-[60%]">
            Be a Vape Pi member and get your special exclusive offers
          </p>
          <button className="text-center backdrop-blur bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.6)] transition-all duration-200 px-6 py-2 rounded-full">
            View
          </button>
        </div>
      </div>
      <div className="w-52  bg-zinc-800 relative rounded-md">
        <Image
          src={"/images/membership/devices.png"}
          fill
          alt="devices"
          style={{
            objectFit: "contain",
            objectPosition: "top",
            marginTop: "30px",
          }}
        />
        <div className="absolute px-3 py-3 left-0 bottom-0 flex justify-between items-start backdrop-blur bg-[rgba(39,39,42,0.5)] cursor-pointer ">
          <div>
            <h3 className="text-xl">Devices</h3>
            <p className="text-sm w-[70%] font-extralight">Find the best for you here!</p>
          </div>
          <ChevronRightIcon className="w-5 mt-2" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="w-52 h-40 bg-zinc-800 relative rounded-md">
          <Image src={"/images/membership/pods.png"} fill alt="pods" />
          <div className="absolute px-3 py-3 left-0 bottom-0 flex justify-between items-start backdrop-blur bg-[rgba(39,39,42,0.5)] cursor-pointer ">
            <div>
              <h3 className="text-xl">Pods</h3>
              <p className="text-sm w-[70%] font-extralight">Variety of choices availability</p>
            </div>
            <ChevronRightIcon className="w-5 mt-2" />
          </div>
        </div>
        <div className="w-52 h-40 bg-zinc-800 relative rounded-md">
          <Image
            src={"/images/membership/disposible.png"}
            fill
            alt="disposible"
          />
          <div className="absolute px-3 py-3 left-0 bottom-0 flex justify-between items-start backdrop-blur bg-[rgba(39,39,42,0.5)] cursor-pointer ">
            <div>
              <h3 className="text-xl">Disposible</h3>
              <p className="text-sm w-[70%] font-extralight">Easy, clean & superb flavor</p>
            </div>
            <ChevronRightIcon className="w-5 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
