var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    thumbs: {
      swiper: swiper,
    },
  });


// Quantity Start
const quantityCount = document.querySelector(".quantity_count");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  quantityCount.textContent = count;
});


decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    quantityCount.textContent = count;
  }
});


