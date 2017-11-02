require('@wearejust/sticky');

const MIN_WIDTH = 940;
const $window = $(window);

let clone;
let element;
let timeout;
let cloneShown;

$(function() {
	element = $('.add_records');
	if (!element.length) return;

	element.attr('data-sticky-id', 'sticky_add_btn');

	clone = element.clone(true);
	clone.addClass('is-clone');
	clone.attr('data-sticky-target', 'sticky_add_btn');
	clone.hide();
	clone.appendTo('.navbar-collapse');
	clone.sticky({
		active: 'is-sticky',
		topHeightOffset: -1.1
	});

	$window.on('resize', resizeDelayed);
	resize();
});

function resizeDelayed() {
	clearTimeout(timeout);
	timeout = setTimeout(resize, 300);	
}

function resize() {
	if ($window.width() >= MIN_WIDTH) {
		if (!cloneShown) {
			cloneShown = true;
			clone.show();
		}
	} else if (cloneShown) {
		cloneShown = false;
		clone.hide();
		clone.css('left', '');
	}

	if (cloneShown) {
		clone.css('left', element.offset().left);
	}
}
