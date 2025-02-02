const accordeon = () => {
  const elementsContent = document
    .querySelector(".accordeon")
    .querySelectorAll(".element-content");
  const titleAccordeon = document
    .querySelector(".accordeon")
    .querySelectorAll(".title");

  titleAccordeon.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      titleAccordeon.forEach((element) => {
        element.parentNode.classList.remove("active");
      });
      e.target.parentNode.classList.add("active");

      elementsContent.forEach((element) => {
        element.style.display = "none";
      });
      elementsContent[index].style.display = "block";
    });
  });
};
export default accordeon;
