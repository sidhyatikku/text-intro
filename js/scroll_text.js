$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 80) {
            $(".mirror").addClass("active");
        } else {
           $(".mirror").removeClass("active");
        }
    });
});
