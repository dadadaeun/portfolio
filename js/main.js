var bestSwiper = new Swiper(".swiper--best", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var foodsSwiper = new Swiper(".swiper--foods", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  window.addEventListener('resize', function() {
    bestSwiper.update();
    foodsSwiper.update();
  })