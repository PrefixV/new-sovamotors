const slides = document.querySelectorAll(".slide");
let index = 0;
const totalSlides = slides.length;

export function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

export function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

export function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}

showSlide(index);