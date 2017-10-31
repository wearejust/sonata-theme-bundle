class imageRemove {
    constructor(item) {
        $.get('/wearejust/sonata_theme/delete_dialog', function(html) {
            $('body').append(html);
        });
        
        this.item = item
        this.item.find('input[type="checkbox"]').on('change', this.change.bind(this));
        $('.js-trigger-save').on('click', forceSave);
        $('.js-trigger-cancel').on('click', cancel);
    }
    change() {
        $.magnificPopup.open({
            items: {
                src: '.popup-file-delete'
            },
            type: 'inline',
            callbacks: {
                close: function(){
                    $('.vich-image, .cropper').find('input[type="checkbox"]').attr('checked', false);       
                }
            }
        });
    }
}

function forceSave() {
    $('.popup-file-delete .anim-loading, .popup-file-delete .box').addClass('is_active');
    $('*[name="btn_update_and_edit"]').click();
}

function cancel() {
    $.magnificPopup.close();   
}

$(function(){
    $('.vich-image, .cropper').each(function(index,item){
        new imageRemove($(item));
    });
});