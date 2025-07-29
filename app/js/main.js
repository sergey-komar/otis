$(function () {
    $(".slider-header").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 550,
              settings: {
                arrows: false,
                dots: true
              }
            },
           
          ]
       
      });


    $(".daughters-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 968,
              settings: {
               slidesToShow: 1,
              }
            },
           
          ]
       
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


window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".menu");
  const mobile = document.querySelector(".nav-icon");

    mobile.addEventListener("click", function () {
      this.classList.toggle("nav-icon--active");
      menu.classList.toggle("nav--active");
      document.body.classList.toggle('overflow')
    });
})