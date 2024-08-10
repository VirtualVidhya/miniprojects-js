const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const buttons = document.querySelector(".btn");
const image = document.querySelector(".images");

let imgSrc = [
              "imgs/1.png", "imgs/2.png", "imgs/3.png", 
              "imgs/4.png", "imgs/5.png", "imgs/6.png"];

let count = 0;

leftBtn.addEventListener("click", left);
rightBtn.addEventListener("click", right);

function right() {
  count++;

  if (count > imgSrc.length - 1) {
    count = 0;
  }

  setImg();
}

function left() {
  count--;

  if (count < 0) {
    count = imgSrc.length - 1;
  }

  setImg();
}

function setImg() {
  image.style.background = `url("${imgSrc[count]}")`;
}

function setRandomInitImg() {
  count = Math.floor( Math.random() * imgSrc.length );

  setImg();
}

setRandomInitImg();