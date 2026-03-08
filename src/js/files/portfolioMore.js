export default function portfolioMore() {
  const tabs = document.querySelectorAll(".s-portfolio [data-tab]");

  if (tabs.length) {
    tabs.forEach((tab) => {
      const count = 2;
      const btnMore = tab.querySelector(".s-portfolio__btn-more");
      const hideItems = Array.from(
        tab.querySelectorAll(".s-portfolio__item"),
      ).filter((item) => window.getComputedStyle(item).display === "none");

      if (hideItems.length <= 0) btnMore.remove();

      btnMore.addEventListener("click", () => {
        const hideItems = Array.from(
          tab.querySelectorAll(".s-portfolio__item"),
        ).filter((item) => window.getComputedStyle(item).display === "none");

        hideItems.splice(0, count).forEach((item) => {
          item.classList.add("_open");

          setTimeout(() => {
            item.classList.add("_show");
          });
        });

        if (hideItems.length <= 0) btnMore.remove();
      });
    });
  }
}
