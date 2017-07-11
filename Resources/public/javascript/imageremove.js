class imageRemove {
    constructor(item) {
        this.item = item
        this.item.find('.checkbox ins').on('click', this.click.bind(this));
    } 
    click() {
        this.item.toggleClass('is_checked');
    }
}

$(function(){
    $('.vich-image').each(function(index,item){
        new imageRemove($(item));
    });
    
});