class Cropper {
    constructor(item) {
        this.item = item;
        this.item.find($('*[data-method="getCroppedCanvas"]')).on('click', this.save.bind(this));
    } 

    save() {
        let updateBtn = $('*[name="btn_update_and_edit"]');
        if(!updateBtn.length) return;
        
    	setTimeout(function() {
    		updateBtn.click();
    	}, 500); 
    }
}

$(function(){
    $('.cropper').each(function(index,item){
        new Cropper($(item));
    });
});



