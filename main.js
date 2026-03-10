import { toggleSocials } from "./modules/toggleSocials.js";
import { toggleServices} from "./modules/toggleServices.js";
import { initAccordion } from "./modules/accordion.js";

document.querySelector(".socials-container-trigger")
    .addEventListener("click", toggleSocials);

document.querySelector(".services-container__row-card__show__button")
    .addEventListener("click", toggleServices);

initAccordion();