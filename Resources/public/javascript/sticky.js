require('@wearejust/sticky');

let addBtnClone;
let elOffsetLeft;
let $window = $(window);
let minWidth = 940;
let stickyBtn = $('.add_records.js-sticky');

$(function() {
	if($window.width() > minWidth) {
		$('.add_records').attr('data-sticky-id', 'sticky_add_btn');
		elOffsetLeft = $('.add_records').offset().left;
		addBtnClone = $('.add_records').clone().appendTo('.navbar-collapse');
		addBtnClone.addClass('js-sticky');
		addBtnClone.css('left', elOffsetLeft);
		$(addBtnClone).attr('data-sticky-target', 'sticky_add_btn');
	    $('.js-sticky').sticky({
	        active: 'is_sticky',
	        topHeightOffset: -1.1
	    });
	    $window.resize();
	}
});

$window.resize(function() { 
	if($window.width() > minWidth) {
		setTimeout(() => {
			stickyBtn.show();
			stickyBtn.css('left', $('.add_records').not('.js-sticky').offset().left);
		}, 300);
	} else {
		stickyBtn.css('left', 'inherit');
		stickyBtn.hide();
	}
});