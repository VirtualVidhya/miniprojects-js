const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
let cntText = document.querySelector(".count");
let mrpText = document.querySelector(".mrp");

let qty = 0;
let mrp = 100;

decBtn.addEventListener("click", decrease);
incBtn.addEventListener("click", increase);

function increase() {
  qty++;

  cntText.innerHTML = qty;

  if (qty > 0) {
    cntText.style.color = "green";
  } else if (qty == 0) {
    cntText.style.color = "black";
  }
}

function decrease() {
  qty--;

  if (qty < 0) {
    qty = 0;
  }

  cntText.innerHTML = qty;

  if (qty == 0) {
    cntText.style.color = "black";
  }
}