const emojisEL = document.querySelector("img");

const starsEl = document.querySelectorAll(".fa-solid");

const ratingNamesEl = document.querySelector("h3");

for (let i = 0; i < starsEl.length; i++) {
  starsEl[i].addEventListener("click", () => {
    SetStars(i + 1);
    SetEmoji(i);
    SetReview(i);
  });
}

const totalStarCount = 5;

function SetStars(n) {
  for (let i = 0; i < n; i++) {
    starsEl[i].style.color = "gold";
  }

  for (let i = n; i < totalStarCount; i++) {
    starsEl[i].style.color = "black";
  }
}

const emojiSrc = [
  "images/very_poor.webp",
  "images/poor.webp",
  "images/average.webp",
  "images/good.webp",
  "images/excellent.webp",
];
const reviewTexts = ["Very Poor", "Poor", "Average", "Good", "Excellent"];

function SetEmoji(n) {
  emojisEL.setAttribute("src", emojiSrc[n]);
}

function SetReview(n) {
  ratingNamesEl.innerText = reviewTexts[n];
}
