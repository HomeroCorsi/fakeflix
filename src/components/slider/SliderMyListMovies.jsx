import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMyListMovies from "../card/CardMyListMovies";
import { sliderProps } from "./props/sliderProps";

const SliderMyListMovies = ({ items }) => {
  return (
    <>
      <Swiper {...sliderProps} className="mySwiper">
        {items.map((item) => {
          return (
            <SwiperSlide key={item}>
              <CardMyListMovies item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderMyListMovies;