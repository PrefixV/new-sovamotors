export function toggleServices() {
    const serviceContainerRowHidden = document.querySelector('.services-container__row--extra');
    serviceContainerRowHidden.classList.toggle("services-container__row--hidden");
}