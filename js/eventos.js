// Mouse Events
/*
    1. click= when you click on the left button of the mouse
    2. dblclick= when you do double click on your mouse
    3. mouseenter= when the mouse enter in the area of th4 event
    4. mouseleave=when the mouse leaves the area of the event
    5. mousedown=when you press the left button of the mouse and dont release it
    6. mouseup= when you release the left button of the mouse
    7. mousemove= when you move the mouse
*/
//keyboard Events
    /*
    keydown= when you press a key
    keyup= when you release a key
    keypress=when you press a key and dont release it
    */

const button=document.querySelector('#button');
const box= document.querySelector('#box');
// 1  click= when you click on the left button of the mouse
// button.addEventListener('click',()=>console.log('click'))
//2  dblclick= when you do double click on your mouse
button.addEventListener('dblclick',()=>console.log('doble click'))
//3 mouseenter= when the mouse enter in the area of th4 event
box.addEventListener('mouseenter', ()=>box.classList.replace('red','green'))
//4. mouseleave=when the mouse leaves the area of the event
box.addEventListener('mouseleave',()=>box.classList.replace('green','red'))
//5. mousedown=when you press the left button of the mouse 
box.addEventListener('mousedown',()=>box.classList.add('yellow'))
//6. mouseup= when you release the left button of the mouse
box.addEventListener('mouseup',()=>box.classList.remove('yellow'))
//7. mousemove= when you move the mouse
box.addEventListener('mousemove',()=>console.log('estas moviendo el raton en la caja'))


