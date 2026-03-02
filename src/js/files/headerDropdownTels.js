export default function headerDropdownTels() {
  const btn = document.querySelector(".header__tel-btn");

  if (btn && window.matchMedia("(max-width: 991px)").matches) {
    const item = document.querySelector(".header__tels-grid");

    item.addEventListener("click", (e) => e.stopPropagation());

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      item.classList.toggle("_active");
    });

    document.addEventListener("click", () => {
      item.classList.remove("_active");
    });
  }
}
