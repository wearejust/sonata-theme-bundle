!function(n){function t(e){if(i[e])return i[e].exports;var o=i[e]={exports:{},id:e,loaded:!1};return n[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};t.m=n,t.c=i,t.p="",t(0)}([function(n,t,i){"use strict";i(1),i(2),i(3)},function(n,t){"use strict";$(function(){$(".date input").on("click",function(){$(this).next("span").click()}),$("#username").focus(),$(".delete_link, .sonata-ba-form-actions .btn-danger").magnificPopup({type:"ajax",closeBtnInside:!0,mainClass:"mfp-fade"});var n=["INPUT","A","BUTTON","SPAN","I"];$(".box-body table tr:not(.sonata-ba-list-field-header)").each(function(t,i){var e=$(i),o=e.find("a.edit_link");o.length&&e.on("mousedown",function(t){t.preventDefault(),-1===$.inArray($(t.target).prop("tagName"),n)&&(window.location.href=o.attr("href"))})})})},function(n,t){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var e=function(){function n(t){i(this,n),this.item=t,this.item.find(".checkbox ins").on("click",this.click.bind(this))}return n.prototype.click=function(){this.item.toggleClass("is_checked")},n}();$(function(){$(".vich-image").each(function(n,t){new e($(t))})})},function(n,t){"use strict";function i(){var n=$(".box-footer .form-inline");$(".sonata-ba-list input:checkbox:checked").length?n.addClass("is-visible"):n.removeClass("is-visible")}$(function(){$("#list_batch_checkbox, .sonata-ba-list input").on("change",function(){setTimeout(function(){i()},100)}),i()})}]);
//# sourceMappingURL=app.bundle.js.map