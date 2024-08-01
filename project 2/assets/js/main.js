/*=============== SHOW MENU ===============*/
const nav = document.getElementById('nav'),
      headerMenu = document.getElementById('header-menu'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(headerMenu){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    headerMenu.addEventListener('click', () =>{
        nav.classList.remove('show-menu')
    })
}

/*=============== SWIPER MOVIE ===============*/
let swiperMovie = new Swiper('.movie__swiper', {
    loop: true,
    grabCursor: 2,
    slidesPerView: 2,
    spaceBetween: 24,

    breakpoints:{
        440:{
            slidesPerView: 'auto',
        },
        768:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
})

/*=============== SWIPER NEW ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    grabCursor: 2,
    slidesPerView: 2,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints:{
        440:{
            slidesPerView: 'auto',
            centeredSlides: false,
        },
        768:{
            slidesPerView: 4,
            centeredSlides: false,
        },
        1200:{
            slidesPerView: 5,
            centeredSlides: false,
        }
    }
})

/*=============== ADD BLUR HEADER ===============*/
const blueHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blue-header') 
                       : header.classList.remove('blue-header')
}
window.addEventListener('scroll', blueHeader)
