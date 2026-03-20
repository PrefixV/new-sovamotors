import { toggleHeader } from "./modules/toggleHeader.js";

document.querySelector(".mobile-nav__button")
    .addEventListener('click', toggleHeader);

document.querySelectorAll(".header__menu-link").forEach((element) => {
    element.addEventListener("click", () => {
        toggleHeader();
    })
})

document.querySelector(".footer-container__contacts-logo").textContent = `Sovamotors13@${new Date().getFullYear()}`;