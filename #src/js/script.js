const body = document.querySelector('body')

Storage.prototype.get = function(key) {
    return  JSON.parse(this.getItem(key));
  }

Storage.prototype.set = function(key, value) {
    return this.setItem(key, JSON.stringify(value))
}

const scrollInto = (blockId) => {
    document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
s}

@@include('./_header.js')

const btnBottom = document.querySelector('.btn-to-bottom');
if(btnBottom){

    btnBottom.addEventListener('click',() => {
        scrollInto('about')
    })
}
const path = {
    MAIN: '/',
    WORKS: '/works.html'
}
const documentsSwiper = document.querySelector('.swiper-documents');

// const changeWidthDocuments = (width) => {
    
//     if(width < 1036){
//         documentsSwiper.style.width = '309.75px'
//     } else if(width < 932 && ) {
//         documentsSwiper.style.width = '436.75px'
//     } else if (width < 840) {
//         documentsSwiper.style.width = '100%'
//     } else {    
//         documentsSwiper.style.width = '248.75px'
//     }
// } 

if(window.location.pathname == path.MAIN) {
    const currentLinkTo = localStorage.get('linkTo');
    if(currentLinkTo){
        setTimeout(() => {
            scrollInto(currentLinkTo)        
        }, 1000)
    }
    localStorage.clear('linkTo');

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1)
            scrollInto(blockID)
            if(burgerIcon.classList.contains('active')){
                body.classList.remove('lock');1
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        })
    }
    // changeWidthDocuments(window.innerWidth)
    window.addEventListener('resize', (e) => {
        if(documentsSwiper) {
            // changeWidthDocuments(window.innerWidth)
        }
    })

    @@include('./_swipers.js')
}
if(window.location.pathname == path.WORKS){
    const navLinks = document.querySelectorAll('a[href*="#"]');
    navLinks.forEach(link => {

        link.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.set('linkTo', link.getAttribute('href').substr(1)  );
            window.location.pathname = path.MAIN
        })
    })

    @@include('./_works.js')
}


@@include('./_scrollAnim.js')

