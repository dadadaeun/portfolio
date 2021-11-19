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

function visualAnimation() {
  new SlowingDownRotation({
    wrapperElement: document.querySelector('.visual'),
    targetElement: document.querySelector('.visual__list'),
    itemElements: document.querySelectorAll('.visual__item'),
    speed: 100,
    stopIndex : 4,
    playCount: 3,
    autoStart: true,
  }).init();
}

document.addEventListener('DOMContentLoaded',function() {
  bestSwiper.update();
  foodsSwiper.update();

  visualAnimation();

  new WOW().init();
})

window.addEventListener('resize', function() {
  bestSwiper.update();
  foodsSwiper.update();
})