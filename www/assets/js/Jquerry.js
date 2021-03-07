
jQuery(document).ready(function($) {

    $("#c1").on("click", function() {
        ($("#c1").toggleClass("pill"));

        if($("#c1").hasClass("pill")) {
            $(".about_middle").css( "display", "none" );
        }
        else{
            $(".about_middle").css( "display", "block" );
        }
    });
    $("#c2").on("click", function() {
        ($("#c2").toggleClass("pill"));

        if($("#c2").hasClass("pill")) {
            $(".about_middle").css( "display", "none" );
        }
        else{
            $(".about_middle").css( "display", "block" );
        }
    });
    $("#c3").on("click", function() {
        ($("#c3").toggleClass("pill"));

        if($("#c3").hasClass("pill")) {
            $(".about_middle").css( "display", "none" );
        }
        else{
            $(".about_middle").css( "display", "block" );
        }
    });
    $("#c4").on("click", function() {
        ($("#c4").toggleClass("pill"));

        if($("#c4").hasClass("pill")) {
            $(".about_middle").css( "display", "none" );
        }
        else{
            $(".about_middle").css( "display", "block" );
        }
    });
    
});

