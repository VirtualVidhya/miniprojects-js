let menu = document.querySelector(".menu");

// document.addEventListener('keydown', function(event) {
//     if (event.code == "Escape") {
//         menu.classList.toggle('menu-hidden');
//     }
// });

let openMenuBtn = document.querySelector(".open-menu-btn");

openMenuBtn.addEventListener("click", function () {
  if (menu.classList.contains("menu-hidden")) {
    menu.classList.remove("menu-hidden");
  }
});

let closeMenuBtn = document.querySelector(".close-menu-btn");

closeMenuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-hidden");
});
