// ==============  Table tabs ===========
document.querySelectorAll('.table__tabs-link').forEach((item) =>
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '')

      document.querySelectorAll('.table__tabs-link').forEach(
         (child) => child.classList.remove('table__tabs-link_active')
      );
      document.querySelectorAll('.table__content').forEach(
         (child) => child.classList.remove('table__content_active')
      );

      item.classList.add('table__tabs-link_active');
      document.getElementById(id).classList.add('table__content_active');

   })
);

document.querySelector('.table__tabs-link').click();

// ============ Swiper ==============
const slider = document.querySelector('.swiper');
const sliderGallery = document.querySelector('.swiper-gallery');


let Swiper1 = new Swiper(slider, {
   loop: true,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});

let Swiper2 = new Swiper(sliderGallery, {
   slidesPerView: 3,
   loopedSlides: 5,
   loop: false,
   spaceBetween: 0,
   breakpoints:{
      1076:{
         slidesPerView: 4
      },
      1438:{
         slidesPerView: 5
      },
      1799:{
         slidesPerView: 6
      },
      2158: {
         slidesPerView: 7
      },
      2520: {
         slidesPerView: 8
      },
      2880: {
         slidesPerView: 9
      },
   }
});


// ============ HEADER BG ==============
function scrollHeader() {
   const header = document.getElementById('header')
   if (this.scrollY >= 300) header.classList.add ('scroll-header'); else header.classList.remove ('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ============ SCROLLUP =============
function scrollUp() {
   const scrollUp = document.getElementById ('scroll-up')
   if (this.scrollY >= 300) scrollUp.classList.add ('show-scroll'); 
   else scrollUp.classList.remove ('show-scroll')
};

window.addEventListener('scroll', scrollUp)

// ============ CHANGE THEME ==============
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'theme-button_light'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'theme-button_light' : 'theme-button_dark'

if (selectedTheme) {
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'theme-button_dark' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})



// ========== SCROLL SECTION ACTIVE LINK ==========

window.addEventListener('scroll', () => {
   let scrollDistance = window.scrollY;

   document.querySelectorAll('section').forEach((el, i) => {
      if (el.offsetTop - 300 <= scrollDistance){
         document.querySelectorAll('.nav a').forEach((el) => {
            if (el.classList.contains('active-link')){
               el.classList.remove('active-link');
            }
         });
         document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active-link')
      }
   });
});


// ================ SHOW MENU =================
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle');

if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}
if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}
