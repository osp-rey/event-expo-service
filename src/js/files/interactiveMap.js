export default function interactiveMap() {
  const map = document.querySelector("#interactive-map");

  if (map) {
    const regions = map.querySelectorAll(".loc-btn");
    const popup = document.querySelector("#interactive-map-popup");
    const titlePopup = document.querySelector("#interactive-map-title");
    const listPopup = document.querySelector("#interactive-map-list");
    const btnClose = document.querySelector("#interactive-map-close");

    btnClose.addEventListener("click", () => {
      popup.classList.remove("_active");

      setTimeout(() => {
        handlerClear();
      }, 300);
    });

    regions.forEach((region) => {
      region.addEventListener("mouseover", () => {
        const currentName = map.querySelector(region.getAttribute("href"));
        if (currentName) {
          currentName.classList.add("_hover");
        }
      });
      region.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const dataItems = JSON.parse(region.dataset.items);
        const dataTitle = region.dataset.name;

        regions.forEach((r) => r.classList.remove("_active"));
        region.classList.add("_active");

        handlerOpen(dataTitle, dataItems);
      });

      region.addEventListener("mouseout", () => {
        const currentName = map.querySelector(region.getAttribute("href"));

        if (currentName) {
          currentName.classList.remove("_hover");
        }
      });
    });

    function handlerOpen(title, items) {
      let delay = 0;

      if (popup.classList.contains("_active")) {
        handlerClear();
        delay = 300;
      }

      setTimeout(() => {
        titlePopup.textContent = title;
        items.forEach((item) => {
          const li = document.createElement("li");

          li.innerHTML = `<span class="num text-linear">${item[0]}</span><span class="val">${item[1]}</span>`;
          listPopup.appendChild(li);
        });
        popup.classList.add("_active");
      }, delay);
    }

    function handlerClear() {
      titlePopup.classList.add("_hide");
      listPopup.classList.add("_hide");

      setTimeout(() => {
        listPopup.innerHTML = "";
        titlePopup.textContent = "";
      }, 100);

      setTimeout(() => {
        titlePopup.classList.remove("_hide");
        listPopup.classList.remove("_hide");
      }, 400);
    }
  }
}
