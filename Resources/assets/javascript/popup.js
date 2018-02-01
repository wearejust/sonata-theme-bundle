$(function(){
	$('.delete_link, .sonata-ba-form-actions .btn-danger').magnificPopup({
	    type: 'ajax',
	    closeBtnInside: true,
	    mainClass: 'mfp-fade'
	});

	$('.js-list-table form').submit(function(event){
        event.preventDefault();
        var $form = $(this);

        $.ajax({
            type: 'POST',
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(data) {
                var $elm = $('#formResult');
                $elm.html(data);
                $.magnificPopup.open({
                    items: {
                        src: $elm.html(),
                        type: 'inline'
                    }
                });

            },
            error: function(error) {
                // Do something with the error
            }
        });
    });
});