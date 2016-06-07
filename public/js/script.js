// $(function() {
//     $(".rslides").responsiveSlides();
//   });


/*	Toggle navigation button.	*/
$('button').on('click', function() {
	$(this).toggleClass('isActive');
});

/*	Show and hide mobile menu.	*/
$(function () {
    var buttonMobile =  $(".Header-mobileButton"),
        menu         =  $(".Menu-list");
    buttonMobile.on('click', function (e) {
        e.preventDefault();
        menu.toggleClass('isActiveMenu');
    });
});

// // You can also use "$(window).load(function() {"
//     $(function () {
//       // Slideshow 2
//       $("#slider2").responsiveSlides({
//         auto: true,             // Boolean: Animate automatically, true or false
//         speed: 500,            // Integer: Speed of the transition, in milliseconds
//         timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
//         pager: false,
//         manualControls: ""
//       });

//     });


/*  It allows the transition of photos of the main gallery (slider.)  */
$(document).ready(function() {
    var time = setInterval(function(){SliderNextImage();}, 8000);
    $('#btnBack').click(function() {
        var size = $('.Slider-container').find('.Slider-image').size();
        $('.Slider-container').find('.Slider-image').each(function (index,value){
            if ($(this).hasClass('Slider-visible')) {
                $(this).slideUp();
                $(this).removeClass('Slider-visible');
                if (index == 0) {
                    $($('.Slider-container').find('.Slider-image').get(size - 1)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(size - 1)).addClass('Slider-visible');

                    return false;
                }   else {
                    $($('.Slider-container').find('.Slider-image').get(index - 1)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(index - 1)).addClass('Slider-visible');
                    return false;
                }
            };
        });
    });
    $('#btnNext').click(function() {
        var size = $('.Slider-container').find('.Slider-image').size();
        $('.Slider-container').find('.Slider-image').each(function (index,value){
            if ($(this).hasClass('Slider-visible')) {
                $(this).slideUp();
                $(this).removeClass('Slider-visible');
                if (index + 1 < size) {
                    $($('.Slider-container').find('.Slider-image').get(index + 1)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(index + 1)).addClass('Slider-visible');
                    return false;
                }   else {
                    $($('.Slider-container').find('.Slider-image').get(0)).fadeIn();
                    $($('.Slider-container').find('.Slider-image').get(0)).addClass('Slider-visible');
                    return false;
                }
            };
        });
    });
});
function SliderNextImage () {
    var size = $('.Slider-container').find('.Slider-image').size();
    $('.Slider-container').find('.Slider-image').each(function (index, value) {
        if ($(this).hasClass('Slider-visible')) {
            $(this).slideUp();
            $(this).removeClass('Slider-visible');

            /*  Animacion de imagenes segundarias   */
            $('.bounceInUp').addClass('animated bounceInUp');
            $('.bounceInDown').addClass('animated bounceInDown');

            if (index + 1 < size) {
                $($('.Slider-container').find('.Slider-image').get(index + 1)).fadeIn();
                $($('.Slider-container').find('.Slider-image').get(index + 1)).addClass('Slider-visible');
                return false;
            }   else {
                $($('.Slider-container').find('.Slider-image').get(0)).fadeIn();
                $($('.Slider-container').find('.Slider-image').get(0)).addClass('Slider-visible');
                return false;
            };
        };
    });
};

