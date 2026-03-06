import { slideDown, slideUp } from "./help-functions.js";

export default function headerScroll() {
  const headerTop = document.querySelector(".header__top");

  if (headerTop) {
    const header = document.querySelector(".header");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (window.matchMedia("(max-width: 991px)").matches) return;

      if (scrollTop > headerTop.clientHeight) {
        header.classList.add("_scroll");
        if (!headerTop.hasAttribute("hidden")) {
          slideUp(headerTop);
        }
      } else {
        header.classList.remove("_scroll");
        if (headerTop.hasAttribute("hidden")) {
          slideDown(headerTop);
        }
      }

      lastScrollTop = scrollTop;
    });
  }
}
