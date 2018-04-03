let $window = $(window);
let wrapper,
 	element,
 	topOffset,
 	elementTop,
 	fixed;

 const MIN_WIDTH = 940;

$(()=>{
	element = $('.sonata-action-element');
	if(!element.length) return;

	element.css({
		'min-width': element.outerWidth(),
		'left': element.offset().left
	});

	elementTop = element.offset().top;

	$window.on('resize', resize);
	$window.on('scroll', scroll);
	resize();
});


function resize() {
	element.css({
		'position': 'static'
	});
	scroll();
}

function scroll() {
	topOffset = $window.scrollTop() - elementTop + $('.navbar-static-top').height();
	if(topOffset > 0 && !fixed && $window.innerWidth() >= MIN_WIDTH) {
		element.css({
			'position': 'fixed',
			'top': `${$('.navbar-static-top').height()}px`,
			'left': element.offset().left,
			'z-index': '20'
		});
		fixed = true;
	} else if(topOffset <= 0 && fixed) {
		element.css({
			'position': 'static',
			'left': '',
			'top': '',
			'transform': ''
		});
		fixed = false;
	}
}