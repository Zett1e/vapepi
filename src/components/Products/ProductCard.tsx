"use client";

import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderIcon from "../Hero/SliderIcon";
import { bestDealImgs } from "../BestDeal/BestDeal";
import BestDealCard from "../BestDeal/BestDealCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/solid";

interface Product {
  img: string;
  text: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product select-none text-white relative w-full h-72 bg-zinc-800 rounded-md overflow-hidden">
      <Image src={`/images/products/${product.img}`} fill alt="product" />
      <div className="absolute w-[44rem] top-5 right-5 z-30 ">
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          // navigation
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={10}
          className="mySwiper relative"
        >
          {bestDealImgs.map((img, index) => (
            <SwiperSlide key={index}>
              <BestDealCard img={img} />
            </SwiperSlide>
          ))}
          <div className="button-next-slide slider-icon  backdrop-blur bg-[rgba(0,0,0,0.5)] rounded-md py-12 px-3">
            <ArrowSmallRightIcon className="w-5" />
          </div>
          <div className="button-prev-slide slider-icon  backdrop-blur bg-[rgba(0,0,0,0.5)] rounded-md py-12 px-3">
            <ArrowSmallLeftIcon className="w-5" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCard;
