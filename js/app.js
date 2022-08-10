var menu = document.querySelector(".section-menu")
var fixed = document.querySelector('.fixed')
var section_news = document.querySelector('.section-news')
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset)
    if(window.pageYOffset > 600){  
        menu.classList.add('fixed')
        menu.classList.add('hideshow')
        section_news.classList.add('gat')
        
    }else{
        menu.classList.remove('fixed')
        menu.classList.remove('hideshow')
        section_news.classList.remove('gat')
    }
})

var button = document.querySelector('.nav__button')
var icon = document.querySelector('.nav__button')
button.addEventListener('click',function(){
    icon.classList.toggle('chuyen')
})