let ham = document.getElementsByClassName('ham');
let cross = document.getElementsByClassName('cross');
let aside = document.getElementsByClassName('aside');
let hamburger = document.querySelector('.hamburger');
 cross[0].style.display ='none';
  hamburger.addEventListener("click",()=>{
   aside[0].classList.toggle('asidego');
   if(aside[0].classList.contains('asidego')){
      cross[0].style.display ='none';
      ham[0].style.display = 'inline';
   }
   else {
      ham[0].style.display = 'none';
      setTimeout(() => {
         cross[0].style.display ='inline';
         
      }, 300);
   }
  } )































    // if(ham.style.display 
    //     == 'inline' ){
    //     ham[0].addeventListner('click', ()=>{
    //         aside.style.display = 'inline';
    //         ham.style.display = 'none';
    //         cross.style.display ='inline';
    //      })
    // }
    // else {

    //     cross[0].addeventListner('click', ()=>{
    //        aside.style.display = 'none';
    //        ham.style.display = 'inline';
    //        cross.style.display ='none';
    //     })
       
    // }
