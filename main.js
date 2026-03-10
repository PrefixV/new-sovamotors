import { toggleSocials } from "./modules/toggleSocials.js";
import { toggleServices} from "./modules/toggleServices.js";
import { initAccordion } from "./modules/accordion.js";
import { nextSlide, prevSlide } from "./modules/gallery.js";

document.querySelector(".socials-container-trigger")
    .addEventListener("click", toggleSocials);

document.querySelector(".services-container__row-card__show__button")
    .addEventListener("click", toggleServices);

document.querySelector(".slider__button--next")
    .addEventListener("click", nextSlide);

document.querySelector(".slider__button--prev")
    .addEventListener("click", prevSlide);

initAccordion();