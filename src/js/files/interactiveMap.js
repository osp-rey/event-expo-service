export default function interactiveMap() {
  const map = document.querySelector("#interactive-map");

  if (map) {
    const regions = map.querySelectorAll(".loc-btn");

    regions.forEach(region => {
      console.log(region)
      region.addEventListener("mouseover", () => {
        const currentName = map.querySelector(region.getAttribute("href"));

        if (currentName) {
          currentName.classList.add("_hover");
        }
      })
      region.addEventListener("mouseout", () => {
        const currentName = map.querySelector(region.getAttribute("href"));

        if (currentName) {
          currentName.classList.remove("_hover");
        }
      })
    })
  }
}
