

const modal = document.querySelector(".js-modal");
const modalOpenBtn = document.querySelector(".js-modalBtn");
const modalCloseBtn = document.querySelector(".js-modalCloseBtn");

const MODAL_CN = "modal__hidden";

const handleModal = () => {
    modal.classList.remove(MODAL_CN);
};

const handleCloseModal = () => {
    modal.classList.add(MODAL_CN);
};

const initModal = () => {
    modalOpenBtn.addEventListener("click", handleModal);
    modalCloseBtn.addEventListener("click", handleCloseModal);
};

initModal();