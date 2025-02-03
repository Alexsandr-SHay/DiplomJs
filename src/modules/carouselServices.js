import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const carouselServices = () => {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },

    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
  });
};
export default carouselServices;
