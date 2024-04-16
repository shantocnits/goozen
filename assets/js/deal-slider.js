var swiper = new Swiper(".myslide2", {
  spaceBetween: 20,

  direction: 'vertical',
 loop: "true",
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".myslide", {

  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});