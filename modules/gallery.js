const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let index = 0;
const totalSlides = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

export function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlider();
}

export function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
}