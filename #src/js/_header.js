

const header = document.querySelector('.header');

const navLink = header.querySelector('.nav-link');

const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon')

const MOBILE_SIZE = 550;

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    body.classList.toggle('lock');
})
