var swiper = new Swiper(".explore", {
    slidesPerView: 1,
    spaceBetween: 10,
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
      nextEl: ".explore-next",
      prevEl: ".explore-prev",
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