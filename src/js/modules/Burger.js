const menu = document.querySelector('.header__nav-items');
const menuBtn = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.header__nav-burger');
const navItems = document.querySelectorAll('.header__nav-burger-item')

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    header.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('burger-lock');
    burgerMenu.classList.toggle('active');
  })
}

navItems.forEach((it) => it.addEventListener('click', () => {
  body.classList.remove('burger-lock');
  header.classList.remove('active');
  burgerMenu.classList.toggle('active');
}));