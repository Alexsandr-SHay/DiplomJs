import modal from "./modules/modal";
import smoothScrolling from "./modules/smoothScrolling";
import slider from "./modules/slider";
import carouselServices from "./modules/carouselServices";
import accordeon from "./modules/accordeon";
import dataEntryForm from "./modules/dataEntryForm";
import sendForm from "./modules/sendForm";

modal();
smoothScrolling();
slider();
carouselServices();
accordeon();
dataEntryForm();
sendForm({
  formId: "form",
});
