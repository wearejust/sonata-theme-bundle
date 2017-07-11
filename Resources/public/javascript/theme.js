$(function(){

    let msg = '<div class="alert alert-dismissable alert-success">%s</div>';
    let msgAlt = '<div class="alert alert-dismissable alert-danger">%s</div>'

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

    $('.delete_link, .sonata-ba-form-actions .btn-danger').magnificPopup({
        type: 'ajax',
        closeBtnInside: true,
        mainClass: 'mfp-fade'
    });

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

            el.on('mousedown', function(e){
                e.preventDefault();
                if($.inArray($(e.target).prop('tagName'),preventNavigation) === -1){
                    window.location.href=linkEl.attr('href')
                }
            })
        }
    });
});
