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