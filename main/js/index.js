
$(document).ready(function () {
    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 500) {
        $('.main-header').addClass('visible-nav');
        } else {
        $('.main-header').removeClass('visible-nav');
        }
    });

    $(".about-s-title").click(function(e){
        e.preventDefault();    
        let selected = "#" +$(this).attr("id") + "-content";
        $('.content-text').removeClass('active-content');
        $('.about-s-title').removeClass('active');
        $(this).addClass('active');
        $(selected).addClass('active-content');
    });

});
 


