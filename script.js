"use script";

const nav__bar = document.querySelector("#nav__bar");
const btn = document.querySelector("#triggerBtn");

btn.addEventListener("click", () => {
  nav__bar.classList.toggle("hidden");
});
