(function ($) {
    function foo() {
        $('.nav__button').on('click', function(){
            $(this).parents("body").find(".nav-menu").toggleClass('displaymenu');
            $(this).parents("body").toggleClass('over');
            if($("body").hasClass("over")){
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
    }

    $(function () {
        foo();
    });

})(jQuery);