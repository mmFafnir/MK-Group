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

const btnBottom = document.querySelector('.btn-to-bottom');
if(btnBottom){

    btnBottom.addEventListener('click',() => {
        scrollInto('about')
    })
}

const path = {
    MAIN: '/MK-Group/',
    WORKS: '/MK-Group/works.html'
}
console.log(window.location)
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

    //Анимация при скролле
const animItems = document.querySelectorAll('.__anim-item');
//условие проверки наличия на странице объектов с классом '.__anim-item'
if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);

   function animOnScroll() {
      //цикл 'for' наделяет объекты в массиве объектов переменными и определяет их текущий класс
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 6;

         //создание точки анимации, при значении animStart = 4, точка анимации - при 1/10 высоты объекта
         let animItemPoint = window.innerHeight - animItemHight / animStart;

         //проверка, если анимированный объект выше высоты окна браузера
         if (animItemHight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         //Добавление или удаление класса '__active' объекту
         if ((pageYOffset > animItemOffset - animItemPoint)
            &&
            pageYOffset < (animItemOffset + animItemHight)) {
            animItem.classList.add('__active');
         } else {
            //доп условие: при отсутсвии класса-заглушки повтора анимации '__active' не будет снят
            if (!body.classList.contains('__no-repeat-anim')) {
               animItem.classList.remove('__active');
            }
         }
      }
   }

   //функциия позволяет получить позицию объекта относительно верха или левой стороны объекта window
   function offset(e1) {
      const rect = e1.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }

   //вызов функции для объектов, которые находятся изначально при загрузке страницы с задержкой 300ms
   setTimeout(() => {
      animOnScroll()
   }, 300);
}
      const swiper = new Swiper('.works-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    loopAdditionalSlides: 1,
    spaceBetween: 0,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  
  });

  
  // const swiperDocuments = new Swiper('.swiper-documents', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: false,
  //   slidesPerView: 4,
  //   // loopAdditionalSlides: 8,
  //   spaceBetween: 40,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
    
  
  // });

  


  // const currentSlideBlock = document.querySelector('.current-slide');
  // const allSlidesPartners  = document.querySelectorAll('.partners-slide').length;

  const swiperPartners = new Swiper('.partners-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: false,
    spaceBetween: 10,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      900:{
        slidesPerView: 5,
      }
    },
    on: {
      // slideChange: function(){

      //   const index_currentSlide = this.realIndex + 1;
      //   currentSlideBlock.innerHTML = `<b>0${index_currentSlide}</b>/0${allSlidesPartners}`

      
      // }
    }
  });
  


  const swiperDocuments = new Swiper('.swiper-documents', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: false,
    spaceBetween: 10,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
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
