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
         responsive: [
            {
              breakpoint: 1200,
              settings: {
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
               slidesToShow: 1,
              }
            },
           
          ]
       
      });


    $(".updates-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 1250,
              settings: {
               slidesToShow: 3,
              }
            },
            {
              breakpoint: 950,
              settings: {
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 650,
              settings: {
               slidesToShow: 1,
              }
            },
           
          ]
       
      });


    $(".story-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
         responsive: [
            {
              breakpoint: 1250,
              settings: {
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 850,
              settings: {
               slidesToShow: 1,
              }
            },
           
          ]
       
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


     const btn = document.querySelector('.btnUp');
      const headerWrapper = document.querySelector('.header');

        if(btn){
           btn.addEventListener('click', ()=>{
            window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
            });
          });
        }
       
        function up() {


            
        window.addEventListener('scroll', () => {
            if(window.scrollY > 690){
            btn.classList.add('btnUp-visible');
            headerWrapper.classList.add('box-shadow');
            }else{
            btn.classList.remove('btnUp-visible');
            headerWrapper.classList.remove('box-shadow');
            }
        })
        }
        up();



})