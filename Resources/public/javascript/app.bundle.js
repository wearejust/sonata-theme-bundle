!function(n){function t(i){if(e[i])return e[i].exports;var o=e[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){"use strict";e(1),e(2),e(3),e(4),e(5)},function(n,t){"use strict";$(function(){$(document).on("pixSortableBehaviorBundle.success",function(n,t){$("body").append('<div class="alert alert-dismissable alert-success no-delay">%s</div>'.replace("%s",t.result))}),$(document).on("pixSortableBehaviorBundle.error",function(n,t){$("body").append('<div class="alert alert-dismissable alert-danger no-delay">%s</div>'.replace("%s",t.result))}),$(".date input").on("click",function(){$(this).next("span").click()}),$("#username").focus();var n=["INPUT","A","BUTTON","SPAN","I"];$(".box-body table tr:not(.sonata-ba-list-field-header)").each(function(t,e){var i=$(e),o=i.find("a.edit_link");o.length&&i.on("mousedown",function(t){t.preventDefault(),-1===$.inArray($(t.target).prop("tagName"),n)&&(window.location.href=o.attr("href"))})})})},function(n,t){"use strict";function e(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function n(t){e(this,n),this.item=t,this.item.find('input[type="checkbox"]').on("change",this.change.bind(this))}return n.prototype.change=function(){this.item.toggleClass("is_checked")},n}();$(function(){$(".vich-image, .cropper").each(function(n,t){new i($(t))})})},function(n,t){"use strict";function e(){setTimeout(function(){i()},100)}function i(){o.filter(":checked").length?a.addClass("is-visible"):a.removeClass("is-visible")}var o=void 0,a=void 0;$(function(){a=$(".box-footer .form-inline"),a.length&&(o=$('#list_batch_checkbox, .sonata-ba-list input[type="checkbox"]'),o.on("change",e),e())})},function(n,t){"use strict";function e(){$(".filter-box").stop().slideToggle()}$(function(){var n=$(".dropdown.sonata-actions");$(".content-header").append('<div class="filter-box"/>'),$(".sonata-filter-form").appendTo(".filter-box"),n.on("click",e),n.find("ul").css("display","none")})},function(n,t){"use strict";$(".delete_link, .sonata-ba-form-actions .btn-danger").magnificPopup({type:"ajax",closeBtnInside:!0,mainClass:"mfp-fade"})}]);
//# sourceMappingURL=app.bundle.js.map