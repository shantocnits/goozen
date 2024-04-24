var swiper = new Swiper(".topslide2", {
  spaceBetween: 20,
  direction: 'vertical',
  loop: "true",
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".top-rated-next",
  },
});
var swiper2 = new Swiper(".topslide", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

// toip selling slider
var swiper = new Swiper(".sellingslide2", {
  spaceBetween: 20,
  direction: 'vertical',
  loop: "true",
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".top-selling-next",
  },
});
var swiper2 = new Swiper(".sellingslide", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});