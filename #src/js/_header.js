

const header = document.querySelector('.header');

const navLink = header.querySelector('.nav-link');

const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon')

const MOBILE_SIZE = 550;

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    if(!header.classList.contains('header_color')){
        header.classList.add('header_color')
    }
    body.classList.toggle('lock');
})



let lastScroll = 0;
const defaultOffset = 200;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('header_hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('header_hide');
    }

    lastScroll = scrollPosition();
})

function addHeaderColor(){
    if (window.pageYOffset > 10) {
       header.classList.add('header_color');
    } else {
      header.classList.remove('header_color');
    }
}

window.onscroll=addHeaderColor;
addHeaderColor();