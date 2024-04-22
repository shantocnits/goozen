const quantityCounts = document.querySelector(".quantity_counts");
const incrementsBtn = document.querySelector(".increments");
const decrementsBtn = document.querySelector(".decrements");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  quantityCounts.textContent = count;
});


decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    quantityCounts.textContent = count;
  }
});