$('.smoothscroll').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, {
        duration: 500,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
        }
    });
});