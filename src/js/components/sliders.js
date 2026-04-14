import Swiper from "swiper";
import { Navigation } from "swiper/modules";
Swiper.use([Navigation]);
new Swiper(".services__slider", {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    prevEl: ".services-prev",
    nextEl: ".services-next",
  },
});
new Swiper(".work__slider", {
  slidesPerView: 3.2,
  spaceBetween: 40,
  navigation: {
    prevEl: ".work-prev",
    nextEl: ".work-next",
  },
});
new Swiper(".testi__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
});
