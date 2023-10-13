const header = document.getElementById("Header");
const side1 = document.getElementById("right-side");
const active2 = document.getElementById("tag2");
const active1 = document.getElementById("tag1");

window.addEventListener("scroll", () => {
    if (this.scrollY >= 85) {
       header.classList.add("on-scroll");
    } 
    else {
       header.classList.remove("on-scroll");
    }
 });

 window.addEventListener("scroll", () => {
   if (this.scrollY > document.body.scrollHeight / 3.25) {
      active1.classList.remove("active");
      active2.classList.add("active");
   } 
   else {
      active1.classList.add("active");
      active2.classList.remove("active");
   }
});

$("#para2").click(function() {
   $([document.documentElement, document.body]).animate({
       scrollTop: $("#sec2").offset().top
   }, 1000);
});