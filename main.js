import { toggleSocials } from "./modules/toggleSocials.js";
import { toggleServices} from "./modules/toggleServices.js";
import { initAccordion } from "./modules/accordion.js";
import { nextSlide, prevSlide } from "./modules/gallery.js";
import { initModal } from "./modules/toggleModal.js";
import { toggleHeader } from "./modules/toggleHeader.js";

document.querySelector(".socials-container-trigger")
    .addEventListener("click", toggleSocials);

document.querySelector(".services-container__row-card__show__button")
    .addEventListener("click", toggleServices);

document.querySelector(".slider__button--next")
    .addEventListener("click", nextSlide);

document.querySelector(".slider__button--prev")
    .addEventListener("click", prevSlide);

const dateNow = new Date();

document.querySelector(".footer-container__contacts-logo").textContent = `Sovamotors13@${dateNow.getFullYear()}`;

document.querySelector(".mobile-nav__button")
    .addEventListener('click', toggleHeader);

document.querySelectorAll(".header__menu-link").forEach((element) => {
    element.addEventListener("click", () => {
        toggleHeader();
    })
})

initAccordion();
initModal();