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
}

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

    @@include('./_scrollAnim.js')
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
}