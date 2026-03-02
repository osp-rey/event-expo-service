import "../scss/style.scss";
import burger from "./files/burger.js";
import headerDropdownTels from "./files/headerDropdownTels.js";
import spoller from "./files/spoller.js";
import videoBg from "./files/videoBg.js";

document.addEventListener("DOMContentLoaded", () => {
  spoller();
  headerDropdownTels();
  burger();
  videoBg();

  AOS.init();
  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
  });
});
