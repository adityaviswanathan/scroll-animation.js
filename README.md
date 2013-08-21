REPO README

UNIT DEFAULT STYLES (CSS LIBRARY):

//default unit square
.scr-ani-square { 
    background: black;
}

//default unit square, float right
.scr-ani-square-right { 
    background: black;
    float: right;
}

//default unit circle
.scr-ani-circle { 
    background: black;
    border-radius: 50px;
}

//default unit circle, float right
.scr-ani-circle-right { 
    background: black;
    border-radius: 5000px;
    float: right;
}

TO START:

1. linGrowthHorizontal and linGrowthVertical functions

	a) Initialize with div:

		ex. <div class="test"></div>

	b) Assign animation parameters to div (in JS):

		ex. <script>

			//linGrowthHorizontal(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linGrowthHorizontal('test', 'scr-ani-dot', 5, 0.25, 50, '#ddd');

			</script>

		ex 2. <script>

			//linGrowthVertical(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linGrowthVertical('test', 'scr-ani-dot', 5, 0.25, 50, '#ddd');

			</script>

	c) Using 'scr-ani-dot-right' will align animation to the right:
	
		ex. <script>

			//linGrowthHorizontal(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linGrowthHorizontal('test', 'scr-ani-dot-right', 5, 0.25, 50, '#ddd');

			</script>

2. linGrowthScale function
	
	a) Initialize with div:

		ex. <div class="test"></div>

	b) Assign animation parameters to div (in JS):

		ex. <script>

			//linGrowthScale(class to apply settings to, class to create (custom), size of unit, low = fast, length of scale, color of unit)

			linGrowthScale('test', 'scr-ani-circle', 3, 0.25, 4, '#333');

			</script>

2. linTranslateRight, linTranslateLeft, and linTranslateDown functions
	
	a) Initialize with div:

		ex. <div class="test"></div>

	b) Assign animation parameters to div (in JS):

		ex. <script>

			//linTranslateRight(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linTranslateRight('test', 'scr-ani-circle', 3, 2, 10, '#333');

			</script>

		ex 2. <script>

			//linTranslateLeft(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			//using linTranslateLeft() with scr-ani-square-right to start translation from right side (not necessary)

			linTranslateLeft('test', 'scr-ani-square-right', 1, 0.5, 10, '#563D7C'); 

			</script>

		ex 3. <script>

			//linTranslateDown(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linTranslateDown('test', 'scr-ani-square', 1, 0.5, 10, '#563D7C'); 

			</script>

2. linRotateClock and linRotateCounter functions
	
	a) Initialize with div:

		ex. <div class="test"></div>

	b) Assign animation parameters to div (in JS):

		ex. <script>

			//linRotateClock(class to assign, class to add, size of unit, speed of animation, color of unit)

			linRotateClock('test', 'scr-ani-circle', 3, 2, '#333');

			</script>

		ex 2. <script>

			//linRotateCounter(class to assign, class to add, size of unit, speed of animation, color of unit)

			linRotateCounter('test', 'scr-ani-circle', 3, 2, '#333');

			</script>					


