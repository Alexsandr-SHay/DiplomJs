const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = "";
    statusBlock.classList.add("sk-plane");
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.style.color = "black";
        statusBlock.textContent = successText;
        statusBlock.classList.remove("sk-plane");
        setTimeout(() => {
          statusBlock.textContent = "";
        }, 5000);
        formElements.forEach((input) => {
          input.value = "";
        });
      })
      .catch((error) => {
        statusBlock.classList.remove("sk-plane");
        statusBlock.textContent = errorText;
        setTimeout(() => {
          statusBlock.textContent = "";
        }, 5000);
      });
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место пожалуйста!!))");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
