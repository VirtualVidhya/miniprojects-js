const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
let cntText = document.querySelector(".count");
let mrpText = document.querySelector("#mrp");
let billText = document.querySelector("#bill-amt");

let qty = 0;
let mrp = 100;
let billAmt = 0;

decBtn.addEventListener("click", decrease);
incBtn.addEventListener("click", increase);

resetBillAmt();

function increase() {
  qty++;

  cntText.innerHTML = qty;

  if (qty > 0) {
    cntText.style.color = "green";
  } else if (qty == 0) {
    cntText.style.color = "black";
  }

  calcBillAmt();
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

  calcBillAmt();
}

function calcBillAmt() {
  billAmt = mrp * qty;
  billText.innerText = `${billAmt}`;

  if (billAmt > 0) {
    billText.style.color = "red";
  } else if (billAmt == 0) {
    billText.style.color = "black";
  }
}

function resetBillAmt() {
  billAmt = 0;
  billText.innerText = `${billAmt}`;
}