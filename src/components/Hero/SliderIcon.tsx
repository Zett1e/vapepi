import React from "react";
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

const SliderIcon = ({ direction }: { direction: string }) => {
  return (
    <div className="slider-icon backdrop-blur bg-[rgba(0,0,0,0.5)] rounded-md py-12 px-3">
      {direction === "next" ? (
        <ArrowSmallRightIcon className="w-5" />
      ) : (
        <ArrowSmallLeftIcon className="w-5" />
      )}
    </div>
  );
};

export default SliderIcon;
