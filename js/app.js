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


// var top = window.pageYOffset
// console.log(top);
var button = document.querySelector('.nav__button')
var body = document.querySelector('body')
var nav = document.querySelector('.nav-menu')
button.addEventListener('click',function(){
    nav.classList.toggle('displaymenu');
    if($(this).hasClass("over")){
        $("body").css({'top': 0});
        $("body").removeClass("over");
        $(window).scrollTop(top);
        console.log("top");

      } else {
        body.classList.toggle('over');
        var top = $(window).scrollTop();
        var top = $(this).attr('id');
        $("body").css({'top': "-"+top+"px"});
        $(this).attr('id', top);
        console.log(top);

      }
    
})







// window.addEventListener('scroll',function(){
//     return x = window.pageYOffset
//     button.addEventListener('click',function(){
//         window.scrollTo(0,x);
//     })
// })


//////
// function scrollWin() {
//     body.scrollTo(0,(window.pageYOffset));
// }
// console.log(window.pageYOffset);
// var top = window.pageYOffset;