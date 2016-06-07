$(function() {
    $(".rslides").responsiveSlides();
  });


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

// You can also use "$(window).load(function() {"
    $(function () {
      // Slideshow 2
      $("#slider2").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 500,            // Integer: Speed of the transition, in milliseconds
        timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
        pager: false,
        manualControls: ""
      });

    });