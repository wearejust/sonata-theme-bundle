let updateExitBtn;

$(function(){
    updateExitBtn = $('*[name="btn_update_and_edit"]');
    if(!updateExitBtn.length) return;

    $('.cropper').each(function(index,item){
        new Cropper($(item));
    });
});

class Cropper {
    constructor(item) {
        this.item = item;
        this.item.find('*[data-method="getCroppedCanvas"]').on('click', this.save.bind(this));
    } 

    save() {
    	setTimeout(function() {
    		updateExitBtn.click();
    	}, 500); 
    }
}



