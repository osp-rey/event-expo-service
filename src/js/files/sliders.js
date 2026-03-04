export default function sliders() {
  const servicesSlider = document.querySelector(".s-services__slider");

  if (servicesSlider && window.matchMedia("(max-width: 991px)").matches) {
    const swiper = new Swiper(servicesSlider, {
      speed: 900,
      spaceBetween: 5,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".s-services .slider-pagination",
        clickable: true,
      },
    });
  }

  const navSliders = document.querySelectorAll(".s-nav");

  if (navSliders.length) {
    navSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: "auto",
        spaceBetween: 5,
      });
    });
  }

  const portfolioItemSliders = document.querySelectorAll(
    ".s-portfolio__item-slider",
  );

  if (portfolioItemSliders.length) {
    portfolioItemSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 20,
        allowTouchMove: false,
        navigation: {
          prevEl: slider
            .closest(".s-portfolio__item")
            .querySelector(".slider-arrow._prev"),
          nextEl: slider
            .closest(".s-portfolio__item")
            .querySelector(".slider-arrow._next"),
        },
        breakpoints: {
          992: {
            allowTouchMove: true,
          },
        },
      });
    });
  }

  const portoflioSliders = document.querySelectorAll(".s-portfolio__slider");

  if (portoflioSliders.length) {
    portoflioSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
          el: slider.closest("[data-tab]").querySelector(".slider-pagination"),
          clickable: true,
        },
      });
    });
  }
}
