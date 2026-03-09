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

  const cardPortfolioSliders = document.querySelectorAll(
    ".card-portfolio__slider",
  );

  if (cardPortfolioSliders.length) {
    cardPortfolioSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 20,
        slidesPerView: 1,
        allowTouchMove: false,
        navigation: {
          prevEl: slider
            .closest(".card-portfolio")
            .querySelector(".slider-arrow._prev"),
          nextEl: slider
            .closest(".card-portfolio")
            .querySelector(".slider-arrow._next"),
        },
      });
    });
  }

  const portoflioSliders = document.querySelectorAll(".s-portfolio__slider");

  if (
    portoflioSliders.length &&
    window.matchMedia("(max-width: 991px)").matches
  ) {
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
        clickable: true,
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

  const staticSlider = document.querySelector(".s-static__slider");

  if (staticSlider) {
    const swiper = new Swiper(staticSlider, {
      speed: 900,
      spaceBetween: 25,
      slidesPerView: "auto",
      navigation: {
        prevEl: ".s-static .slider-arrow._prev",
        nextEl: ".s-static .slider-arrow._next",
      },
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".s-static .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }

  const portfolioGallerySlider = document.querySelector(
    ".s-portfolio__gallery-slider",
  );

  if (portfolioGallerySlider) {
    const swiper = new Swiper(portfolioGallerySlider, {
      speed: 900,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: ".s-portfolio__gallery-next",
      },
      pagination: {
        el: ".s-portfolio .slider-pagination",
        clickable: true,
      },
    });
  }

  const projectsSlider = document.querySelector(".s-projects__slider");

  if (projectsSlider) {
    const swiper = new Swiper(projectsSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".s-projects .slider-arrow._prev",
        nextEl: ".s-projects .slider-arrow._next",
      },
      pagination: {
        el: ".s-projects .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: "auto",
        },
      },
    });
  }

  const cardProductSliders = document.querySelectorAll(".card-product__slider");

  if (cardProductSliders.length) {
    cardProductSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        pagination: {
          el: slider.querySelector(".slider-pagination"),
          clickable: true,
        },
      });
    });
  }

  const cardAdditionSliders = document.querySelectorAll(
    ".card-addition__slider",
  );

  if (cardAdditionSliders.length) {
    cardAdditionSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 10,
        slidesPerView: "auto",
        pagination: {
          el: slider.querySelector(".slider-pagination"),
          clickable: true,
        },
      });
    });
  }

  const overviewSlider = document.querySelector(".s-overview__slider");

  if (overviewSlider) {
    const swiper = new Swiper(overviewSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000,
      },
      navigation: {
        prevEl: ".s-overview .slider-arrow._prev",
        nextEl: ".s-overview .slider-arrow._next",
      },
      pagination: {
        el: ".s-overview .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: "auto",
        },
      },
    });
  }

  const historySlide = document.querySelector(".s-history__slider");

  if (historySlide) {
    const thumbSwiper = new Swiper(".s-history__thumb-slider", {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        1366: {
          slidesPerView: "auto",
          spaceBetween: 20,
          direction: "vertical",
        },
      },
    });

    const swiper = new Swiper(historySlide, {
      speed: 900,
      spaceBetween: 30,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbSwiper,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        1680: {
          spaceBetween: 120,
          slidesPerView: 1,
        },
        992: {
          spaceBetween: 80,
          slidesPerView: 1,
        },
      },
    });
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".s-team .slider-arrow._next",
      },
      pagination: {
        el: ".s-team .slider-pagination",
        clickable: true,
      },
      breakpoints: {
        1540: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
        1200: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    });
  }
}
