
var globalPosition = 0;

function linGrowthHorizontal(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of extension, color of unit
	
	$('.' + classListener).addClass(classAdd);

	var sizeSet = distance * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('background-color', color);

	globalPosition = $(window).scrollTop();

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "width:" + unitSize + "px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "width:" + doubleSizeSet + "px;");

}

function linGrowthVertical(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of extension, color of unit
	
	$('.' + classListener).addClass(classAdd);

	var sizeSet = distance * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('background-color', color);

	globalPosition = $(window).scrollTop();

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "height:" + unitSize + "px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "height:" + doubleSizeSet + "px;");

}

linGrowthHorizontal('scr-ani-dot-1', 'scr-ani-circle', 3, 0.25, 20, '#ddd');

linGrowthHorizontal('scr-ani-dot-2', 'scr-ani-dot-right',  0.5, 1, 30, '#333333');

linGrowthVertical('scr-ani-dot-3', 'scr-ani-circle-right',  1.5, 1, 10, '#009974');

linGrowthVertical('scr-ani-dot-4', 'scr-ani-dot',  1.5, 1, 8, '#bcd4d4');


skrollr.init({ smoothScrolling: true });



