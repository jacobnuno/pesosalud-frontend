const Slider = (function () {
    const slides = document.querySelectorAll('.slider li');
    let currentSlide = 0;

    const next = function () {
        slides[currentSlide].classList.toggle('active');
        if (currentSlide < slides.length - 1) {
            currentSlide += 1;
        } else {
            currentSlide = 0;
        }
        slides[currentSlide].classList.toggle('active');
    };

    const prev = function () {
        slides[currentSlide].classList.toggle('active');
        if (currentSlide > 0) {
            currentSlide -= 1;
        } else {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].classList.toggle('active');
    };

    return {
        next,
        prev,
    };
}());
