!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";t(1),t(2),t(3),t(4),t(5)},function(e,n){"use strict";$(function(){$(document).on("pixSortableBehaviorBundle.success",function(e,n){$("body").append('<div class="alert alert-dismissable alert-success no-delay">%s</div>'.replace("%s",n.result))}),$(document).on("pixSortableBehaviorBundle.error",function(e,n){$("body").append('<div class="alert alert-dismissable alert-danger no-delay">%s</div>'.replace("%s",n.result))}),$(".date input").on("click",function(){$(this).next("span").click()}),$("#username").focus();var e=["INPUT","A","BUTTON","SPAN","I"];$(".box-body table tr:not(.sonata-ba-list-field-header)").each(function(n,t){var i=$(t),o=i.find("a.edit_link");o.length&&i.on("mousedown",function(n){n.preventDefault(),-1===$.inArray($(n.target).prop("tagName"),e)&&(window.location.href=o.attr("href"))})})})},function(e,n){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(){$('*[name="btn_update_and_edit"]').click()}function o(){$.magnificPopup.close()}var a='<div class="sonata-ba-delete popup-file-delete mfp-hide">\n                        <div class="box box-danger">\n                            <div class="box-header">\n                                <h3 class="box-title">Bevestig verwijdering</h3>\n                            </div>\n                            <div class="box-body">\n                                Weet je zeker dat de geselecteerde afbeelding moet worden verwijderd?\n                            </div>\n                            <div class="box-footer clearfix">\n                                <button class="btn btn-danger js-trigger-save"><i class="fa fa-trash" aria-hidden="true"></i> Ja, verwijder</button>\n                                <button class="btn btn-success js-trigger-cancel" href="/admin/wearejust/example/post/1/edit">\n                                <i class="fa fa-pencil" aria-hidden="true"></i>\n                                Behouden</button>\n                            </div>\n                        </div>\n                        <button title="Close (Esc)" type="button" class="mfp-close js-trigger-cancel">×</button>\n                    </div>',s=function(){function e(n){t(this,e),$("body").append(a),this.item=n,this.item.find('input[type="checkbox"]').on("change",this.change.bind(this)),$(".js-trigger-save").on("click",i),$(".js-trigger-cancel").on("click",o)}return e.prototype.change=function(){$.magnificPopup.open({items:{src:".popup-file-delete"},type:"inline",callbacks:{close:function(){$(".vich-image, .cropper").find('input[type="checkbox"]').attr("checked",!1)}}})},e}();$(function(){$(".vich-image").each(function(e,n){new s($(n))})})},function(e,n){"use strict";function t(){setTimeout(function(){i()},100)}function i(){o.filter(":checked").length?a.addClass("is-visible"):a.removeClass("is-visible")}var o=void 0,a=void 0;$(function(){a=$(".box-footer .form-inline"),a.length&&(o=$('#list_batch_checkbox, .sonata-ba-list input[type="checkbox"]'),o.on("change",t),t())})},function(e,n){"use strict";function t(){$(".filter-box").stop().slideToggle()}$(function(){var e=$(".dropdown.sonata-actions");$(".content-header").append('<div class="filter-box"/>'),$(".sonata-filter-form").appendTo(".filter-box"),e.on("click",t),e.find("ul").css("display","none")})},function(e,n){"use strict";$(function(){$(".delete_link, .sonata-ba-form-actions .btn-danger").magnificPopup({type:"ajax",closeBtnInside:!0,mainClass:"mfp-fade"})})}]);
//# sourceMappingURL=app.bundle.js.map