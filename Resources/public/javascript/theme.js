$(function(){

    // Trigger calendar on input click
    // without changing existing HTML
    $('.date input').on('click', function(){
        $(this).next('span').click();
    });

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
                console.log($(e.target).prop('tagName'));
                if($.inArray($(e.target).prop('tagName'),preventNavigation) === -1){
                    window.location.href=linkEl.attr('href')
                }
            })
        }
    });


    let inputChecks = $('.sonata-ba-list input');
    inputChecks.iCheck('uncheck');
    let actionsEl = $('.box-footer .form-inline');
    inputChecks.on('ifToggled', function(){
        let showActions = false;
        for(i=0; i < inputChecks.length; i++)
        {
            if($(inputChecks[i]).prop('checked'))
            {
                showActions = true;
                break;
            }
        }

        actionsEl.removeClass('is-visible');
        if(showActions)
        {
            actionsEl.addClass('is-visible');
        }

    });

});
