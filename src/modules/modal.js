import { animate } from "./helpers";

const modal = () => {
  const modalWindows = document.querySelector(".modal-callback");
  const modalBackground = document.querySelector(".modal-overlay");
  const blockModal = document.querySelectorAll(".fancyboxModal");

  const modalDisplay = (value) => {
    if (value) {
      modalWindows.style.display = "block";
      modalBackground.style.display = "block";
    } else {
      modalWindows.style.display = "none";
      modalBackground.style.display = "none";
    }
  };

  blockModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalDisplay(true);
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modalWindows.style.opacity = progress;
        },
      });
    });
  });

  modalBackground.addEventListener("click", (e) => {
    if (!e.target.closest(".modal-callback")) {
      modalDisplay(false);
    }
  });

  modalWindows.addEventListener("click", (e) => {
    if (e.target.closest(".modal-close")) {
      modalDisplay(false);
    }
  });
};
export default modal;
