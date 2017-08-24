require('@wearejust/sticky');

const MIN_WIDTH = 940;
const $window = $(window);

let clone;
let element;
let timeout;

$(function() {
	element = $('.add_records');
	if(!element.length) return;

	element.attr('data-sticky-id', 'sticky_add_btn');
	clone = element.clone(true).appendTo('.navbar-collapse');
	clone.addClass('is-clone');
	clone.css('left', element.offset().left);
	clone.attr('data-sticky-target', 'sticky_add_btn');

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
	if($window.width() >= MIN_WIDTH) {
		clone.css('left', element.not('.js-sticky').offset().left);
		clone.show();
	} else {
		clone.css('left', '');
		clone.hide();
	}
}