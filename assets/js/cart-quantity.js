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


// cart quantity2
const quantityCount1 = document.querySelector(".quantity_count1");
const incrementBtn1 = document.querySelector(".increment1");
const decrementBtn1 = document.querySelector(".decrement1");

let count1 = 0;

incrementBtn1.addEventListener("click", () => {
    count1++;
    quantityCount1.textContent = count1;
});

decrementBtn1.addEventListener("click", () => {
  if (count1 > 0) {
    count1--;
    quantityCount1.textContent = count1;
  }
});
