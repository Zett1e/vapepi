import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const SliderBtn = ({
  direction,
  flavor,
}: {
  direction: string;
  flavor: boolean;
}) => {
  return (
    <>
      {direction === "next" ? (
        <div
          className={`button-next-slide slider-icon  backdrop-blur bg-[rgba(0,0,0,0.5)] rounded-md py-12 px-3 ${flavor? "md:!right-[-12%]" : ""}`}
        >
          <ArrowSmallRightIcon className="w-5" />
        </div>
      ) : (
        <div className={`button-prev-slide slider-icon  backdrop-blur bg-[rgba(0,0,0,0.5)] rounded-md py-12 px-3 ${flavor? "md:!left-[-12%]" : ""}`}>
          <ArrowSmallLeftIcon className="w-5" />
        </div>
      )}
    </>
  );
};

export default SliderBtn;
