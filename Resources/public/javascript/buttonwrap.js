let buttonTrigger;
let buttonList;
let buttons;

class buttonWrap {
    constructor(item) {
        this.item = item
        buttons = this.item.find('a').not('.delete_link');
        buttonTrigger = '<a class="btn btn-default dropdown-toggle btn-group-trigger">acties</a>';
        buttonList = '<div class="btn-group-dropdown dropdown-menu"></div>';
        this.item.find('.btn-group').prepend(buttonTrigger);
        this.item.find('.btn-group').append(buttonList);
        this.item.find('.btn-group-dropdown').append(buttons);
        this.item.find('.btn-group-trigger').append('<span class="caret"></span>');
        buttons.each((index, element) => {
            $(element).wrap('<li></li>');
        });

        this.item.find('.btn-group-trigger').on('click', this.click.bind(this));
    } 
    click() {
        this.item.find('.btn-group-dropdown').toggleClass('is_active');
    }
}

$(function(){
    $('.sonata-ba-list-field:last-of-type').each(function(index,item){
        new buttonWrap($(item));
    });
    
});