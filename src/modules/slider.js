const slider = () => {
  const topSlider = document.querySelectorAll(".top-slider");
  const itemRelative = document.querySelectorAll(".item");
  const text = document.querySelector(".text");
  const title = document.querySelector("h1");

  itemRelative[0].style.display = "block";
  itemRelative[0].style.height = "600px";
  itemRelative[2].style.display = "none";
  itemRelative[1].style.display = "none";

  setTimeout(() => {
    itemRelative[0].style.display = "none";
    itemRelative[1].style.display = "block";
    itemRelative[1].style.height = "600px";
  }, 1000);

  setTimeout(() => {
    itemRelative[1].style.display = "none";
    itemRelative[2].style.display = "block";
    itemRelative[2].style.height = "600px";
  }, 2000);

  //   itemRelative[0].classList.remove("relative");
  //   itemRelative[0].classList.remove("item");
  //   itemRelative[0].style.background = "none";
  //   itemRelative[0].style.height = "1px";
  //   itemRelative[1].style.height = "100px";
  //   title.style.position = "absolute";
  //   title.style.opacity = 0;
};
export default slider;
