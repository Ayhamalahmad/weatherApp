let gallary = document.querySelector(".gallary");
let nextBtn = document.querySelector(".next-button");
let previouBtn = document.querySelector(".previous-button");
let navigationBtns = document.querySelectorAll(".navigation-buttons button");
nextBtn.addEventListener("click",(e)=>{
  gallary.scrollLeft += 375;
})
previouBtn.addEventListener("click",(e)=>{
  gallary.scrollLeft -= 375;
})




// gallary.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   gallary.scrollLeft += e.deltaY;
//   console.log(e.deltaY);
// });

// navigationBtns.forEach((btn)=>{
//     btn.addEventListener("click", (e) => {
//         if (e.target.classList.contains("previous-button")) {
//           gallary.scrollLeft -= 900;
//       } else if(e.target.classList.contains("next-button")){
//             gallary.scrollLeft += 900;
//         }
//       });
// })


// let isDragging = false;
// let startX, scrollLeft;

// gallary.addEventListener("mousedown", (e) => {
//   isDragging = true;
//   startX = e.pageX - gallary.offsetLeft;
//   scrollLeft = gallary.scrollLeft;
//   gallary.style.cursor = "grabbing";
// });

// gallary.addEventListener("mousemove", (e) => {
//   if (!isDragging) return;
//   e.preventDefault();
//   const x = e.pageX - gallary.offsetLeft;
//   const walk = (x - startX) * 3;
//   gallary.scrollLeft = scrollLeft - walk;
// });

// gallary.addEventListener("mouseup", () => {
//   isDragging = false;
//   gallary.style.cursor = "grab";
// });

// gallary.addEventListener("mouseleave", () => {
//   isDragging = false;
//   gallary.style.cursor = "grab";
// });
