$(document).ready(function () {
    
    $(".navbar-toggler").addClass("open_button");
    console.log("open")
    
    $(".navbar-toggler").on('click', function(){
        var atr = $(this).attr("aria-expanded");
        if(atr == "false"){
            $(".navbar-toggler").addClass("close_button");
            $(".navbar-toggler").removeClass("open_button");
        }
        if(atr == "true"){
            $(".navbar-toggler").addClass("open_button");
            $(".navbar-toggler").removeClass("close_button");
        }
    })
});
