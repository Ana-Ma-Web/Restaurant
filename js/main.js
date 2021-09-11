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