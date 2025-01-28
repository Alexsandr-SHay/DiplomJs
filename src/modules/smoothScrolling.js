const smoothScrolling = () => {
  const smoothLinks = document.querySelectorAll("a[href^='#']");

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

  // Получаем кнопку по ID
  const scrollTopBtn = document.querySelector(".up");
  console.log(scrollTopBtn);

  // Добавляем событие на прокрутку окна
  window.onscroll = () => {
    toggleScrollTopBtn();
  };

  // Функция для отображения или скрытия кнопки
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

  // Добавляем обработчик события для плавной прокрутки наверх
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавная прокрутка
    });
  });
};
export default smoothScrolling;
