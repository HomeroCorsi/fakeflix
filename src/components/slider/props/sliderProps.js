import { Navigation, Pagination } from "swiper";

export const sliderProps = {
  slidesPerView: 4,
  slidesPerGroup: 4,
  grabCursor: true,
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1025: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
  // scrollbar: true,
  navigation: true,
//   pagination: {
//     clickable: true,
//   },
  modules: [Navigation, Pagination],
};