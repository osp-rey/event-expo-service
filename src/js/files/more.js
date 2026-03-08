export default function more() {
  const containers = document.querySelectorAll(".container-more");

  if (containers.length) {
    containers.forEach((container) => {
      const btn = container.querySelector("[data-more-btn]");
      const count = +container.dataset.countShow;
      const hideItems = Array.from(
        container.querySelectorAll("[data-more-item]")
      ).filter((item) => window.getComputedStyle(item).display === "none");

      if (hideItems.length === 0) btn.remove();

      btn.addEventListener("click", () => {
        const items = container.querySelectorAll("[data-more-item]");
        const hideItems = Array.from(items).filter(
          (item) => window.getComputedStyle(item).display === "none"
        );

        hideItems.splice(0, count).forEach((item) => {
          item.classList.add("_active")

          setTimeout(() => {
            item.classList.add("_show")
          });
        });

        if (hideItems.length <= 0) btn.remove();
      });
    });
  }
}