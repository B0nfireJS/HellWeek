import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  slidesPerView: "auto",
  spaceBetween: -20,
  centeredSlides: true,
  speed: 600,
  // centeredSlidesBounds: true
  breakpoints: {
    320:{
      slidesPerView: "1.2",
      spaceBetween: -5,
    },
    992:{
      slidesPerView: "auto",
      spaceBetween: -20,
    }
  }
});