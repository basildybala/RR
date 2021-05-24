
       const myLazyLoad= new LazyLoad ({
           elements_selector:".lazy-photo"
       });
   


//Trailor Popup
   const btn =document.querySelector('.trailor-btn');
   const videoContainer=document.querySelector('.video-container');
   const close =document.querySelector('.close');
   
   
   btn.addEventListener('click',()=>{
       videoContainer.classList.add('show')
   })
   close.addEventListener('click',()=>{
       videoContainer.classList.remove('show')
   })


//Swiper 4 Show

$(document).ready(function () {
    // Swiper: Slider
    new Swiper(".swiper-containerr", {
      loop: true,
    //   nextButton: ".swiper-button-next",
    //   prevButton: ".swiper-button-prev",
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 20,
      breakpoints: {
        1920: {
          slidesPerView: 10,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 10,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 4,
          spaceBetween: 0 ,
        },
      },
    });
  });
 //VIDEO SWIPER 1 Show
  $(document).ready(function () {
    // Swiper: Slider
    new Swiper(".swiper-container", {
      loop: true,
    //   nextButton: ".swiper-button-next",
    //   prevButton: ".swiper-button-prev",
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 20,
      breakpoints: {
        1920: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        380: {
          slidesPerView: 1,
          spaceBetween: 2 ,
        },
      },
    });
  });
 