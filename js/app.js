let close_nav=document.querySelector('.close-mobile-nav');
let hamber_menu=document.querySelector('.hamber-menu');
let mobile_nav=document.querySelector('.mobile-nav');
let all=document.querySelector('.all');
hamber_menu.addEventListener('click',()=>{
    mobile_nav.classList.add('mobile-nav--open');
    all.classList.add('all--open');
})
console.log(close_nav);
close_nav.addEventListener('click',()=>{
    mobile_nav.classList.remove('mobile-nav--open');
    all.classList.remove('all--open');
    
})