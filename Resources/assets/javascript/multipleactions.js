let checkboxes;
let element;

$(function(){
    element = $('.box-footer .form-inline');
    if(!element.length) return;

    checkboxes = $('#list_batch_checkbox, .sonata-ba-list input[type="checkbox"]');
    checkboxes.on('change', change);
    change();
});

function change() {
    setTimeout(function() {
        toggle();
    },100);
}
    
function toggle() {
    if(checkboxes.filter(':checked').length) {
        element.addClass('is-visible');
    } else {
        element.removeClass('is-visible');
    }
} 