import { toggleSocials } from "./modules/toggleSocials.js";
import { toggleServices} from "./modules/toggleServices.js";

document.querySelector(".socials-container-trigger")
    .addEventListener("click", toggleSocials);

document.querySelector(".services-container__row-card__show__button")
    .addEventListener("click", toggleServices);

const accordionContainer = document.querySelector('.pricelist-container__accordion');
accordionContainer.addEventListener('click', (e) => {
    const accordionItem = e.target.closest('.pricelist-container__accordion-item');
    if (accordionItem) {
        const accordionItemDescription = accordionItem.querySelector('.pricelist-container__accordion-item__description');
        const accordionItemArrow = accordionItem.querySelector('svg');
        if (accordionItemDescription) {
            accordionItemDescription.classList.toggle('pricelist-container__accordion-item__description--hidden');
            accordionItemArrow.classList.toggle('rotate-arrow');
        }
    }
})