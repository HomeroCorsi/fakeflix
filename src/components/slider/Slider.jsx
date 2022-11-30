import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card";
import { sliderProps } from "./props/sliderProps";

const Slider = ({ items }) => {
  return (
    <>
      <Swiper {...sliderProps} className="mySwiper">
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;