var counter = 0;
var highlightArray

// $('.lin-growth col-lg-7').children().each(function() {
//   highlightArray = $(this)[counter];
//   counter = counter + 1;
// });

var colorHold;

/* START TITLE CHANGER */

window.onscroll = function() {
	var checker1 = $('.navbar-brand').scrollTop();
	var current = $(document).scrollTop();
	

	if(current > 140) {
		$('.navbar-brand').html('animation');
		$('.nav li').fadeOut();
		$('.navbar').css('opacity', '0.6');
		console.log(current);
	} else {
		$('.navbar-brand').html('scroll-animation.js');
		$('.nav li').fadeIn();
		$('.navbar').css('opacity', '0.9');
	}
}

/* END TITLE CHANGER */

/* START HOVER EFFECTS FOR CODE SNIPPETS */

$('.effect-listen').hover(function() {
	console.log('hi');
	if($(this).hasClass('effect-1')) {
		colorHold = $('.scr-ani-dot-1').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-1').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-2')){
		colorHold = $('.scr-ani-dot-2').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-2').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-3')) {
		colorHold = $('.scr-ani-dot-3').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-3').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-4')) {
		colorHold = $('.scr-ani-dot-4').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-4').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-5')) {
		colorHold = $('.scr-ani-dot-5').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-5').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-6')) {
		colorHold = $('.scr-ani-dot-6').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-6').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-7')) {
		colorHold = $('.scr-ani-dot-7').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-7').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-8')) {
		colorHold = $('.scr-ani-dot-8').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-8').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-9')) {
		colorHold = $('.scr-ani-dot-9').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-9').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-10')) {
		colorHold = $('.scr-ani-dot-10').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-10').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-11')) {
		colorHold = $('.scr-ani-dot-11').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-11').css('background-color', '#f2f0c9');
	} else if($(this).hasClass('effect-12')) {
		colorHold = $('.scr-ani-dot-12').css('background-color');
		$(this).css('background-color', '#f2f0c9');
		$('.scr-ani-dot-12').css('background-color', '#f2f0c9');
	}

}, function() {
	if($(this).hasClass('effect-1')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-1').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-2')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-2').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-3')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-3').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-4')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-4').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-5')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-5').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-6')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-6').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-7')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-7').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-8')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-8').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-9')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-9').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-10')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-10').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-11')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-11').css('background-color', colorHold);
	} else if ($(this).hasClass('effect-12')) { 
		$(this).css('background-color', '#fff');
		$('.scr-ani-dot-12').css('background-color', colorHold);
	}
});

/* END HOVER EFFECTS FOR CODE SNIPPETS */

