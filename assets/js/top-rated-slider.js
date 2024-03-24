var swiper = new Swiper('.rated-slider', {
    slidesPerView: 3,
    spaceBetween: 8,
    slidesPerGroup: 1,
        direction: 'vertical',
        effect: 'slide',
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.rated-next',
        },
        
      });
  
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
        return direction;
      }