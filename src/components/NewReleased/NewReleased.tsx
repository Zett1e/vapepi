"use client";

import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import NewFlavorCard from "./NewFlavorCard";
import NewReleasedCard from "./NewReleasedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SliderBtn from "../SliderBtn";

const NewReleased = () => {
  const newReleasedImgs = ["new1", "new2", "new3", "new4"];
  const newFlavorImgs = ["newFlavor1", "newFlavor2"];
  return (
    <div className="text-center mt-10">
      <div className="md:px-40 px-5">
        <h1 className="text-5xl font-bold">
          <span className="text-red-500">New</span> Released
        </h1>
        <p className="font-semibold">Try Our Latest Flavors Here</p>
        <div className="flex md:justify-between justify-center gap-y-3 flex-wrap mt-5">
          {newReleasedImgs.map((img, index) => (
            <NewReleasedCard key={index} img={img} />
          ))}
        </div>
        <button className="mt-5 bg-gray-200 px-20 py-2 rounded-full flex mx-auto items-center justify-center gap-x-1 hover:bg-gray-300">
          <p>View More</p> <ChevronRightIcon className="w-4" />
        </button>
      </div>
      <div className="mt-10 md:pl-40 pl-5 w-[88%] text-white">
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          className="mySwiper relative"
        >
          {newFlavorImgs.map((img, index) => (
            <SwiperSlide key={index}>
              <NewFlavorCard key={index} img={img} />
            </SwiperSlide>
          ))}
          <SliderBtn direction="next" flavor={true}  />
          <SliderBtn direction="prev" flavor={true} />
        </Swiper>
      </div>
    </div>
  );
};

export default NewReleased;
