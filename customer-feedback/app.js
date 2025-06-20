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

const reviews = [
  {
    text: "Very Poor",
    img: "images/very_poor.png",
  },
  {
    text: "Poor",
    img: "images/poor.png",
  },
  {
    text: "Average",
    img: "images/average.png",
  },
  {
    text: "Good",
    img: "images/good.png",
  },
  {
    text: "Excellent",
    img: "images/excellent.png",
  },
];

function SetEmoji(n) {
  emojisEL.setAttribute("src", reviews[n].img);
}

function SetReview(n) {
  ratingNamesEl.innerText = reviews[n].text;
}
