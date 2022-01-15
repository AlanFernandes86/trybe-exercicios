const menuHamburger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav');

menuHamburger.addEventListener('click', function () {
  nav.classList.toggle('invisible');
});
