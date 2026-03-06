(() => {
    "use strict";
    function burger() {
        const burger = document.querySelector("#burger");
        if (burger) {
            const btnToggle = document.querySelector("#burger-toggle");
            document.body.addEventListener("click", handleClose);
            burger.addEventListener("click", e => {
                if (!e.target.hasAttribute("data-fancybox")) e.stopPropagation();
            });
            btnToggle.addEventListener("click", e => {
                e.stopPropagation();
                if (burger.classList.contains("_open")) handleClose(); else handleOpen();
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
    function headerDropdownTels() {
        const btn = document.querySelector(".header__tel-btn");
        if (btn && window.matchMedia("(max-width: 991px)").matches) {
            const item = document.querySelector(".header__tels-grid");
            item.addEventListener("click", e => e.stopPropagation());
            btn.addEventListener("click", e => {
                e.stopPropagation();
                item.classList.toggle("_active");
            });
            document.addEventListener("click", () => {
                item.classList.remove("_active");
            });
        }
    }
    function slideUp(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout(() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function slideDown(target, duration = 500, showmore = 0) {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout(() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }, duration);
        }
    }
    function headerScroll() {
        const headerTop = document.querySelector(".header__top");
        if (headerTop) {
            const header = document.querySelector(".header");
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (window.matchMedia("(max-width: 991px)").matches) return;
                if (scrollTop > headerTop.clientHeight) {
                    header.classList.add("_scroll");
                    if (!headerTop.hasAttribute("hidden")) slideUp(headerTop);
                } else {
                    header.classList.remove("_scroll");
                    if (headerTop.hasAttribute("hidden")) slideDown(headerTop);
                }
                lastScrollTop = scrollTop;
            });
        }
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function interactiveMap() {
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
            regions.forEach(region => {
                region.addEventListener("mouseover", () => {
                    const currentName = map.querySelector(region.getAttribute("href"));
                    if (currentName) currentName.classList.add("_hover");
                });
                region.addEventListener("click", e => {
                    e.preventDefault();
                    e.stopPropagation();
                    const dataItems = JSON.parse(region.dataset.items);
                    const dataTitle = region.dataset.name;
                    regions.forEach(r => r.classList.remove("_active"));
                    region.classList.add("_active");
                    handlerOpen(dataTitle, dataItems);
                });
                region.addEventListener("mouseout", () => {
                    const currentName = map.querySelector(region.getAttribute("href"));
                    if (currentName) currentName.classList.remove("_hover");
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
                    items.forEach(item => {
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
    function portfolioMore() {
        const tabs = document.querySelectorAll(".s-portfolio [data-tab]");
        if (tabs.length) tabs.forEach(tab => {
            const count = 2;
            const btnMore = tab.querySelector(".s-portfolio__btn-more");
            const hideItems = Array.from(tab.querySelectorAll(".s-portfolio__item")).filter(item => window.getComputedStyle(item).display === "none");
            if (hideItems.length === 0) btnMore.remove();
            btnMore.addEventListener("click", () => {
                const hideItems = Array.from(tab.querySelectorAll(".s-portfolio__item")).filter(item => window.getComputedStyle(item).display === "none");
                hideItems.splice(0, count).forEach(item => {
                    item.classList.add("_open");
                    setTimeout(() => {
                        item.classList.add("_show");
                    });
                });
                if (hideItems.length <= 0) btnMore.remove();
            });
        });
    }
    function sliders() {
        const servicesSlider = document.querySelector(".s-services__slider");
        if (servicesSlider && window.matchMedia("(max-width: 991px)").matches) {
            new Swiper(servicesSlider, {
                speed: 900,
                spaceBetween: 5,
                slidesPerView: "auto",
                autoplay: {
                    delay: 4e3
                },
                pagination: {
                    el: ".s-services .slider-pagination",
                    clickable: true
                }
            });
        }
        const navSliders = document.querySelectorAll(".s-nav");
        if (navSliders.length) navSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                slidesPerView: "auto",
                spaceBetween: 5
            });
        });
        const portfolioItemSliders = document.querySelectorAll(".s-portfolio__item-slider");
        if (portfolioItemSliders.length) portfolioItemSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                spaceBetween: 20,
                allowTouchMove: false,
                navigation: {
                    prevEl: slider.closest(".s-portfolio__item").querySelector(".slider-arrow._prev"),
                    nextEl: slider.closest(".s-portfolio__item").querySelector(".slider-arrow._next")
                },
                breakpoints: {
                    992: {
                        allowTouchMove: true
                    }
                }
            });
        });
        const portoflioSliders = document.querySelectorAll(".s-portfolio__slider");
        if (portoflioSliders.length) portoflioSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                pagination: {
                    el: slider.closest("[data-tab]").querySelector(".slider-pagination"),
                    clickable: true
                }
            });
        });
        const partnersSlider = document.querySelector(".s-partners__slider");
        if (partnersSlider) {
            new Swiper(partnersSlider, {
                slidesPerView: "auto",
                spaceBetween: 20,
                speed: 12e3,
                watchOverflow: true,
                loop: true,
                allowTouchMove: false,
                watchSlidesProgress: true,
                centeredSlides: true,
                a11y: false,
                autoplay: {
                    delay: 0
                }
            });
        }
        const eventSliders = document.querySelectorAll(".s-events__slider");
        if (eventSliders.length) eventSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                spaceBetween: 20,
                slidesPerView: "auto",
                navigation: {
                    nextEl: slider.closest("[data-tab]").querySelector(".s-events__slider-next")
                },
                pagination: {
                    el: slider.closest("[data-tab]").querySelector(".slider-pagination"),
                    clickable: true
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                    992: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    }
                },
                on: {
                    touchStart: function(swiper, event) {
                        const isProductSlider = event.target.closest(".card-event__slider");
                        if (isProductSlider) swiper.allowTouchMove = false;
                    },
                    touchEnd: function(swiper) {
                        swiper.allowTouchMove = true;
                    }
                }
            });
        });
        const cardEventSliders = document.querySelectorAll(".card-event__slider");
        if (cardEventSliders.length) cardEventSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 900,
                slidesPerView: 1,
                spaceBetween: 15,
                navigation: {
                    prevEl: slider.querySelector(".slider-arrow._prev"),
                    nextEl: slider.querySelector(".slider-arrow._next")
                }
            });
        });
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tab() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelector(".tabs-nav").querySelectorAll("[data-tab-btn]");
                const allTabs = Array.from(container.querySelector(".tabs-content").children).filter(child => child.hasAttribute("data-tab"));
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_show");
                    t.classList.remove("_active");
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.classList.add("_show");
                }, 150);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
    }
    function videoBg() {
        const players = document.querySelectorAll(".video-bg");
        if (players.length) players.forEach(player => {
            const video = player.querySelector(".video");
            video.src = video.dataset.src;
        });
    }
    function videoPlayer() {
        const players = document.querySelectorAll(".video-player");
        if (players.length) players.forEach(player => {
            const video = player.querySelector(".video");
            const btnPlay = player.querySelector(".btn-play");
            player.addEventListener("click", () => {
                if (player.classList.contains("_active")) {
                    player.classList.remove("_active");
                    video.pause();
                    if (btnPlay) btnPlay.classList.remove("_active");
                } else {
                    player.classList.add("_active");
                    if (!video.src) video.src = video.dataset.src;
                    video.play();
                    if (btnPlay) btnPlay.classList.add("_active");
                }
            });
            video.addEventListener("ended", () => {
                player.classList.remove("_active");
                video.pause();
                if (btnPlay) btnPlay.classList.remove("_active");
            });
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        spoller();
        headerDropdownTels();
        burger();
        videoBg();
        sliders();
        portfolioMore();
        tab();
        videoPlayer();
        interactiveMap();
        inputmask();
        headerScroll();
        AOS.init();
        Fancybox.bind("[data-fancybox]", {
            closeButton: false
        });
    });
})();