export default function cardDescr() {
  const contents = document.querySelectorAll(".card-descr");

  if (contents.length) {
    contents.forEach((content) => {
      const lineHeight = +window
        .getComputedStyle(content)
        .lineHeight.slice(0, 2);
      const rows = 4;
      const btn = content.nextElementSibling;

      if (content.clientHeight <= lineHeight * rows) {
        btn.remove();
      } else {
        content.classList.add("_hide");
      }

      btn.addEventListener("click", () => {
        content.classList.remove("_hide");
        btn.remove()
      });
    });
  }
}
