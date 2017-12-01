$(function(){
    let elements = $('.vich-image, .cropper');
    if(!elements.length) return;

    $.get('/wearejust/sonata_theme/delete_dialog', (html) => {
        elements.each(function(index,item){
            new imageRemove($(item), html);
        });
    });

});

class imageRemove {
    constructor(item, html) {
        this.item = item;
        this.dialog = $(html);
        this.checkbox = this.item.find('input[type="checkbox"]');
        this.item.append(this.dialog);
        this.checkbox.on('change', this.change.bind(this));
        this.item.find('.js-delete-cancel').on('click', this.cancel.bind(this));
    }

    change() {
        this.item.find('input, img, .checkbox, .cropper-local').toggleClass('accessibility');
        this.dialog.toggleClass('is-active');
    }

    remove(e) {
        e.preventDefault();
    }

    cancel(e) {
        e.preventDefault();
        this.change();
        this.checkbox.attr('checked', false);  
    }
}

