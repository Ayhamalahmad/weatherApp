import {
  gallaryWeekly,
  weatherBox,
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
import {
  weatherUpdateGallery,
  weatherUpdateWrapper,
  updateCard,
} from "./Subscribe-vars.js";
import {
  recentGallery,
  recentWrapper,
  recentCard,
} from "./Recent-Search-vars.js";
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

let scrollInterval;
let isScrollingForward = true;
const scrollDelay = 4000;
function startAutoScroll(Gallery, card, wrapper) {
  scrollInterval = setInterval(() => {
    if (isScrollingForward) {
      if (Gallery.scrollLeft + Gallery.clientWidth >= wrapper.scrollWidth) {
        console.log("Reached the end, resetting scrollLeft.");
        isScrollingForward = false;
      }
      Gallery.scrollLeft += card.offsetWidth;
    } else {
      if (Gallery.scrollLeft <= 0) {
        console.log("Reached the start, reversing scroll direction.");
        isScrollingForward = true;
      }
      Gallery.scrollLeft -= card.offsetWidth;
    }
  }, scrollDelay);
}
// Subscribe
startAutoScroll(weatherUpdateGallery, updateCard, weatherUpdateWrapper);
// Recent Search
startAutoScroll(recentGallery, recentCard, recentWrapper);
