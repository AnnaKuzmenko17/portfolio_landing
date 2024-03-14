const menuOpenBtn = document.querySelector('.btn-open');
const menuCloseBtn = document.querySelector('.btn-close');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.menu__link');

menuOpenBtn.addEventListener('click', () => {
  menu.classList.add('open');
  menuCloseBtn.classList.remove('hidden');
  menuOpenBtn.classList.add('hidden');
})

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  menuCloseBtn.classList.add('hidden');
  menuOpenBtn.classList.remove('hidden');
})

links.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuCloseBtn.classList.add('hidden');
  menuOpenBtn.classList.remove('hidden');
}))
