$(window).scroll(function() {
    /* DETECT IF NAVBAR IS AT TOP */
    var $nav = $('.navbar');
    if( $(this).scrollTop() == 0 ) {
        $nav.removeClass('scrolling');
    } else if( !$nav.hasClass('scrolling') ) {
        $nav.addClass('scrolling');
    }
});