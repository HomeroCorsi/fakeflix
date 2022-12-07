import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardMyListTv from "../card/CardMyListTv";
import { sliderProps } from "./props/sliderProps";
// import { TvIdContext } from "../../context/TvIdContext";
// import { useContext } from "react";

const SliderMyListTv = ({ items }) => {

  // const {TvId, setTvId} = useContext(TvIdContext)

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