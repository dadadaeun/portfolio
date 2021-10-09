// main swipers
var bestSwiper = new Swiper(".swiper--best", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var foodsSwiper = new Swiper(".swiper--foods", {
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
  var openButton = document.querySelector('.header__button--menu');
  var closeButton = document.querySelector('.header__button--close');
  var menu = document.querySelector('.header__nav');
  var activeClass = 'is-active';

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

//visual animation
// 1. .visual__item 순서대로 하나씩 바뀐다. (월요일부터 is-active)
// 2. 점점 천천히 바뀐다.
// 3. .visual__item 중에서 오늘의 요일이 표시된다.
function visualAnimation() {
  var items = document.querySelectorAll('.visual__item');
  var today = new Date();
  var todayIndex = today.getDay();
  var currentIndex = 0;
  var maxCount = 6;
  var loopCount = 0;
  var duration = 50;

  var interval = setInterval(function() {
    loop();
  }, duration);

  function loop() {
     // 루프를 위해 인덱스 증가
     currentIndex++;

     // 일요일 다음에 월요일로 다시 돌린다.
     if(currentIndex === items.length) {
       items[items.length-1].classList.remove('is-active');
       currentIndex = 0;
 
       loopCount++;
       
       // maxCount 후에 interval 종료
       if(loopCount === maxCount) {
         items[items.length-1].classList.remove('is-active');
         items[todayIndex].classList.add('is-active');
 
         clearInterval(interval);
         return false;
       }
     }   
     // 월~일요일 차례대로 이전요일(is-active)을 삭제
     if(currentIndex > 0) {
       items[currentIndex-1].classList.remove('is-active');
     }
     // 월~일요일 차례대료 현재요일(is-active) 추가
     items[currentIndex].classList.add('is-active');
  }
}

document.addEventListener('DOMContentLoaded',function() {
  bestSwiper.update();
  foodsSwiper.update();

  menuToggle();
  visualAnimation();
})

window.addEventListener('resize', function() {
  bestSwiper.update();
  foodsSwiper.update();
})