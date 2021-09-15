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
   slidesPerView: 4,
   loopedSlides: 5,
   loop: false,
   spaceBetween: 0,
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
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
   const scrollY = window.pageYOffset

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)
