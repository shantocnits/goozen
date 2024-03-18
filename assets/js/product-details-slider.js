var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },
    thumbs: {
      swiper: swiper,
    },
  });


// Quantity Start
$("button").on("click", function(ev) {
    var currentQty = $('input[name="quantity"]').val();
    var qtyDirection = $(this).data("direction");
    var newQty = 0;
    
    if (qtyDirection == "1") {
      newQty = parseInt(currentQty) + 1;
    }
    else if (qtyDirection == "-1") {
      newQty = parseInt(currentQty) - 1;
    }
  
    // make decrement disabled at 1
    if (newQty == 1) {
      $(".decrement-quantity").attr("disabled", "disabled");
    }
    
    // remove disabled attribute on subtract
    if (newQty > 1) {
      $(".decrement-quantity").removeAttr("disabled");
    }
    
    if (newQty > 0) {
      newQty = newQty.toString();
      $('input[name="quantity"]').val(newQty);
    }
    else {
      $('input[name="quantity"]').val("1");
    }
  });