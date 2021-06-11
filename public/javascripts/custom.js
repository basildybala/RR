
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


 