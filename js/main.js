// main swipers
const bestSwiper = new Swiper(".swiper--best", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const foodsSwiper = new Swiper(".swiper--foods", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination--foods",
    clickable: true,
  },
});

//menu toggle
// 1. .header__button--menu 를 누르면 메뉴가 열린다. (단, 메뉴가 닫혀있을 때 == is-active 클래스가 없을때)
// 2. .header__button--close 를 누르면 메뉴가 닫힌다. (단, 메뉴가 열려있을 때)
function menuToggle() {
  const openButton = document.querySelector('.header__button--menu');
  const closeButton = document.querySelector('.header__button--close');
  const menu = document.querySelector('.header__nav');
  const activeClass = 'is-active';

  openButton.addEventListener('click', function() {
    if(!menu.classList.contains(activeClass)) {
      menu.classList.add(activeClass);
    }
  })

  closeButton.addEventListener('click',function(){
    if(menu.classList.contains(activeClass)){
      menu.classList.remove(activeClass);
    }
  })
}

function visualAnimation() {
  const roulette = new slowingDownRotation({
    wrapperElement: document.querySelector('.visual'),
    targetElement: document.querySelector('.visual__list'),
    itemElements: document.querySelectorAll('.visual__item'),
    speed: 100,
    stopIndex : 4,
    playCount: 3,
    autoStart: true,
  })
  roulette.init();
}

document.addEventListener('DOMContentLoaded',function() {
  bestSwiper.update();
  foodsSwiper.update();

  menuToggle();
  //visualAnimation();
})

window.addEventListener('resize', function() {
  bestSwiper.update();
  foodsSwiper.update();
})