let removePopup = `<div class="sonata-ba-delete popup-file-delete mfp-hide">
                        <div class="box box-danger">
                            <div class="box-header">
                                <h3 class="box-title">Bevestig verwijdering</h3>
                            </div>
                            <div class="box-body">
                                Weet je zeker dat de geselecteerde afbeelding moet worden verwijderd?
                            </div>
                            <div class="box-footer clearfix">
                                <button class="btn btn-danger js-trigger-save"><i class="fa fa-trash" aria-hidden="true"></i> Ja, verwijder</button>
                                <button class="btn btn-success js-trigger-cancel" href="/admin/wearejust/example/post/1/edit">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                                Behouden</button>
                            </div>
                        </div>
                        <button title="Close (Esc)" type="button" class="mfp-close js-trigger-cancel">×</button>
                    </div>`;

class imageRemove {
    constructor(item) {
        $('body').append(removePopup);
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
    $('*[name="btn_update_and_edit"]').click();
}

function cancel() {
    $.magnificPopup.close();   
}

$(function(){
    $('.vich-image').each(function(index,item){
        new imageRemove($(item));
    });
});