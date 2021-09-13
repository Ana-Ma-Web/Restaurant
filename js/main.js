// Table tabs
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

// Swiper
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

