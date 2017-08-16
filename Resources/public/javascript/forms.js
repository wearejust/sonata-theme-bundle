class imageRemove {
    constructor(item) {
        this.item = item
        this.item.find('input[type="checkbox"]').on('change', this.change.bind(this));
    } 
    change() {
        this.item.toggleClass('is_checked');
    }
}

$(function(){
    $('.vich-image, .cropper').each(function(index,item){
        new imageRemove($(item));
    });
    
});