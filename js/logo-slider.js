var swiper = new Swiper(".footer-slider", {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
});
