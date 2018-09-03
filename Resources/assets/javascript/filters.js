$(function(){
    $('.navbar-header').append('<div class="filter-box"/>');
    $('.sonata-filter-form').appendTo('.filter-box');
    $('.dropdown.sonata-actions').each(function(index, item) {
        item = $(item);
        if(!item.find('.sonata-ba-action').length) return;
        if (!item.data('Dropdown')) {
            item.data('Dropdown', new Dropdown(item));
        }
    });
});
    
class Dropdown {
    constructor(item, html) {
        this.item = item;
        this.item.find('ul').css('display', 'none');
        this.item.on('click', this.toggle.bind(this));
    }
    toggle() {
        $('.filter-box').stop().slideToggle();
    }
}