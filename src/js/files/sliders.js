export default function sliders() {
  const servicesSlider = document.querySelector(".s-services__slider");

  if (servicesSlider && window.matchMedia("(max-width: 991px)").matches) {
    const swiper = new Swiper(servicesSlider, {
      speed: 900,
      spaceBetween: 5,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000
      },
      pagination: {
        el: ".s-services .slider-pagination",
        clickable: true,
      },
    });
  }

  const navSliders = document.querySelectorAll(".s-nav");

  if (navSliders.length) {
    navSliders.forEach(slider => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 5,
      })
    })
  }
}
