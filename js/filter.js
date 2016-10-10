$(function(){
    $(".kategori li").click(function(){
        var listerine = $(this).html();
        $(".kategori li" ).removeClass("active");
        $(this).addClass("active");
        $("#portfolio li").hide();

        $("#portfolio li").each(function(){
            if($(this).hasClass(listerine))
            $(this).fadeIn();
        });
        // $("#overlay").hide();
        // $("#frame").hide();
        // $(".main").hide();
    });

    $(".navMenu h2").click(function(){
        $("#portfolio li").fadeIn();
    });

});