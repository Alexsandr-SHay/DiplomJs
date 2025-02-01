import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const carouselServices = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
export default carouselServices;
