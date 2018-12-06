"use strict";

var Slider = function () {
  var slides = document.querySelectorAll('.slider li');
  console.log('slides', slides);
  console.log('length: ', slides.length);
  var currentSlide = 0;

  var next = function next() {
    slides[currentSlide].classList.toggle('active');

    if (currentSlide < slides.length - 1) {
      currentSlide += 1;
    } else {
      currentSlide = 0;
    }

    slides[currentSlide].classList.toggle('active');
  };

  var prev = function prev() {
    slides[currentSlide].classList.toggle('active');

    if (currentSlide > 0) {
      currentSlide -= 1;
    } else {
      currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.toggle('active');
  };

  return {
    next: next,
    prev: prev
  };
}();