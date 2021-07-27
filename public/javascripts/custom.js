
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

   //Trailor Btn
   const btn =document.querySelector('.trailor-btn');
   const videoContainer=document.querySelector('.video-container');
   const close =document.querySelector('.close');
   
   
   btn.addEventListener('click',()=>{
       videoContainer.classList.add('show')
   })
   close.addEventListener('click',()=>{
       videoContainer.classList.remove('show')
   })
   //Read More English 
   const btnenglish =document.querySelector('.readmore-btn-english');
   const storyContainerenglish=document.querySelector('.story-readmore-english');
   const closenglish =document.querySelector('.closee-english');
   
   
   btnenglish.addEventListener('click',()=>{
    storyContainerenglish.classList.add('show')
   })
   closenglish.addEventListener('click',()=>{
    storyContainerenglish.classList.remove('show')
   })
 