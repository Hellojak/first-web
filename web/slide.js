var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Auto slide
var slideInterval = setInterval(function() {
  plusSlides(1);
}, 2000);

// Pause auto slide on hover
var slider = document.querySelector('.slider-container');
slider.addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Resume auto slide on mouseout
slider.addEventListener('mouseout', function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 2000);
});

// Add click event listeners to navigation buttons
var prevButton = document.querySelector('.slider-prev');
var nextButton = document.querySelector('.slider-next');
prevButton.addEventListener('click', function() {
  plusSlides(-1);
});
nextButton.addEventListener('click', function() {
  plusSlides(1);
});
