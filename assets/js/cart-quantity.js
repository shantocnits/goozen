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
