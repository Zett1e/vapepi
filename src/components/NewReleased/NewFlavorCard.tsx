import Image from "next/image";
import React from "react";
import BtnView from "../BtnView";

const NewFlavorCard = ({ img }: { img: string }) => {
  return (
    <div className="flavor relative w-full h-44 text-white overflow-hidden rounded-md ">
      <Image src={`/images/flavors/${img}.jpg`} width={700} height={200} alt="new flavor"  />
      <div className="absolute top-1/2 -translate-y-1/2 md:right-20 right-1/2 md:translate-x-0 translate-x-1/2 z-20 md:space-y-3">
        <h1 className="md:text-4xl text-3xl font-bold">Try New Flavor</h1>
        <p>Citrus Monster</p>
        <BtnView/>
      </div>
    </div>
  );
};

export default NewFlavorCard;
