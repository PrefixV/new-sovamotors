import { servicesData } from "./serviceData.js";

export function initModal() {
    const servicesContainer = document.querySelector(".services-container");
    const closeModalButton = document.querySelector(".button--close");
    const modal = document.querySelector(".modal-container");
    if(closeModalButton) {
        closeModalButton.addEventListener("click", () => {
            modal.classList.add("modal-container--hidden");
            document.body.style.overflow = "auto";
        })
    }
    if(servicesContainer) {
        servicesContainer.addEventListener("click", e => {
            const serviceCard = e.target.closest(".services-container__row-card");
            if(serviceCard) {
                modal.classList.remove("modal-container--hidden");
                 const modalTitle = document.querySelector(".modal-container__inner-text__title");
                 const modalDescription = document.querySelector(".modal-container__inner-text__description");
                 const modalImage = document.querySelector(".modal-container__inner-image");

                 const serviceCardTitle = serviceCard.querySelector(".services-container__row-card__body-title");
                 const serviceCardDataItem = servicesData[serviceCardTitle.textContent.trim()];

                 modalDescription.textContent = serviceCardDataItem.description;
                 modalTitle.textContent = serviceCardTitle.textContent;
                 modalImage.src = serviceCardDataItem.image;
                 document.body.style.overflow = "hidden";
            }
        })
    }
}