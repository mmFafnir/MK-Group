

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

