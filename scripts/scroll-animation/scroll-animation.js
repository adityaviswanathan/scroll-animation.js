
var globalPosition = 0;

function linGrowthHorizontal(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of extension, color of unit
	
	$('.' + classListener).addClass(classAdd);

	var sizeSet = distance * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('background-color', color);

	globalPosition = $('.' + classListener).offset().top - 150;

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

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "height:" + unitSize + "px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "height:" + doubleSizeSet + "px;");

}

function linGrowthScale(classListener, classAdd, size, speed, maxSize, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of scale, color of unit
	
	$('.' + classListener).addClass(classAdd);

	var sizeSet = maxSize * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('background-color', color);

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "height:" + unitSize + "px; width:" + unitSize + "px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "height:" + doubleSizeSet + "px; width:" + doubleSizeSet + "px;");

	console.log(globalPosition);
}

function linTranslateRight(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of translation, color of unit

	$('.' + classListener).addClass(classAdd);

	var sizeSet = distance * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('position', 'absolute');
	$('.' + classListener).css('background-color', color);

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "left:15px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "left:" + doubleSizeSet + "px;");
}

function linTranslateLeft(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of translation, color of unit

	$('.' + classListener).addClass(classAdd);

	var sizeSet = distance * 10;

	var doubleSizeSet = 2 * sizeSet;

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('position', 'absolute');
	$('.' + classListener).css('background-color', color);

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "right:15px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "right:" + doubleSizeSet + "px;");
}

linGrowthHorizontal('scr-ani-dot-1', 'scr-ani-circle', 3, 0.25, 20, '#ddd');

linGrowthHorizontal('scr-ani-dot-2', 'scr-ani-square-right',  0.5, 1, 30, '#333333');

linGrowthVertical('scr-ani-dot-3', 'scr-ani-circle-right',  1.5, 1, 10, '#009974');

linGrowthVertical('scr-ani-dot-4', 'scr-ani-square',  1.5, 1, 8, '#bcd4d4');

linGrowthScale('scr-ani-dot-5', 'scr-ani-square', 1, 1, 5, '#ddd');

linGrowthScale('scr-ani-dot-6', 'scr-ani-circle-right', 2, 2, 7, '#333');

linTranslateRight('scr-ani-dot-7', 'scr-ani-circle', 2, 2, 10, '#333');

linTranslateLeft('scr-ani-dot-8', 'scr-ani-square', 1.5, 0.5, 25, '#333');

skrollr.init({ smoothScrolling: true });



