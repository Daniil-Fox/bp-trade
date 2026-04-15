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
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
new Swiper(".work__slider", {
  slidesPerView: 3.2,
  spaceBetween: 40,
  navigation: {
    prevEl: ".work-prev",
    nextEl: ".work-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
  },
});
new Swiper(".testi__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    577: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
