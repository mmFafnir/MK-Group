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
    slidesPerView: 1,
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

    

const worksBody = document.querySelector('.works-page__body');
const templateWork = worksBody.querySelector('.work');

const worksArr = [
    {
        title: 'Наши работы',
        images: [
            '1.jpg', '2.png', '3.png'
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae blanditiis repellat est, deleniti dolorem velit labore odit magnam reprehenderit itaque quam maxime soluta corrupti nesciunt! Quidem aperiam delectus vitae'
    },
    {
        title: 'Наши работы',
        images: [
            '1.jpg', '2.png', '3.png'
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae blanditiis repellat est, deleniti dolorem velit labore odit magnam reprehenderit itaque quam maxime soluta corrupti nesciunt! Quidem aperiam delectus vitae'
    },
    {
        title: 'Наши работы',
        images: [
            '1.jpg', '2.png', '3.png'
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae blanditiis repellat est, deleniti dolorem velit labore odit magnam reprehenderit itaque quam maxime soluta corrupti nesciunt! Quidem aperiam delectus vitae'
    },
    {
        title: 'Наши работы',
        images: [
            '1.jpg', '2.png', '3.png'
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae blanditiis repellat est, deleniti dolorem velit labore odit magnam reprehenderit itaque quam maxime soluta corrupti nesciunt! Quidem aperiam delectus vitae'
    },
    {
        title: 'Наши работы',
        images: [
            '1.jpg', '2.png', '3.png'
        ],
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae blanditiis repellat est, deleniti dolorem velit labore odit magnam reprehenderit itaque quam maxime soluta corrupti nesciunt! Quidem aperiam delectus vitae'
    }
]
if(worksArr.length > 0){
    const CreateTemplateImgSlide = (src, title) => {
        const template = ` <div class="swiper-slide">
            <div class="swiper-slide__img">
                <img src="img/works/${src}" alt="${title}">
                <div class="swiper-slide__desc">
                    <p>
                        ${title}
                    </p>
                </div>
            </div>
        </div>` 

        return template 
    }
    
    worksArr.forEach((work, index) => {
        const template = templateWork.cloneNode(true);
        template.classList.add('__anim-item')
        
        const content = template.querySelector('.work__body');
        content.classList.add('anim-opacity')/
        content.classList.add('d-3');
        const title = template.querySelector('h2');
        title.classList.add('anim-left');
        
        const text =  template.querySelector('.works__text');
        
        const swiper = template.querySelector('.works-swiper');
        
        swiper.classList.add(`work-${index}`)
        const swiperWrapper = template.querySelector('.swiper-wrapper');
        const swiperNavImg = template.querySelector('.work-nav');
        
        title.textContent = work.title;
        text.textContent = work.text;
        
        const swiperSlides = work.images.map(img => CreateTemplateImgSlide(`work1/${img}`, work.title));
        swiperWrapper.innerHTML = swiperSlides.join(' ');

        const swiperNavImages = work.images.map(img => `
            <div class="work-nav__item">
                <img src="./img/works/work1/${img}" alt="${work.title}">
            </div>
        `);
        swiperNavImg.innerHTML = swiperNavImages.join(' ');
        worksBody.prepend(template);
        
        slider(template, `work-${index}`)
    })
    templateWork.remove();
}

function slider (block, className){
  let mySwiper = new Swiper(`.${className}`, {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  })

  const maxItems = 5;
  const sliderNavItems = block.querySelectorAll('.work-nav__item');
  const sliderNav = block.querySelector('.work-nav');

  sliderNavItems.forEach((el, index) => {
    el.setAttribute('data-index', index);

    el.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      mySwiper.slideTo(index);
    });
  });

//   const showMore = () => {
//     let childenLength = sliderNav.children.length;
//     if (childenLength > maxItems) {
//       sliderNav.insertAdjacentHTML('beforeend', `
//         <div class="btn-center">
//           <button class="modal-open">Еще ${childenLength - maxItems}</button>
//         </div>
//       `);
//       document.querySelectorAll(`.slider-nav__item:nth-child(n+${maxItems + 1})`).forEach(el => {el.style.display = 'none';});
//     }

//   };

//   showMore();
}


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

