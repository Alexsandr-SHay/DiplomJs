const dataEntryForm = () => {
  const formName = document.querySelectorAll(".form-name");
  const formPhone = document.querySelectorAll(".tel");

  formName.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^А-Яа-я- ]/, "");
    });

    e.addEventListener("blur", (event) => {
      event.target.value = editingLine(event.target.value);
      event.target.value = event.target.value
        .toLowerCase()
        .replace(/(?<!\p{Lowercase})\p{Lowercase}/gu, (ch) => ch.toUpperCase());
    });
  });

  formPhone.forEach((e) => {
    e.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^0-9()+-]/, "");
    });

    e.addEventListener("blur", (event) => {
      event.target.value = editingLine(event.target.value);
    });
  });

  const editingLine = (value) => {
    value = value.replace(/^[\s\-]+/g, "");
    value = value.replace(/[\s\-]+$/g, "");
    value = value.replace(/\s{2,}/g, " ");
    value = value.replace(/\-{2,}/g, "-");
    return value;
  };
};

export default dataEntryForm;
