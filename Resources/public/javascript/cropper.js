let cropTrigger;

class cropSave {
    constructor(item) {
        this.item = item
        cropTrigger = $('*[data-method="getCroppedCanvas"]');
        cropTrigger.on('click', this.save.bind(this));
    } 
    save() {
    	setTimeout(function() {
    		$('*[name="btn_update_and_edit"]').click();
    	}, 500);
        
    }
}

$(function(){
    $('.cropper').each(function(index,item){
        new cropSave($(item));
    });
});



