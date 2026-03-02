export default function burger() {
  const burger = document.querySelector("#burger");

  if (burger) {
    const btnToggle = document.querySelector("#burger-toggle");

    document.body.addEventListener("click", handleClose);

    burger.addEventListener("click", (e) => {
      if (!e.target.hasAttribute("data-fancybox")) e.stopPropagation();
    });
    btnToggle.addEventListener("click", (e) => {
      e.stopPropagation();

      if (burger.classList.contains("_open")) {
        handleClose();
      } else {
        handleOpen();
      }
    });

    function handleOpen() {
      document.body.classList.add("body-hidden");
      burger.classList.add("_open");
      btnToggle.classList.add("_active");
    }
    function handleClose() {
      document.body.classList.remove("body-hidden");
      burger.classList.remove("_open");
      btnToggle.classList.remove("_active");
    }
  }
}
