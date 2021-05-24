const form= document.querySelector('#form');
const input=document.querySelector('#input');
// =========return what is been typing on the input
    // input.addEventListener('keyup',()=>console.log(input.value))

// input.addEventListener('keyup',(event)=>{
//   console.log(event)
// })
const gallery=document.querySelector('#gallery');

gallery.addEventListener('click',(e)=>{
  console.log(e.target);
  e.target.classList.add('red');
})
