$(function(){
    $('#list_batch_checkbox, .sonata-ba-list input').on('change', function(){
        setTimeout(function(){ change(); }, 100);
    });
    change();
});
function change() {
    let actionEl = $('.box-footer .form-inline');

    if($('.sonata-ba-list input:checked').length) {
        actionEl.addClass('is-visible');
    } else {
        actionEl.removeClass('is-visible');
    }
}
