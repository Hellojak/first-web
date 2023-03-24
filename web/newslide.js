let slideImages =document.querySelectorAll('img');// access the imag
let next=document.querySelector('.next'); // access next button
let prev=document.querySelector('.prev'); //access prev
let dot=document.querySelector('.dot'); // access dots
var counter=0;
// code for next button
next.addEventListener('click',slideNext);
function slideNext(){
    slideImages[counter].style.animation='next1 0.5s ease-in forwards';
    if(counter>=slideImages.length-1){
        counter=0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation='next2 0.5s ease-in forwards';
}