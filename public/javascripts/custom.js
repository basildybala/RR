
//LAZY LOAD
       const myLazyLoad= new LazyLoad ({
           elements_selector:".lazy-photo"
       });
   



//Read More popup
  const btnn =document.querySelector('.readmore-btn');
   const storyContainer=document.querySelector('.story-readmore');
   const closee =document.querySelector('.closee');
   
   
   btnn.addEventListener('click',()=>{
    storyContainer.classList.add('show')
   })
   closee.addEventListener('click',()=>{
    storyContainer.classList.remove('show')
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
 