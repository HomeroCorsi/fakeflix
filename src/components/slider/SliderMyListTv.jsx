import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import CardMyListMovies from "../card/CardMyListMovies";
import { sliderProps } from "./props/sliderProps";

const SliderMyListTv = ({ items }) => {
  return (
    <>
      <Swiper {...sliderProps} className="mySwiper">
        {items.map((item) => {
          return (
            <SwiperSlide key={item}>
              <CardMyListTv item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SliderMyListTv;