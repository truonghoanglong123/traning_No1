(function ($) {
    var foo = function() {
        $('.nav__button').on('click', function(){
            $(this).parents("body").find(".nav-menu").toggleClass('displaymenu');
            $(this).parents("body").find("body").toggleClass('over');
            if($(this).parents("body").hasClass("over")){
                $("body").css({'top': 0});
                $("body").removeClass("over");
                var top = $(this).attr('id');
                $(window).scrollTop(top);
                console.log("if");
            } else {
                var top = $(window).scrollTop();
                $("body").addClass("over");
                $("body").css({'top': "-"+top+"px"});
                $(this).attr('id', top);
                console.log("else");   
            }
        })
    }

    $(function () {
        foo();
    });

})(jQuery);

// if($("this").parents("body").hasClass("over")){
//     $("body").css({'top': 0});
//     var top = $(window).scrollTop(top)
//     $("body").removeClass("over"); 
//     console.log(top);
//     console.log("if");
// } else {
    
//     var top = $(window).scrollTop();
//     // $("body").addClass('over')
//     $("body").css({'top': "-"+top+"px"});
//     console.log(top);
//     console.log("else");
// }