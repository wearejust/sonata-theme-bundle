!function(i){function t(e){if(n[e])return n[e].exports;var o=n[e]={exports:{},id:e,loaded:!1};return i[e].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};t.m=i,t.c=n,t.p="",t(0)}([function(i,t,n){"use strict";n(1)},function(t,n){"use strict";$(function(){$(".date input").on("click",function(){$(this).next("span").click()});var t=["INPUT","A","BUTTON","SPAN"];$(".box-body table tr:not(.sonata-ba-list-field-header)").each(function(i,n){var e=$(n),o=e.find("a.edit_link");o.length&&e.on("click",function(i){-1===$.inArray($(i.target).prop("tagName"),t)&&(window.location.href=o.attr("href"))})}),$("input").iCheck("uncheck");var n=$(".sonata-ba-list input"),e=$(".box-footer .form-inline");n.on("ifToggled",function(){var t=!1;for(i=0;i<n.length;i++)if($(n[i]).prop("checked")){t=!0;break}e.removeClass("is-visible"),t&&e.addClass("is-visible")})})}]);
//# sourceMappingURL=app.bundle.js.map