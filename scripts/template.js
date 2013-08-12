var counter = 0;
var highlightArray

// $('.lin-growth col-lg-7').children().each(function() {
//   highlightArray = $(this)[counter];
//   counter = counter + 1;
// });

var colorHold;

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
	}
});