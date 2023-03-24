const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
const sliderItems = document.querySelectorAll(".slider-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 1;
let sliderWidth = slider.clientWidth;

sliderContainer.style.transform = `translateX(-${sliderWidth}px)`;

function slideNext() {
  if (currentSlide >= sliderItems.length - 1) return;
  currentSlide++;
  sliderContainer.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
}

function slidePrev() {
  if (currentSlide <= 0) return;
  currentSlide--;
  sliderContainer.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
}

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);
