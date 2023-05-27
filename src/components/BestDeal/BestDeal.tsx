import React from "react";
import BestDealCard from "./BestDealCard";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const BestDeal = () => {
  const bestDealImgs = [
    "bestDeal1",
    "bestDeal2",
    "bestDeal3",
    "bestDeal4",
    "bestDeal5",
    "bestDeal6",
  ];
  return (
    <div className="px-24 text-center mt-10">
      <h1 className="text-4xl font-bold">Best Deals</h1>
      <p className="font-semibold">Just For You</p>
      <div className="flex justify-between mt-5">
        {bestDealImgs.map((img, index) => (
          <BestDealCard key={index} img={img} />
        ))}
      </div>
      <button className="mt-5 bg-gray-200 px-10 py-2 rounded-full flex mx-auto items-center justify-center gap-x-1 hover:bg-gray-300">
        <p>View More</p> <ChevronRightIcon className="w-4" />
      </button>
    </div>
  );
};

export default BestDeal;
