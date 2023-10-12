let body = document.querySelector("body");
let theme = document.querySelector(".theme");
let themeSvgs = document.querySelectorAll(".theme .icon");
let iconMoon = document.querySelector(".icon-moon");
let iconSun = document.querySelector(".icon-sun");
let currentTheme = document.querySelector(".current-theme");
theme.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    currentTheme.textContent = "Light";
} else {
    currentTheme.textContent = "Dark";
  }
});
