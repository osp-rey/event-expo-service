export default function textToggle() {
  const buttons = document.querySelectorAll("[data-btn-text-toggle]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      const text = document.querySelector(
        `[data-text-toggle="${btn.dataset.btnTextToggle}"]`,
      );
      const lineHeight = +window.getComputedStyle(text).lineHeight.slice(0, 2);
      const rows = +text.dataset.rows;

      if (text.clientHeight <= lineHeight * rows) {
        btn.remove();
      } else {
        text.classList.add("_hide");
      }

      btn.addEventListener("click", () => {
        text.classList.remove("_hide");
        btn.remove();
      });
    });
  }
}
