$(function(){
    let trigger = $('.dropdown'); 
    $('.content-header').append('<div class="filter-box"/>');
    $('.sonata-filter-form').appendTo('.filter-box');
    trigger.on('click', click);
    trigger.find('ul').css('display', 'none');
});

function click() {
    $('.filter-box').slideToggle();
}
