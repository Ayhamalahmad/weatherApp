import {
  gallaryWeekly,
  weatherBox,
  weeklyBox,
  gallary,
  nextBtn,
  previouBtn,
} from "./weekly-vars.js";
// import { rightContainer, box } from "./Recent-Search-vars.js";
nextBtn.addEventListener("click", (e) => {
  gallary.scrollLeft += weatherBox.offsetWidth + 20;
  if (gallaryWeekly.classList.contains("active")) {
    // gallaryWeekly.scrollLeft += weeklyBox.offsetWidth + 20;
    gallaryWeekly.scrollLeft += 350 + 20;
  }
});
previouBtn.addEventListener("click", (e) => {
  gallary.scrollLeft -= weatherBox.offsetWidth + 20;
  if (gallaryWeekly.classList.contains("active")) {
    // gallaryWeekly.scrollLeft -= weeklyBox.offsetWidth + 20;
    gallaryWeekly.scrollLeft -= 350 + 20;
  }
});
//
// let scrollInterval;
// let rightSc=document.querySelector(".right-sc");
// let box = document.querySelector(".right .wrapper .box");
// 
// let leftSc=document.querySelector(".left-sc");
// let rightContainer = document.querySelector(".right");
// leftSc.addEventListener("click", (e) => {
//   rightContainer.scrollLeft += 196 + 20;
//   console.log("clicked");
// });

// 
// function startAutoScroll() {
//   let rightContainer = document.querySelector(".right");
//   let box = document.querySelector(".right .wrapper .box");

//   scrollInterval = setInterval(() => {
//   gallary.scrollLeft += weatherBox.offsetWidth + 20;
//   if (gallary.scrollLeft >= gallary.scrollWidth - gallary.clientWidth) {
//     gallary.scrollLeft = 0;
//   }
//   }, 5000);
// }
// startAutoScroll();
// document.addEventListener("DOMContentLoaded", function () {
//   startAutoScroll();
// });

// 



// let scrollInterval;
// const rightContainer = document.querySelector(".recent-search .right");
// const box = document.querySelector(".recent-search .right .wrapper .box");
// const scrollDelay = 1000;


// function startAutoScroll() {
//   scrollInterval = setInterval(() => {
//     console.log("rightContainer.scrollLeft:", rightContainer.scrollLeft);
//     console.log("rightContainer.scrollWidth:", rightContainer.scrollWidth);
//     console.log("rightContainer.clientWidth:", rightContainer.clientWidth);
//     console.log("rightContainer.offsetWidth:", rightContainer.offsetWidth);
//     // if (rightContainer.scrollLeft + rightContainer.clientWidth >= rightContainer.scrollWidth) {
//     if (rightContainer.scrollLeft >= rightContainer.scrollWidth) {
//       console.log("Reached the end, resetting scrollLeft.");
//       rightContainer.scrollLeft = 0;
//       clearInterval(scrollInterval)
//     }
//     rightContainer.scrollLeft += box.offsetWidth + 20;
//   }, scrollDelay);

// }

// startAutoScroll();
