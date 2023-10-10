import {
  menuBtn,
  headerContainer,
  headerNav,
  headerLinks,
} from "./header-vars.js";
import {
  groupAllBtn,
  todayBtn,
  weeklyBtn,
  gallary,
  gallaryWeekly,
} from "./weekly-vars.js";

menuBtn.addEventListener("click", () => {
  headerContainer.classList.toggle("active");
  headerNav.classList.toggle("active");
  headerLinks.classList.toggle("active");
});
//
groupAllBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    gallaryWeekly.classList.remove("active");
    gallary.classList.remove("active");

    if (e.target.classList.contains("today-button")) {
      gallary.classList.add("active");
    } else {
      gallaryWeekly.classList.add("active");
    }
    groupAllBtn.forEach((b) => {
      b.classList.remove("active");
    });
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    }
  });
});
