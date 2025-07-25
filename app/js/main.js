$(function () {
    $(".slider-header").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
       
      });


    $(".daughters-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
       
      });


    $(".safety-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
       
      });


    $(".updates-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
       
      });


    $(".story-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
       
      });


        $('.questions-accardion__btn').on('click', function(){
          $(this).next().slideToggle(500); 
          $(this).toggleClass("active-btn");
     });
})