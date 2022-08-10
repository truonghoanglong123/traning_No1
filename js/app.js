// var menu = document.querySelector(".section-menu")
// var fixed = document.querySelector('.fixed')
// window.addEventListener('scroll',function(){
//     // console.log(window.pageYOffset)
//     if(window.pageYOffset > 480){  
//         menu.classList.add('fixed')
//     }else{
//         menu.classList.remove('fixed')
//     }
// })

//////


var button = document.querySelector('.nav__button')
var body = document.querySelector('body')
var nav = document.querySelector('.nav-menu')
button.addEventListener('click',function(){
    body.classList.toggle('over');
    body.classList.add('top');
    nav.classList.toggle('displaymenu');
    window.scrollTo(0,3000);
})

//////
// function scrollWin() {
//     body.scrollTo(0,(window.pageYOffset));
// }
// console.log(window.pageYOffset);
// var top = window.pageYOffset;