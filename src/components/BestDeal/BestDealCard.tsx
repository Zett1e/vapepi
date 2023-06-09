import Image from "next/image";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const BestDealCard = ({ img }: { img: string }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <div className="bg-gray-200 rounded-md relative w-40 h-40 pt-3">
        <Image
          src={`/images/bestDeals/${img}.png`}
          fill
          alt="best deal product"
        />
        <p className="bg-red-500 px-3 text-sm text-white absolute left-1/2 top-0 -translate-x-1/2">
          25% off
        </p>
      </div>
      <p className="font-medium">Refreshing Mint</p>
      <p className="font-medium">30,000MMK</p>
      <p className="line-through text-xs font-medium">30,000MMK</p>
      <div className="flex items-center justify-center gap-x-1 ">
        <StarIcon className="w-3 inline-block text-yellow-400" />
        <p className="inline-block text-sm text-yellow-400">600 Points</p>
      </div>
    </div>
  );
};

export default BestDealCard;
