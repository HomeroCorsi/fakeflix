import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMovies from "../card/CardMovies";
import { sliderProps } from "./props/sliderProps";

const SliderMovies = ({ items }) => {
  return (
    <>
      <Swiper {...sliderProps} className="mySwiper">
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CardMovies item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderMovies;