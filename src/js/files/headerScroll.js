export default function headerScroll() {
  const headerF = document.querySelector(".header-f");
  const header = document.querySelector(".header")

  if (header) {
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > (header.clientHeight * 1.5)) {
        headerF.classList.add("_scroll");
      } else {
       headerF.classList.remove("_scroll");
      }

      lastScrollTop = scrollTop;
    });
  }
}
