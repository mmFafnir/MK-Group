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
    body.classList.toggle('lock');
})


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
    
    breakpoints: {
      
      666: {
        slidesPerView: 3,
      },

      490 :{
        slidesPerView: 2,
      }
    }
  });
  
  const currentSlideBlock = document.querySelector('.current-slide');
  const allSlidesPartners  = document.querySelectorAll('.partners-slide').length;

  const swiperPartners = new Swiper('.partners-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
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
      550: {
        slidesPerView: 3,
      }
    },

    on: {
      slideChange: function(){

        const index_currentSlide = this.realIndex + 1;
        currentSlideBlock.innerHTML = `<b>0${index_currentSlide}</b>/0${allSlidesPartners}`

      
      }
    }
  });
  console.log(swiperPartners)
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
