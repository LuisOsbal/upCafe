/*	Toggle navigation button.	*/
$('button').on('click', function() {
	$(this).toggleClass('isActive');
});

/*	Show and hide mobile menu.	*/
// $(function () {
//     var buttonMobile =  $(".Menu-mobileButton"),
//         menu         =  $(".Menu-list");
//     buttonMobile.on('click', function (e) {
//         e.preventDefault();
//         menu.toggleClass('isActiveMenu');
//     });
// });
