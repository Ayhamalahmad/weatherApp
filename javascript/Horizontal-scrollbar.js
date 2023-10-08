import {
  gallaryWeekly,
  weatherBox,
  weeklyBox,
  gallary,
  nextBtn,
previouBtn,
} from "./weekly-vars.js";
nextBtn.addEventListener("click",(e)=>{
  gallary.scrollLeft += weatherBox.offsetWidth + 20;
  if(gallaryWeekly.classList.contains("active")){
    gallaryWeekly.scrollLeft +=weeklyBox.offsetWidth + 20;
  }
})
previouBtn.addEventListener("click",(e)=>{
  gallary.scrollLeft -= weatherBox.offsetWidth + 20;
  if(gallaryWeekly.classList.contains("active")){
    gallaryWeekly.scrollLeft -=weeklyBox.offsetWidth + 20;
  }
})