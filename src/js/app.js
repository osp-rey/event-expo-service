import "../scss/style.scss";
import burger from "./files/burger.js";
import buttonsNote from "./files/buttonsNote.js";
import cardDescr from "./files/cardDescr.js";
import headerDropdownTels from "./files/headerDropdownTels.js";
import inputmask from "./files/inputmask.js";
import interactiveMap from "./files/interactiveMap.js";
import map from "./files/map.js";
import more from "./files/more.js";
import portfolioMore from "./files/portfolioMore.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tab from "./files/tab.js";
import textToggle from "./files/textToggle.js";
import videoBg from "./files/videoBg.js";
import videoPlayer from "./files/videoPlayer.js";

document.addEventListener("DOMContentLoaded", () => {
  spoller();
  headerDropdownTels();
  burger();
  videoBg();
  sliders();
  portfolioMore();
  tab();
  videoPlayer();
  interactiveMap();
  inputmask();
  map();
  more();
  buttonsNote();
  cardDescr();
  textToggle();

  AOS.init();
  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
  });

  // Fancybox.show([{ src: "#modal-feedback", type: "inline" }], {
  //   closeButton: false,
  // });
});
