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
import SliderBtn from "../SliderBtn";
import { useMediaQuery } from "@mui/material";

interface Product {
  img: string;
  text: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const mobile = useMediaQuery('(max-width:767px)');
  return (
    <div className="product select-none text-white relative w-full h-72 bg-zinc-800 rounded-md overflow-hidden">
      <Image className="md:object-contain object-fill md:object-left object-right" src={`/images/products/${product.img}`} fill alt="product" />
      <div className="absolute overflow-hidden md:w-[44rem] w-full top-5 md:right-5 right-0 z-30 ">
        <Swiper
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          // navigation
          modules={[Navigation]}
          slidesPerView={mobile ? 1 : 4}
          spaceBetween={10}
          className="mySwiper relative"
        >
          {bestDealImgs.map((img, index) => (
            <SwiperSlide key={index}>
              <BestDealCard img={img} />
            </SwiperSlide>
          ))}
          <SliderBtn direction='next' flavor={false} />
          <SliderBtn direction='prev' flavor={false} />
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCard;
