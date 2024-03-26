var swiper = new Swiper('.deal-slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    slidesPerGroup: 1,
        direction: 'vertical',
        effect: 'slide',
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".deal-next",
            prevEl: ".deal-prev",
          },
        
      });
  
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
  
        return direction;
      }