
var globalPosition = 0;

var linGrowthHorizontal_core = {};
var linGrowthVertical_core = {};
var linGrowthScale_core = {};
var linTranslateRight_core = {};
var linTranslateLeft_core = {};
var linTranslateDown_core = {};
var linTranslateUp_core = {};
var linRotateClock_core = {};
var linRotateCounter_core = {};

/* TODO:

	synchronize global data with function-encapsulated property values

*/

linGrowthHorizontal_core.prop = ['width:'];
linGrowthHorizontal_core.suffix = ['px;'];

linGrowthVertical_core.prop = ['height:'];
linGrowthVertical_core.suffix = ['px;'];

linGrowthScale_core.prop = ['width:','height:'];
linGrowthScale_core.suffix = ['px;', 'px;'];

linTranslateRight_core.prop = ['margin-left:'];
linTranslateRight_core.suffix = ['px;'];

linTranslateLeft_core.prop = ['margin-right:'];
linTranslateLeft_core.suffix = ['px;'];

linTranslateDown_core.prop = ['margin-top:'];
linTranslateDown_core.suffix = ['px;'];

linTranslateUp_core.prop = ['margin-bottom:'];
linTranslateUp_core.suffix = ['px;'];

linRotateClock_core.prop = ['transform: rotate(', '-ms-transform: rotate(', '-webkit-transform: rotate('];
linRotateClock_core.suffix = ['deg);', 'deg);', 'deg);'];

linRotateCounter_core.prop = ['transform: rotate(-', '-ms-transform: rotate(-', '-webkit-transform: rotate(-'];
linRotateCounter_core.suffix = ['deg);', 'deg);', 'deg);'];

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

}

function linTranslateRight(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of translation, color of unit

	$('.' + classListener).css('float', 'left');

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

	$('.' + classListener).attr('data-' + scrollPositionStart, "margin-left:0px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "margin-left:" + doubleSizeSet + "px;");
}

function linTranslateLeft(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of translation, color of unit

	$('.' + classListener).css('float', 'right');

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

	$('.' + classListener).attr('data-' + scrollPositionStart, "margin-right:0px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "margin-right:" + doubleSizeSet + "px;");
}

function linTranslateDown(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of translation, color of unit

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

	$('.' + classListener).attr('data-' + scrollPositionStart, "margin-top:0px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "margin-top:" + doubleSizeSet + "px;");
}

function linTranslateUp(classListener, classAdd, size, speed, distance, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, length of translation, color of unit

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

	$('.' + classListener).attr('data-' + scrollPositionStart, "margin-bottom:0px;");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "margin-bottom:" + doubleSizeSet + "px;");
}

function linRotateClock(classListener, classAdd, size, speed, magnitude, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, coefficient to apply to full revolution, color of unit

	$('.' + classListener).addClass(classAdd);

	var unitSize = size * 10;	

	var coefficient = magnitude * 360;

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('background-color', color);

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "transform: rotate(0deg);-ms-transform: rotate(0deg);-webkit-transform: rotate(0deg);");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "transform: rotate(" + coefficient + "deg);-ms-transform: rotate(" + coefficient + "deg);-webkit-transform: rotate(" + coefficient + "deg);");
}

function linRotateCounter(classListener, classAdd, size, speed, magnitude, color) { //class to apply settings to, class to create (custom), size of unit, low = fast, coefficient to apply to full revolution, color of unit

	$('.' + classListener).addClass(classAdd);

	var unitSize = size * 10;	

	var coefficient = magnitude * 360;

	$('.' + classListener).css('height', unitSize+'px');
	$('.' + classListener).css('width', unitSize+'px');
	$('.' + classListener).css('background-color', color);

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeInit = $("." + classListener).width();

	$('.' + classListener).attr('data-' + scrollPositionStart, "transform: rotate(0deg);-ms-transform: rotate(0deg);-webkit-transform: rotate(0deg);");
	$('.' + classListener).attr('data-' + scrollPositionEnd, "transform: rotate(-" + coefficient + "deg);-ms-transform: rotate(-" + coefficient + "deg);-webkit-transform: rotate(-" + coefficient + "deg);");
}

function joinAnimations(classListener, classAdd, size, animationsArray) { // animation property of animationsArray must be raw text, not string bounded by ""

	var animationCount = animationsArray.length;

	$('.' + classListener).addClass(classAdd);

	var unitSize = size * 10;	

	$('.' + classListener).css('height', unitSize +'px');
	$('.' + classListener).css('width', unitSize +'px');

	globalPosition = $('.' + classListener).offset().top - 150;

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + 100;

	var animationHolder = [];

	var suffixHolder = [];

	var speedHolder = [];

	var magHolder = [];

	var scrollStartString = [];

	var scrollEndString = [];

	for(var k = 0; k < animationCount; k++) {
		
		animationHolder.push(animationsArray[k].animation);

		suffixHolder.push(animationsArray[k].suffix);

		/* 

		TODO: get correct object property from animationsArray

		*/

		console.log(animationsArray[k].animation[0]);

		speedHolder.push(animationsArray[k].speed);

		magHolder.push(animationsArray[k].magnitude);

	}

	console.log(animationHolder);

	var propSet = '';

	for(var k = 0; k < animationHolder.length; k++) {

		for(var l = 0; l < animationHolder[k].length; l++) {

			propSet += animationHolder[k][l] + unitSize + suffixHolder[k][l];
		}
	}

	console.log(propSet);

	$('.' + classListener).attr('data-' + scrollPositionStart, propSet);
	$('.' + classListener).attr('data-' + scrollPositionEnd, propSet);
}

linGrowthHorizontal('scr-ani-dot-1', 'scr-ani-circle', 3, 0.25, 20, '#ddd');

linGrowthHorizontal('scr-ani-dot-2', 'scr-ani-square-right',  0.5, 1, 30, '#333333');

linGrowthVertical('scr-ani-dot-3', 'scr-ani-circle-right',  1.5, 1, 10, '#009974');

linGrowthVertical('scr-ani-dot-4', 'scr-ani-square',  1.5, 1, 8, '#bcd4d4');

linGrowthScale('scr-ani-dot-5', 'scr-ani-square', 1, 1, 5, '#ddd');

linGrowthScale('scr-ani-dot-6', 'scr-ani-circle-right', 2, 2, 7, '#333');

linTranslateRight('scr-ani-dot-7', 'scr-ani-circle', 3, 2, 10, '#333');

linTranslateLeft('scr-ani-dot-8', 'scr-ani-square-right', 1, 0.5, 10, '#563D7C');

linTranslateDown('scr-ani-dot-9', 'scr-ani-circle-right', 2, 1.5, 15, '#ddd');

linRotateClock('scr-ani-dot-11', 'scr-ani-square', 3, 1.5, 1, '#ddd');

// linRotateCounter('scr-ani-dot-12', 'scr-ani-square-right', 2, 1.25, 5, '#bcd4d4');

joinAnimations('scr-ani-dot-12', 'scr-ani-square-right', 2, [{ animation: linRotateCounter_core.prop, suffix: linRotateCounter_core.suffix, speed: 1.5, magnitude: 2 }, { animation: linGrowthScale_core.prop, suffix: linGrowthScale_core.suffix, speed: 1.5, magnitude: 2 }]);

skrollr.init({ smoothScrolling: true });



