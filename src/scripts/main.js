'use strict';

const toggler = document.querySelector('#toggler');
const nav = document.querySelector('.header__wrapper');
const navLink = document.querySelectorAll('.nav__link--mobile');
const nextSlide = document.querySelector('.header__switchNext');
const prevSlide = document.querySelector('.header__switchPrev');
const slides = document.querySelectorAll('.header__background');
const slideNumbers = document.querySelectorAll('.header__number');
const showText = document.querySelector('.header__button');
const hiddenText = document.querySelector('.header__hiddenText');
const hiddenProduct = document.querySelectorAll('.product--hidden');
const showProduct = document.querySelector('.bakery__button');
let currentSlide = 0;

toggler.addEventListener('click', () => {
  nav.classList.toggle('header__wrapper--active');
  toggler.classList.toggle('header__burger--active');
}
);

showText.addEventListener('click', () => {
  hiddenText.classList.toggle('header__hiddenText--showing');

  if (hiddenText.className === 'header__hiddenText') {
    showText.innerHTML = 'Learn more';
  } else {
    showText.innerHTML = 'Hide';
  }
}
);

nextSlide.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].className = 'header__background';
    slideNumbers[currentSlide].className = 'header__number';

    currentSlide++;

    slides[currentSlide].className = `
      header__background header__background-showing
    `;

    slideNumbers[currentSlide].className = `
      header__number header__number--active
    `;

    nextSlide.classList.remove('header__switchNext--passive');
    prevSlide.classList.remove('header__switchPrev--passive');

    nextSlide.classList.add('header__switchNext--active');
    prevSlide.classList.add('header__switchPrev--active');

    if (currentSlide === slides.length - 1) {
      nextSlide.classList.add('header__switchNext--passive');
      prevSlide.classList.add('header__switchPrev--active');

      prevSlide.classList.remove('header__switchPrev--passive');
      nextSlide.classList.remove('header__switchNext--active');
    }
  }
}
);

prevSlide.addEventListener('click', () => {
  if (currentSlide > 0) {
    slides[currentSlide].className = 'header__background';
    slideNumbers[currentSlide].className = 'header__number';
    currentSlide--;

    slides[currentSlide].className = `
      header__background header__background-showing
    `;

    slideNumbers[currentSlide].className = `
      header__number header__number--active
    `;

    nextSlide.classList.remove('header__switchNext--passive');
    prevSlide.classList.remove('header__switchPrev--passive');

    nextSlide.classList.add('header__switchNext--active');
    prevSlide.classList.add('header__switchPrev--active');

    if (currentSlide === 0) {
      nextSlide.classList.remove('header__switchNext--passive');
      prevSlide.classList.remove('header__switchPrev--active');

      nextSlide.classList.add('header__switchNext--active');
      prevSlide.classList.add('header__switchPrev--passive');
    }
  }
}
);

for (const link of navLink) {
  link.addEventListener('click', () => {
    nav.classList.toggle('header__wrapper--active');
    toggler.classList.toggle('header__burger--active');
  });
}

showProduct.addEventListener('click', () => {
  for (const product of hiddenProduct) {
    product.classList.toggle('product--hidden');

    if (product.className.includes('product--hidden')) {
      showProduct.innerHTML = 'All bakeries';
    } else {
      showProduct.innerHTML = 'Hide';
    }
  }
}
);
