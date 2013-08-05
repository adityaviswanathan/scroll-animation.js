skrollr.init({ smoothScrolling: true });

function linGrowthRight(classListener, speed, size, color) {
	
	globalPosition = $(window).scrollTop();

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeSet = size * 10;

	var doubleSizeSet = 2 * sizeSet;


	$('.' + classListener).data(scrollPositionStart, "width: " + sizeSet + "px;");
	$('.' + classListener).data(scrollPositionEnd, "width: " + doubleSizeSet + "px;");
}

$('.scr-ani-dot').data('1', 'hello');


console.log($('.scr-ani-dot').data('1'));

