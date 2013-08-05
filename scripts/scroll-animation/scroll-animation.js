
var globalPosition = 0;

function linGrowthRight(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of extension, color of unit
	
	$('.' + classListener).addClass(classAdd);

	globalPosition = $(window).scrollTop();

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	var sizeSet = distance * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');

	$( "." + classAdd).attr('data-' + scrollPositionStart, "width:" + unitSize + "px;");
	$( "." + classAdd ).attr('data-' + scrollPositionEnd, "width:" + doubleSizeSet + "px;");

}

linGrowthRight('scr-ani-dot-1', 'scr-ani-dot-new-1', 5, 0.25, 50, '#333333');

linGrowthRight('scr-ani-dot-2', 'scr-ani-dot-new-2',  1, 0.25, 1, '#333333');


skrollr.init({ smoothScrolling: true });



