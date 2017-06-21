$(function(){
    /* 
        Trigger calendar on input click
        without changing existing HTML
    */
    $('.date input').on('click', function(){
        $(this).next('span').click();
    });
});