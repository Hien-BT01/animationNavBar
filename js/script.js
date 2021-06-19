const container = document.querySelector(".container");
const burgerElement = document.querySelector(".hamburger-menu");


burgerElement.addEventListener("click", e => {
    container.classList.toggle("active");
})