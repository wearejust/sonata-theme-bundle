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

    $('.cropper input[type="checkbox"').on('change', function() {
        $('.cropper').find('.cropper-canvas-has-delete').toggleClass('delete');
    });

    // Trigger calendar on input click
    // without changing existing HTML
    $('.date input').on('click', function(){
        $(this).next('span').click();
    });

    $('#username').focus();

    $('.box-body table tr:not(.sonata-ba-list-field-header) a.edit_link').each(function(index, item){
        item = $(item);
        let url = item.attr('href');
        let el = item.closest('tr');

        el.on('mouseup touchend', function(e){
            if ($('body').hasClass('is-dragging')) return;

            if (!$(e.target).is('input, a, button, .js-sortable-move')) {
                if (e.ctrlKey || e.metaKey || e.which == 2) {
                    window.open(url);
                } else if (e.which != 3) {
                    window.location = url;
                }
            }
        })

    });
});