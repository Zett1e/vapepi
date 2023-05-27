"use client"

import Image from "next/image";
import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderIcon from "../Hero/SliderIcon";
import { bestDealImgs } from "../BestDeal/BestDeal";
import BestDealCard from "../BestDeal/BestDealCard";

interface Product {
  img: string;
  text: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product relative w-full h-52 bg-zinc-800 rounded-md overflow-hidden">
      <Image src={`/images/products/${product.img}`} fill alt="product" />
      <div className="absolute top-5 left-20 z-30 w-full">
        <Carousel
          navButtonsAlwaysVisible
          animation="slide"
          cycleNavigation={false}
          indicators={false}
          autoPlay={false}
          NextIcon={<SliderIcon direction="next" />}
          PrevIcon={<SliderIcon direction="prev" />}
        >
          {bestDealImgs.map((img, index) => (
            <BestDealCard key={index} img={img} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCard;
