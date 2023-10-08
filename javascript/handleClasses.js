import {
  menuBtn,
  headerContainer,
  headerNav,
  headerLinks,
} from "./header-vars.js";
import { groupAllBtn } from "./weekly-vars.js";

menuBtn.addEventListener("click", () => {
  headerContainer.classList.toggle("active");
  headerNav.classList.toggle("active");
  headerLinks.classList.toggle("active");
});
//
groupAllBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      btn.forEach((b)=>{
          b.classList.remove("active");
      })
      if(!e.target.classList.contains("active")){
          e.target.classList.add("active");
      }
  });
});
