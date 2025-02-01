const smoothScrolling = () => {
  const smoothLinks = document.querySelectorAll("a[href^='#']");
  const scrollTopBtn = document.querySelector(".up");

  //Плавный скролл по ссылкам https://only-to-top.ru/blog/coding/2018-06-08-plavnyj-skroll-do-elementa.html

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

  // Кнопка перемещения на вверх сайта https://myrusakov.ru/js-scroll-to-top-of-web-page-p1.html
  window.onscroll = () => {
    toggleScrollTopBtn();
  };

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

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
export default smoothScrolling;
