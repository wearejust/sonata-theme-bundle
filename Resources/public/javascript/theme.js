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

    $('.box-body table tr:not(.sonata-ba-list-field-header) a.edit_link .js-sortable-move').each(function(index, item){
        item = $(item);
        let url = item.attr('href');
        let el = item.closest('tr');

        el.on('mouseup touchend', function(e){
            if (!$(e.target).is('a, button')) {
               if (e.ctrlKey || e.metaKey || e.which == 2) {
                   window.open(url);
               } else if (e.which != 3) {
                   window.location = url;
               }
           }
        })

    });
});
