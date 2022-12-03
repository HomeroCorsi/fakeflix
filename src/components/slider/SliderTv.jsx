import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardTv from "../card/CardTv";
import { sliderProps } from "./props/sliderProps";

const SliderTv = ({ items }) => {
  return (
    <>
      <Swiper {...sliderProps} className="mySwiper">
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CardTv item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderTv;