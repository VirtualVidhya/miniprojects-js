const btn = document.getElementById("scroll-up-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100 || window.scrollY > 100) {
    btn.classList.remove("btn-hidden");
    btn.classList.add("btn-visible");
  } else {
    btn.classList.add("btn-hidden");
    btn.classList.remove("btn-visible");
  }
});

btn.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
