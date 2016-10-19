//  Project slider init.
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

//  Active nav items
$('.navbar-nav li').click(function() {
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
});

//  Ajax contact form
$(function() {

    var close = '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
    // Get the form.
    var form = $('#contact-form');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        $('#form-output').append('<div class="message"></div>');
        // Get the messages div.
        var formMessages = $('#form-output .message');
        // Stop the browser from submitting the form.
        e.preventDefault();
        $("#form-submit").text("Enviando...");

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
            .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('alert alert-danger');
            $(formMessages).addClass('alert alert-success');

            // Set the message text.
            $(formMessages).html(close+response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#mssg').val('');
            $("#form-submit").text("Enviar");
        })
            .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('alert alert-success');
            $(formMessages).addClass('alert alert-danger');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).html(close+data.responseText);
                $("#form-submit").text("Enviar");
            } else {
                $(formMessages).html(close+'Oops! Ocurrió un error, intentelo nuevamente.');
                $("#form-submit").text("Enviar");
            }
        });

    });

});