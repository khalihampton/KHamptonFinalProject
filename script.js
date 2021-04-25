//aboutwindow//
let aboutModal = document.getElementById("aboutModal")
let aboutLink = document.getElementById("aboutWindow")
let aboutClose = document.getElementsByClassName("close")[0]; 

aboutLink.onclick = function(){
  event.preventDefault()
  aboutModal.style.display = "block";
}
aboutClose.onclick = function(){
  aboutModal.style.display = "none";
}

//contactwindow//
let contactModal = document.getElementById("contactModal")
let contactLink = document.getElementById("contactWindow")
let contactClose = document.getElementsByClassName("close")[1]; 

contactLink.onclick = function(){
  event.preventDefault()
  contactModal.style.display = "block";
}
contactClose.onclick = function(){
  contactModal.style.display = "none";
}
//carousel code
const carousel = document.querySelector(".carousel");
const container = carousel.querySelector(".carousel-container");
const prevBtn = carousel.querySelector(".carousel-prev");
const nextBtn = carousel.querySelector(".carousel-next");
const pagination = carousel.querySelector(".carousel-pagination");
const bullets = [].slice.call(carousel.querySelectorAll(".carousel-bullet"));
const totalItems = container.querySelectorAll(".carousel-item").length;
const percent = 100 / totalItems;
let currentIndex = 0;
function next() {
  slideTo(currentIndex + 1);
}
function prev() {
  slideTo(currentIndex - 1);
}
function slideTo(index) {
  index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
  container.style.WebkitTransform = container.style.transform =
    "translate(-" + index * percent + "%, 0)";
  bullets[currentIndex].classList.remove("active-bullet");
  bullets[index].classList.add("active-bullet");
  currentIndex = index;
}
bullets[currentIndex].classList.add("active-bullet");
prevBtn.addEventListener("click", prev, false);
nextBtn.addEventListener("click", next, false);
pagination.addEventListener(
  "click",
  function (e) {
    const index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
      slideTo(index);
    }
  },
  false);
//end carousel code
