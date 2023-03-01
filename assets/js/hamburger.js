const span = document.querySelectorAll(".hamburger-menu span");
const hamburger = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", function () {
   span[0].classList.toggle("span1");
   span[1].classList.toggle("span2");
   span[2].classList.toggle("span3");
   navigation.classList.toggle("block");
});
