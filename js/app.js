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
var body = document.querySelector('html')
button.addEventListener('click',function(){
    body.classList.toggle('over')
})