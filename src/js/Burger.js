const burgerMenu = document.querySelector('.burger');
const headerNav = document.querySelector('.header-nav');
const headerShadow = document.querySelector('.header__shadow');
const headerList = document.querySelector('.header-nav__list');
const shadow = document.querySelector('.header__shadow');

const openBurger = () => {
    burgerMenu.classList.add('open');
    headerShadow.classList.add('open');
    headerNav.classList.add('open');
    headerList.classList.add('open');
}

const closeBurger = () => {
  burgerMenu.classList.remove('open');
  headerShadow.classList.remove('open');
  headerNav.classList.remove('open');
  headerList.classList.remove('open');
}

const burgerActive = () => {
  burgerMenu.addEventListener('click', ()=> {
  if(!shadow.classList.contains('open')) {
    openBurger();
  } else {
    closeBurger();
  }
})
}

shadow.addEventListener('click', closeBurger);
headerList.addEventListener('click', closeBurger);


export { burgerActive };
