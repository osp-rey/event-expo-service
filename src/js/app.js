import "../scss/style.scss";
import burger from "./files/burger.js";
import headerDropdownTels from "./files/headerDropdownTels.js";
import interactiveMap from "./files/interactiveMap.js";
import portfolioMore from "./files/portfolioMore.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import tab from "./files/tab.js";
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

  AOS.init();
  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
  });
});
