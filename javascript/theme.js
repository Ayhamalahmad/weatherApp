let body = document.querySelector("body");
let theme = document.querySelector(".theme");
let themeSvgs = document.querySelectorAll(".theme .icon");
let iconMoon = document.querySelector(".icon-moon");
let iconSun = document.querySelector(".icon-sun");
let currentTheme = document.querySelector(".current-theme");
// let iconTheme =document.querySelector(".icon");
theme.addEventListener("click", () => {
  body.classList.toggle("dark");
//   themeSvgs.forEach((svg)=>{
//     svg.classList.remove("active");
//     console.log(svg);
//   });
  if (body.classList.contains("dark")) {
    currentTheme.textContent = "Light";
    // iconSun.classList.add("active");
    // iconMoon.classList.remove("active");
} else {
    // iconSun.classList.remove("active"); 
    // iconMoon.classList.add("active");
    currentTheme.textContent = "Dark";
  }
});
