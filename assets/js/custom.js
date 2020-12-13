/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 140) {
        $('.l_nav').addClass('fixed-header');
    }
    else {
        $('.l_nav').removeClass('fixed-header');
    }
});
