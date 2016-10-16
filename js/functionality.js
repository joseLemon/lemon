$('.slider').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
});

$('.navbar-nav li').click(function() {
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});