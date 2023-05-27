"use client"

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderIcon from "../Hero/SliderIcon";
import NewFlavorCard from "./NewFlavorCard";
import NewReleasedCard from "./NewReleasedCard";

const NewReleased = () => {
  const newReleasedImgs = ["new1", "new2", "new3", "new4"];
  const newFlavorImgs = ["newFlavor1", "newFlavor2"];
  return (
    <div className="text-center px-40 mt-10">
      <h1 className="text-5xl font-bold">
        <span className="text-red-500">New</span> Released
      </h1>
      <p className="font-semibold">Try Our Latest Flavors Here</p>
      <div className="flex justify-between mt-5">
        {newReleasedImgs.map((img, index) => (
          <NewReleasedCard key={index} img={img} />
        ))}
      </div>
      <button className="mt-5 bg-gray-200 px-20 py-2 rounded-full flex mx-auto items-center justify-center gap-x-1 hover:bg-gray-300">
        <p>View More</p> <ChevronRightIcon className="w-4" />
      </button>
      <div className="mt-10">
        <Carousel
          navButtonsAlwaysVisible
          animation="slide"
          cycleNavigation={false}
          indicators={false}
          autoPlay={false}
          NextIcon={<SliderIcon direction="next" />}
          PrevIcon={<SliderIcon direction="prev" />}
        >
          {newFlavorImgs.map((img, index) => (
            <NewFlavorCard key={index} img={img} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NewReleased;
