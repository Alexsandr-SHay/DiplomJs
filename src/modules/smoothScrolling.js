const smoothScrolling = () => {
  const smoothLinks = document.querySelectorAll("a[href^='#']");
  const scrollTopBtn = document.querySelector(".up");

  const toggleScrollTopBtn = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", (e) => {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  window.onscroll = () => {
    toggleScrollTopBtn();
  };

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
export default smoothScrolling;
