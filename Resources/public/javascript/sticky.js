let $window = $(window);
let windowOffsetTop;
let elOffsetTop;
let elOffsetLeft;
let elOldPos;
let startPos;


class sticky {
    constructor(item) {
        this.item = item;
        elOffsetLeft = this.item.offset().left;
        elOldPos = this.item.offset().top;
        $window.on('scroll', this.makeSticky.bind(this));
        $window.on('resize', this.resize.bind(this));
    } 

    makeSticky() {
    	windowOffsetTop = $window.scrollTop();
    	elOffsetTop = this.item.offset().top;
        startPos = elOffsetTop - windowOffsetTop;
        if(startPos < 50) {
        	this.item.addClass('is_sticky');
        	this.item.css({
        		'left': elOffsetLeft,
        		'top': 50
        	});
        }
        if((windowOffsetTop + (this.item.outerHeight(true))) < elOldPos) {
        	this.item.removeClass('is_sticky');
        	this.item.css({
        		'left': 'inherit',
        		'top': 'inherit'
        	});
        }
    }

    resize() {
    	elOffsetLeft = this.item.offset().left;
    }
}

$(function(){
	let stickyItems = [
		'.add_records .sonata-action-element'
	];

	stickyItems.map((item, index) => {
	  	$(item).addClass('js-sticky');
	});

    $('.js-sticky').each(function(index,item){
        new sticky($(item));
    });
    
});