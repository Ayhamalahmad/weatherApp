import {
  gallaryWeekly,
  weatherBox,
  weeklyBox,
  gallary,
  nextBtn,
  previouBtn,
} from "./weekly-vars.js";
import {
  hotelCard,
  hotelGallery,
  hotelPreBtn,
  hotelNextBtn,
} from "./hotel-vars.js";
import {
  restaurantsPrevBtn,
  restaurantsNextBtn,
  restaurantGallery,
  restaurantCard,
} from "./Restaurants-vars .js";
// import { rightContainer, box } from "./Recent-Search-vars.js";
function scrollNext(neBtn, Gallery, ElementTo, gap = 0) {
  neBtn.addEventListener("click", (e) => {
    if (typeof ElementTo === "number") {
      Gallery.scrollLeft += ElementTo + gap;
    } else {
      Gallery.scrollLeft += ElementTo.offsetWidth + gap;
    }
    console.log("from new fun");
  });
}
function scrollpreviou(peBtn, Gallery, ElementTo, gap = 0) {
  peBtn.addEventListener("click", (e) => {
    if (typeof ElementTo === "number") {
      Gallery.scrollLeft -= ElementTo + gap;
    } else {
      Gallery.scrollLeft -= ElementTo.offsetWidth + gap;
    }
    console.log("from new scrollpreviou");
  });
}
// Today
scrollNext(nextBtn, gallary, weatherBox, 20);
scrollpreviou(previouBtn, gallary, weatherBox, 20);

// weekly
scrollNext(nextBtn, gallaryWeekly, 350, 20);
scrollpreviou(previouBtn, gallaryWeekly, 350, 20);
// hotel
scrollNext(hotelNextBtn, hotelGallery, hotelCard, 7);
scrollpreviou(hotelPreBtn, hotelGallery, hotelCard, 7);
// restaurants
scrollNext(restaurantsNextBtn, restaurantGallery, restaurantCard, 7);
scrollpreviou(restaurantsPrevBtn, restaurantGallery, restaurantCard, 7);


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

// const rightContainer = document.querySelector(".recent-search .right");
// const box = document.querySelector(".recent-search .right .wrapper .box");

// function startAutoScroll() {
//   let scrollInterval;
//   const scrollDelay = 1000;
//   let weatherUpdateGallery = document.querySelector(".weather-update-gallery");
//   let updateCard = document.querySelector(".update-card");
//   let weatherUpdateWrapper = document.querySelector(".weather-update-wrapper");
//   scrollInterval = setInterval(() => {
//     console.log(
//       "weatherUpdateGallery.scrollLeft:",
//       weatherUpdateGallery.scrollLeft
//     );
//     console.log(
//       "weatherUpdateGallery.scrollWidth:",
//       weatherUpdateGallery.scrollWidth
//     );
//     console.log(
//       "weatherUpdateGallery.clientWidth:",
//       weatherUpdateGallery.clientWidth
//     );
//     console.log(
//       "weatherUpdateGallery.offsetWidth:",
//       weatherUpdateGallery.offsetWidth
//     );
//     // if (rightContainer.scrollLeft + rightContainer.clientWidth >= rightContainer.scrollWidth) {
//     if (weatherUpdateGallery.scrollLeft + weatherUpdateGallery.clientWidth >= weatherUpdateWrapper.scrollWidth) {
//       console.log("Reached the end, resetting scrollLeft.");
//       weatherUpdateGallery.scrollLeft = 0;
//       clearInterval(scrollInterval);
//     }
//     weatherUpdateGallery.scrollLeft += updateCard.offsetWidth;
//   }, scrollDelay);
// }

// startAutoScroll();
