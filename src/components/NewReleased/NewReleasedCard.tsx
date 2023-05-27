import Image from "next/image";
import React from "react";

const NewReleasedCard = ({ img }: { img: string }) => {
  return (
    <div className="relative w-[250px] h-44 rounded-md overflow-hidden">
      <Image src={`/images/newReleased/${img}.webp`} fill alt="New Released" />
      <div className="absolute left-3 bottom-3 text-white text-start w-1/2 text-sm">
        <p className="font-semibold">Strawberry Yogurt with Refreshing Flavor Nic 3 Percent</p>
        <p>30,000 MMK</p>
      </div>
    </div>
  );
};

export default NewReleasedCard;
