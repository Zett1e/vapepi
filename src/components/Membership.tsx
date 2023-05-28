import Image from "next/image";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import BtnView from "./BtnView";

const Membership = () => {
  return (
    <div className="flex md:flex-row flex-col text-white gap-2 md:justify-between md:items-stretch md:px-40 px-5 mt-10">
      <div className="relative w-full h-80 md:h-auto md:w-auto md:flex-1 rounded-md overflow-hidden">
        <Image
          src={"/images/membership/membership.jpg"}
          fill
          alt="Membership"
          className="object-cover"
        />
        <div className="absolute md:left-10 left-5 md:bottom-10 bottom-5 space-y-2 ">
          <h2 className="text-4xl font-bold">Membership Program</h2>
          <div className="member-title" />
          <p className="font-medium w-[60%]">
            Be a Vape Pi member and get your special exclusive offers
          </p>
          <BtnView />
        </div>
      </div>
      <div className="flex gap-x-2">
        <div className="md:w-52 w-44 bg-zinc-800 relative rounded-md">
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
              <p className="text-sm w-[70%] font-extralight">
                Find the best for you here!
              </p>
            </div>
            <ChevronRightIcon className="w-5 mt-2" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="md:w-52 w-44 h-40 bg-zinc-800 relative rounded-md">
            <Image src={"/images/membership/pods.png"} fill alt="pods" />
            <div className="absolute px-3 py-3 left-0 bottom-0 flex justify-between items-start backdrop-blur bg-[rgba(39,39,42,0.5)] cursor-pointer ">
              <div>
                <h3 className="text-xl">Pods</h3>
                <p className="text-sm w-[70%] font-extralight">
                  Variety of choices availability
                </p>
              </div>
              <ChevronRightIcon className="w-5 mt-2" />
            </div>
          </div>
          <div className="md:w-52 w-44 h-40 bg-zinc-800 relative rounded-md">
            <Image
              src={"/images/membership/disposible.png"}
              fill
              alt="disposible"
            />
            <div className="absolute px-3 py-3 left-0 bottom-0 flex justify-between items-start backdrop-blur bg-[rgba(39,39,42,0.5)] cursor-pointer ">
              <div>
                <h3 className="text-xl">Disposable</h3>
                <p className="text-sm w-[70%] font-extralight">
                  Easy, clean & superb flavor
                </p>
              </div>
              <ChevronRightIcon className="w-5 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
