$('.slider').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
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

$('.portafolio-project').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});