var swiper = new Swiper(".review", {
  slidesPerView: 1,
  spaceBetween: 110,
  sliderPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  },
});