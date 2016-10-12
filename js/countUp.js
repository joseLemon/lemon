$(window).scroll(function() {
    var $countups = $('.countUp');
    if( $countups.visible(true, false, 'vertical') ) {    
        $countups.each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text()}).animate({
                countNum: countTo
            } , {
                duration: 4000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });  
        });
    }
});