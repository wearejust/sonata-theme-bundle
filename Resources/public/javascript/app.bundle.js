!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";i(1),i(2),i(3),i(4),i(5),i(6)},function(t,e){"use strict";$(function(){$(document).on("pixSortableBehaviorBundle.success",function(t,e){$("body").append('<div class="alert alert-dismissable alert-success no-delay">%s</div>'.replace("%s",e.result))}),$(document).on("pixSortableBehaviorBundle.error",function(t,e){$("body").append('<div class="alert alert-dismissable alert-danger no-delay">%s</div>'.replace("%s",e.result))}),$(".date input").on("click",function(){$(this).next("span").click()}),$("#username").focus(),$(".box-body table tr:not(.sonata-ba-list-field-header) a.edit_link").each(function(t,e){e=$(e);var i=e.attr("href");e.closest("tr").on("mouseup touchend",function(t){$("body").hasClass("is-dragging")||$(t.target).is("a, button, .js-sortable-move")||(t.ctrlKey||t.metaKey||2==t.which?window.open(i):3!=t.which&&(window.location=i))})})})},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(){$(".popup-file-delete .anim-loading, .popup-file-delete .box").addClass("is_active"),$('*[name="btn_update_and_edit"]').click()}function s(){$.magnificPopup.close()}var o=function(){function t(e){i(this,t),$.get("/wearejust/sonata_theme/delete_dialog",function(t){$("body").append(t)}),this.item=e,this.item.find('input[type="checkbox"]').on("change",this.change.bind(this)),$(".js-trigger-save").on("click",n),$(".js-trigger-cancel").on("click",s)}return t.prototype.change=function(){$.magnificPopup.open({items:{src:".popup-file-delete"},type:"inline",callbacks:{close:function(){$(".vich-image, .cropper").find('input[type="checkbox"]').attr("checked",!1)}}})},t}();$(function(){$(".vich-image, .cropper").each(function(t,e){new o($(e))})})},function(t,e){"use strict";function i(){setTimeout(function(){n()},100)}function n(){s.filter(":checked").length?o.addClass("is-visible"):o.removeClass("is-visible")}var s=void 0,o=void 0;$(function(){o=$(".box-footer .form-inline"),o.length&&(s=$('#list_batch_checkbox, .sonata-ba-list input[type="checkbox"]'),s.on("change",i),i())})},function(t,e){"use strict";function i(){$(".filter-box").stop().slideToggle()}$(function(){var t=$(".dropdown.sonata-actions");$(".content-header").append('<div class="filter-box"/>'),$(".sonata-filter-form").appendTo(".filter-box"),t.on("click",i),t.find("ul").css("display","none")})},function(t,e){"use strict";$(function(){$(".delete_link, .sonata-ba-form-actions .btn-danger").magnificPopup({type:"ajax",closeBtnInside:!0,mainClass:"mfp-fade"})})},function(t,e,i){"use strict";function n(){clearTimeout(l),l=setTimeout(s,300)}function s(){a.width()>=o?d||(d=!0,c.show()):d&&(d=!1,c.css("left",""),c.hide()),d&&c.css("left",r.offset().left)}i(7);var o=940,a=$(window),c=void 0,r=void 0,l=void 0,d=void 0;$(function(){r=$(".add_records"),r.length&&(r.attr("data-sticky-id","sticky_add_btn"),c=r.clone(!0).appendTo(".navbar-collapse"),c.addClass("is-clone"),c.css("left",r.offset().left),c.attr("data-sticky-target","sticky_add_btn"),c.sticky({active:"is-sticky",topHeightOffset:-1.1}),a.on("resize",n),s())})},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=$(window);t.exports=function(t,e){t.data("Sticky")||t.data("Sticky",new s(t,e))},$.fn.sticky=function(e){return $(this).each(function(i,n){t.exports($(n),e)})};var s=function(){function t(e,s){i(this,t),this.element=e,this.id=this.element.attr("data-sticky-target"),this.id&&(this.target=$('[data-sticky-id="'+this.id+'"]'),this.target.length&&(this.options=$.extend({active:"is-active",topHeightOffset:0},s),this.active=this.element.hasClass(this.options.active),n.on("resize",this.resize.bind(this)),n.on("scroll",this.scroll.bind(this)),this.resize()))}return t.prototype.resize=function(){this.top=this.target.offset().top,this.options.topHeightOffset&&(this.top+=this.target.outerHeight()*this.options.topHeightOffset),this.scroll()},t.prototype.scroll=function(){n.scrollTop()>=this.top?this.active||(this.active=!0,this.element.addClass(this.options.active)):this.active&&(this.active=!1,this.element.removeClass(this.options.active))},t}()}]);
//# sourceMappingURL=app.bundle.js.map