$(function(){

    let msg = '<div class="alert alert-dismissable alert-success no-delay">%s</div>';
    let msgAlt = '<div class="alert alert-dismissable alert-danger no-delay">%s</div>'

    $(document).on('pixSortableBehaviorBundle.success', (e, data) => {
        $('body').append(
            msg.replace('%s', data.result)
        );
    });

    $(document).on('pixSortableBehaviorBundle.error', (e, data) => {
        $('body').append(
            msgAlt.replace('%s', data.result)
        );
    });

    // Trigger calendar on input click
    // without changing existing HTML
    $('.date input').on('click', function(){
        $(this).next('span').click();
    });

    $('#username').focus();

    //Make complete TR linkable
    let preventNavigation = [ 
        'INPUT', 
        'A', 
        'BUTTON', 
        'SPAN', 
        'I' 
    ]; 
 
    $('.box-body table tr:not(.sonata-ba-list-field-header)').each(function(index, item){ 
        let el = $(item); 
        let linkEl = el.find('a.edit_link'); 
        if(linkEl.length) { 
            el.on('mouseup touchend', function(e){ 
                e.preventDefault(); 
                if($.inArray($(e.target).prop('tagName'),preventNavigation) === -1){ 
                    window.location.href=linkEl.attr('href') 
                } 
            }) 
        } 
    });
});
