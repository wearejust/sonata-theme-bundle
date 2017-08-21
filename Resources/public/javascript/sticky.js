require('@wearejust/sticky');

let addBtnClone;
let elOffsetLeft;

$(function() {
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
});







// let $window = $(window);
// let windowOffsetTop;
// let elOffsetTop;
// let elOffsetLeft;
// let elOldPos;
// let startPos;
// let stickyItems = [
// 	'.add_records .sonata-action-element',
// ];

// class sticky {
//     constructor(item) {
//         this.item = item;
//         elOffsetLeft = this.item.offset().left;
//         elOldPos = this.item.offset().top;
//         $window.on('scroll', this.makeSticky.bind(this));
//         $window.on('resize', this.resize.bind(this));
//     } 

//     makeSticky() {
//     	windowOffsetTop = $window.scrollTop();
//     	elOffsetTop = this.item.offset().top;
//         startPos = elOffsetTop - windowOffsetTop;
//         if(startPos) {
//         	this.item.addClass('is_sticky');
//         	this.item.css({
//         		'left': elOffsetLeft,
//         		'top': 50
//         	});
//         }
//         if((windowOffsetTop + (this.item.outerHeight(true))) < elOldPos) {
//         	this.item.removeClass('is_sticky');
//         	this.item.css({
//         		'left': 'inherit',
//         		'top': 'inherit'
//         	});
//         }
//     }

//     resize() {
//     	elOffsetLeft = this.item.offset().left;
//     }
// }

// $(function(){
	

// 	stickyItems.map((item, index) => {
// 	  	$(item).addClass('js-sticky');
// 	});

//     $('.js-sticky').each(function(index,item){
//         new sticky($(item));
//     });
    
// });