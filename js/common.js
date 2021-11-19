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

  
document.addEventListener('DOMContentLoaded',function() {
    menuToggle();
    
    new WOW().init();
})