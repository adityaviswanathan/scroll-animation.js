REPO README

UNIT DEFAULT STYLES (CSS LIBRARY):

.scr-ani-square { //default unit square
    background: black;
}

.scr-ani-square-right { //default unit square, float right
    background: black;
    float: right;
}

.scr-ani-circle { //default unit circle
    background: black;
    border-radius: 50px;
}

.scr-ani-circle-right { //default unit circle, float right
    background: black;
    border-radius: 5000px;
    float: right;
}

TO START:

1. linGrowth function

	a) Initialize with div:

		ex. <div class="test"></div>

	b) Assign animation parameters to div (in JS):

		ex. <script>

			//linGrowthRight(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linGrowthRight('test', 'scr-ani-dot', 5, 0.25, 50, '#ddd');

			</script>

	c) Using 'scr-ani-dot-right' will align animation to the right:
	
		ex. <script>

			//linGrowthRight(class to assign, class to add, size of unit, speed of animation, distance for animation to travel, color of unit)

			linGrowthRight('test', 'scr-ani-dot-right', 5, 0.25, 50, '#ddd');

			</script>		



