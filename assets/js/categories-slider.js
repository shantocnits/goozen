var swiper = new Swiper('.categories-slider', {
  slidesPerView: 5,
  spaceBetween: 17,
  slidesPerGroup: 1,
      direction: 'vertical',
      effect: 'slide',
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.categories-next',
      },
      
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
    