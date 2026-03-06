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

  const partnersSlider = document.querySelector(".s-partners__slider");

  if (partnersSlider) {
    const swiper = new Swiper(partnersSlider, {
      slidesPerView: "auto",
      spaceBetween: 20,
      speed: 12000,
      watchOverflow: true,
      loop: true,
      allowTouchMove: false,
      watchSlidesProgress: true,
      centeredSlides: true,
      a11y: false,
      autoplay: {
        delay: 0,
      },
    });
  }

  const eventSliders = document.querySelectorAll(".s-events__slider");

  if (eventSliders.length) {
    eventSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 20,
        slidesPerView: "auto",
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: slider
            .closest("[data-tab]")
            .querySelector(".s-events__slider-next"),
        },
        pagination: {
          el: slider.closest("[data-tab]").querySelector(".slider-pagination"),
          clickable: true,
        },
        breakpoints: {
          1200: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
        },
        on: {
          touchStart: function (swiper, event) {
            const isProductSlider = event.target.closest(".card-event__slider");
            if (isProductSlider) {
              swiper.allowTouchMove = false;
            }
          },
          touchEnd: function (swiper) {
            swiper.allowTouchMove = true;
          },
        },
      });
    });
  }

  const cardEventSliders = document.querySelectorAll(".card-event__slider");

  if (cardEventSliders.length) {
    cardEventSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
          prevEl: slider.querySelector(".slider-arrow._prev"),
          nextEl: slider.querySelector(".slider-arrow._next"),
        },
      });
    });
  }

  const sliderBlog = document.querySelector(".s-blog__slider");

  if (sliderBlog) {
    const swiper = new Swiper(sliderBlog, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 10,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".s-blog .slider-arrow._prev",
        nextEl: ".s-blog .slider-arrow._next",
      },
      pagination: {
        el: ".s-blog .slider-pagination",
        clickable: true
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        576: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      },
    });
  }
}
