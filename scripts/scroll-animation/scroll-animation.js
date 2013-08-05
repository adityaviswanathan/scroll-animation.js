

function linGrowthRight(classListener, distance, speed, size, color) {
	
	globalPosition = $(window).scrollTop();

	var scrollPositionStart = globalPosition;

	var scrollPositionEnd = scrollPositionStart + (speed * 100);

	var sizeSet = size * 10;

	var doubleSizeSet = 2 * sizeSet;

	$( ".scr-ani-dot" ).attr('data-' + scrollPositionStart, "width:" + sizeSet + "px;");
	$( ".scr-ani-dot" ).attr('data-' + scrollPositionEnd, "width:" + doubleSizeSet + "px;");


	// $('.' + classListener).data(scrollPositionStart, "width: " + sizeSet + "px;");
	// $('.' + classListener).data(scrollPositionEnd, "width: " + doubleSizeSet + "px;");
}

linGrowthRight('scr-ani-dot', 0, 0.25, 1, '#333333');

// $('.scr-ani-dot').data('1', 'hello');


// console.log($('.scr-ani-dot').data('1'));



// $( ".scr-ani-dot" ).attr('data-' + 1, "width: " + 0 + "px;");
// $( ".scr-ani-dot" ).attr('data-' + 100, "width: " + 0 + "px;");

skrollr.init({ smoothScrolling: true });



