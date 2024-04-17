var swiper = new Swiper(".topslide2", {
  spaceBetween: 20,
  direction: 'vertical',
  loop: "true",
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
});
var swiper2 = new Swiper(".topslide", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});