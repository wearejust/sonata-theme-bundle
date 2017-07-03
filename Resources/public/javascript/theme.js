$(function(){
    /* 
        Trigger calendar on input click
        without changing existing HTML
    */
    $('.date input').on('click', function(){
        $(this).next('span').click();
    });


    //Make complete TR linkable
    let preventNavigation = [
        'INPUT',
        'A',
        'BUTTON',
        'SPAN'
    ];

    $('.box-body table tr:not(.sonata-ba-list-field-header)').each(function(index, item){
        let el = $(item);
        let linkEl = el.find('a.edit_link');
        if(linkEl.length) {

            el.on('click', function(e){
                if($.inArray($(e.target).prop('tagName'),preventNavigation) === -1){
                    window.location.href=linkEl.attr('href')
                }
            })
        }
    });

    let inputChecks = $('.sonata-ba-list input');
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