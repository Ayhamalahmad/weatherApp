let menuBtn=document.querySelector(".menu");
let headerContainer=document.querySelector(".container");
let headerNav=document.querySelector(".container .nav");
let headerLinks=document.querySelector(".container .nav .links");
console.log(headerNav);
menuBtn.addEventListener("click",()=>{
    headerContainer.classList.toggle("active");
    headerNav.classList.toggle("active");
    headerLinks.classList.toggle("active");
})