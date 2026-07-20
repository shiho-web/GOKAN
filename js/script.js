const menuBtn =document .querySelector('.menu-btn');
const menu=document.querySelector('.menu');
menuBtn.addEventListener('click',function(){
    menu.classList.toggle('open'); 
    menuBtn.classList.toggle('open');
 });
 

