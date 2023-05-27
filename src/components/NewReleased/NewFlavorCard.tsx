import Image from "next/image";
import React from "react";
import BtnView from "../BtnView";

const NewFlavorCard = ({ img }: { img: string }) => {
  return (
    <div className="flavor relative w-full h-44 text-white overflow-hidden rounded-md ">
      <Image src={`/images/flavors/${img}.jpg`} width={700} height={200} alt="new flavor"  />
      <div className="absolute top-1/2 -translate-y-1/2 right-20 z-20 space-y-3">
        <h1 className="text-4xl font-bold">Try New Flavor</h1>
        <p>Citrus Monster</p>
        <BtnView/>
      </div>
    </div>
  );
};

export default NewFlavorCard;
