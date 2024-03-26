var swiper = new Swiper('.selling-slider', {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 1,
        direction: 'vertical',
        effect: 'slide',
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.selling-next',
        },
        
      });
  
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
        return direction;
      }