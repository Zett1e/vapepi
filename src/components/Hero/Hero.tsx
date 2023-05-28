"use client";

import React from "react";
import HeroSlide from "./HeroSlide";
import Carousel from "react-material-ui-carousel";
import SliderIcon from "./SliderIcon";

const Hero = () => {
  const slideImgs = [
    "hero1",
    "hero2",
    "hero3",
    "hero4",
    "hero5",
    "hero6",
    "hero7",
  ];
  return (
    <div>
      <Carousel
        navButtonsAlwaysVisible
        NextIcon={<SliderIcon direction="next" />}
        PrevIcon={<SliderIcon direction="prev" />}
      >
        {slideImgs.map((img, index) => (
          <HeroSlide key={index} img={img} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
