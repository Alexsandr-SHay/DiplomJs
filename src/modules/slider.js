const slider = () => {
  const allBlock = document.querySelector(".top-slider");
  const collectionSliders = document.querySelectorAll(".item");
  const dots = document.querySelectorAll(".dot");
  let cuurentSlide = 0;
  let interval;

  const autoSlide = () => {
    collectionSliders[cuurentSlide].style.display = "none";
    dots[cuurentSlide].classList.remove("dot-active");
    cuurentSlide++;
    if (cuurentSlide >= collectionSliders.length) {
      cuurentSlide = 0;
    }
    collectionSliders[cuurentSlide].style.display = "block";
    dots[cuurentSlide].classList.add("dot-active");
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, 3000);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  allBlock.addEventListener("click", (e) => {
    collectionSliders[cuurentSlide].style.display = "none";
    dots[cuurentSlide].classList.remove("dot-active");

    e.preventDefault();
    if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          cuurentSlide = index;
        }
      });
    }

    collectionSliders[cuurentSlide].style.display = "block";
    dots[cuurentSlide].classList.add("dot-active");
  });

  allBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot")) {
        stopSlide();
      }
    },
    true
  );

  allBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot")) {
        startSlide();
      }
    },
    true
  );

  startSlide();
};
export default slider;
